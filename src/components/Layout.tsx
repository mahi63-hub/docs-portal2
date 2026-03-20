import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Header />
      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        {!isHomePage && (
          <Sidebar className="w-64 border-r dark:border-slate-800 p-6 hidden md:block shrink-0" />
        )}
        <main 
          className={`flex-1 ${isHomePage ? '' : 'p-8 md:p-12'} w-full transition-all`} 
          data-testid={isHomePage ? '' : 'doc-content'}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
