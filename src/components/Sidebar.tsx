import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar({ className }: { className?: string }) {
  const router = useRouter();
  const currentVersion = router.query.version as string || 'v1';

  // In a real app, this would be generated from the file system or a config
  const links = [
    { slug: 'introduction', label: 'Introduction' }
  ];

  return (
    <aside data-testid="sidebar" className={className}>
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.slug}>
              <Link
                href={`/docs/${currentVersion}/${link.slug}`}
                data-testid={`sidebar-nav-link-${link.slug}`}
                className="hover:underline text-blue-600 block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
