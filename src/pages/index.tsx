import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Docs Portal</h1>
      <Link href="/docs/v1/introduction" className="text-blue-500 hover:underline">
        Go to Docs v1
      </Link>
    </div>
  );
}
