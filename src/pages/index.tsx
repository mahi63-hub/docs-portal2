import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Automatically redirect the homepage to the first documentation page
    router.replace('/docs/v1/introduction');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="animate-pulse text-slate-500">Loading documentation...</div>
    </div>
  );
}
