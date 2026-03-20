import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import VersionSelector from './VersionSelector';
import Search from './Search';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-xl">
          Docs Portal
        </Link>
        <VersionSelector />
        <Link href="/api-reference" className="text-blue-500 hover:underline text-sm ml-4">
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
