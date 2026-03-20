import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import Search from './Search';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b dark:border-slate-800 bg-white dark:bg-[#0a0a0a]">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
          Docs Portal
        </Link>
        <Link href="/api-reference" className="text-blue-500 hover:underline text-sm ml-4 font-medium">
          API Ref
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Search />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
