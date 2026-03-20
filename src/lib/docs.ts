import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const docsDirectory = path.join(process.cwd(), '_docs');

export function getDocSlugs(locale: string, version: string) {
  const dirPath = path.join(docsDirectory, locale, version);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith('.md'));
}

export async function getDocBySlug(locale: string = 'en', version: string = 'v1', slug: string) {
  const fullPath = path.join(docsDirectory, locale, version, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  const parsedContent = await remark().use(html).process(content);
  const contentHtml = parsedContent.toString();

  return {
    slug,
    contentHtml,
    ...(data as { [key: string]: any })
  };
}
