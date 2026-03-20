import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar className="w-64 border-r p-4 hidden md:block" />
        <main className="flex-1 p-8" data-testid="doc-content">
          {children}
        </main>
      </div>
    </div>
  );
}
