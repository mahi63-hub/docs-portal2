import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <select
      data-testid="language-switcher"
      value={locale}
      onChange={changeLanguage}
      className="border rounded p-1 bg-transparent"
    >
      <option value="en">English (en)</option>
      <option value="es">Español (es)</option>
      <option value="fr">Français (fr)</option>
      <option value="de">Deutsch (de)</option>
    </select>
  );
}
