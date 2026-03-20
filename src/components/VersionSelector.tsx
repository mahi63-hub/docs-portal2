import React from 'react';
import { useRouter } from 'next/router';

export default function VersionSelector() {
  const router = useRouter();
  // We can extract current version from the query parameter if we're on a doc page
  const currentVersion = router.query.version as string || 'v1';

  const changeVersion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextVersion = e.target.value;
    // Simple approach: modify the URL if we are on a versioned doc route
    if (router.pathname === '/docs/[version]/[slug]') {
      router.push(`/docs/${nextVersion}/${router.query.slug}`);
    } else {
      router.push(`/docs/${nextVersion}/introduction`);
    }
  };

  return (
    <select
      data-testid="version-selector"
      value={currentVersion}
      onChange={changeVersion}
      className="border rounded p-1 bg-transparent"
    >
      <option data-testid="version-option-v1" value="v1">v1</option>
      <option data-testid="version-option-v2" value="v2">v2</option>
      <option data-testid="version-option-v3" value="v3">v3</option>
    </select>
  );
}
