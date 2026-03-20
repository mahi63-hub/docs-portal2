import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getDocBySlug } from '../../../lib/docs';
import Head from 'next/head';
import TableOfContents from '../../../components/TableOfContents';
import FeedbackWidget from '../../../components/FeedbackWidget';

interface DocProps {
  doc: {
    slug: string;
    contentHtml: string;
    title?: string;
  };
}

export default function DocPage({ doc }: DocProps) {
  useEffect(() => {
    // Add copy buttons to code blocks
    const blocks = document.querySelectorAll('pre');
    blocks.forEach((block) => {
      if (block.querySelector('button')) return;
      
      block.setAttribute('data-testid', 'code-block');
      block.style.position = 'relative';

      const button = document.createElement('button');
      button.innerText = 'Copy';
      button.setAttribute('data-testid', 'copy-code-button');
      button.className = 'absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-600';
      
      button.onclick = () => {
        const code = block.querySelector('code')?.innerText || block.innerText;
        navigator.clipboard.writeText(code);
        button.innerText = 'Copied!';
        setTimeout(() => (button.innerText = 'Copy'), 2000);
      };

      block.appendChild(button);
    });
  }, [doc]);

  if (!doc) {
    return <div>Doc not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Head>
        <title>{doc.title || doc.slug} - Docs Portal</title>
      </Head>
      <article className="flex-1 prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
        <FeedbackWidget />
      </article>
      <aside className="w-full md:w-64">
        <div className="sticky top-4">
          <TableOfContents htmlContent={doc.contentHtml} />
        </div>
      </aside>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = (locales || ['en']).map(locale => ({
    params: { version: 'v1', slug: 'introduction' },
    locale
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const version = (params?.version as string) || 'v1';
  const slug = (params?.slug as string) || 'introduction';
  const docLocale = locale || 'en';

  const doc = await getDocBySlug(docLocale, version, slug);

  if (!doc) { return { notFound: true }; }

  return {
    props: {
      doc,
      ...(await serverSideTranslations(docLocale, ['common'])),
    },
    revalidate: 60,
  };
};
