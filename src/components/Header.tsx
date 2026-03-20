import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import VersionSelector from './VersionSelector';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('common');
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-xl">
          Docs Portal
        </Link>
        <VersionSelector />
      </div>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
