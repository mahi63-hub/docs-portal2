import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getDocBySlug } from '../../../lib/docs';
import Head from 'next/head';

interface DocProps {
  doc: {
    slug: string;
    contentHtml: string;
    title?: string;
  };
}

export default function DocPage({ doc }: DocProps) {
  if (!doc) {
    return <div>Doc not found</div>;
  }

  return (
    <>
      <Head>
        <title>{doc.title || doc.slug} - Docs Portal</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: doc.contentHtml }} />
      </article>
      {/* TODO: Add TOC, Feedback Widget, Code Copy scripts */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // Just prebuilding v1 introduction for demonstration, others fallback to blocking
  const paths = (locales || ['en']).map(locale => ({
    params: { version: 'v1', slug: 'introduction' },
    locale
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const version = (params?.version as string) || 'v1';
  const slug = (params?.slug as string) || 'introduction';
  const docLocale = locale || 'en';

  const doc = await getDocBySlug(docLocale, version, slug);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      doc,
      ...(await serverSideTranslations(docLocale, ['common'])),
    },
    // ISR: revalidate every 60 seconds
    revalidate: 60,
  };
};
