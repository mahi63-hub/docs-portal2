import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BookOpen, Compass, Code, Zap } from 'lucide-react';

export default function Sidebar({ className }: { className?: string }) {
  const router = useRouter();
  const currentVersion = router.query.version as string || 'v1';

  // In a real app, this would be generated from the file system or a config
  const links = [
    { slug: 'introduction', label: 'Introduction', icon: <BookOpen size={18} /> },
    { slug: 'quick-start', label: 'Quick Start', icon: <Zap size={18} /> },
    { slug: 'architecture', label: 'Architecture', icon: <Compass size={18} /> },
    { slug: 'api-basics', label: 'API Basics', icon: <Code size={18} /> },
  ];

  return (
    <aside data-testid="sidebar" className={`${className} bg-slate-50 dark:bg-[#0f1115] transition-colors`}>
      <div className="sticky top-6">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
          Documentation
        </h4>
        <nav>
          <ul className="space-y-1">
            {links.map((link) => {
              const active = router.query.slug === link.slug;
              return (
                <li key={link.slug}>
                  <Link
                    href={`/docs/${currentVersion}/${link.slug}`}
                    data-testid={`sidebar-nav-link-${link.slug}`}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                      ${active 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
