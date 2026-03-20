import React, { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

export default function TableOfContents({ htmlContent }: { htmlContent: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // A simple parsing of headers from htmlContent or from the DOM
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    const headerElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const items: TOCItem[] = Array.from(headerElements).map((el) => {
      // Create an ID if one doesn't exist
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
      return { id, text: el.textContent || '' };
    });
    setHeadings(items);

    // Apply IDs to the actual DOM elements because remark-html might not add them
    const actualHeaders = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    actualHeaders.forEach(el => {
       if (!el.id) {
           el.id = el.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
       }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -50% 0%' }
    );

    actualHeaders.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, [htmlContent]);

  if (headings.length === 0) return null;

  return (
    <div data-testid="table-of-contents" className="mt-8 border-t pt-4">
      <h3 className="font-bold mb-2">Table of Contents</h3>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              data-testid={`toc-link-${h.id}`}
              data-active={activeId === h.id ? 'true' : 'false'}
              className={`hover:underline ${activeId === h.id ? 'font-bold text-blue-500' : ''}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
