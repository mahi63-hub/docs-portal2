import Link from 'next/link';
import { ArrowRight, Book, Layers, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-800/50 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          v1.0 is now live!
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          Supercharge Your <br className="hidden md:block"/> Development.
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
          The ultimate platform for fast, reliable, and beautifully designed application documentation. Explore our extensive guides and APIs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="/docs/v1/introduction" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Start Reading Docs
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link 
            href="/api-reference" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Explore API
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-32 grid md:grid-cols-3 gap-8 w-full">
        {[
          { icon: <Book className="text-blue-500" size={28} />, title: 'Comprehensive Guides', desc: 'Dive deep into our interactive documentation covering every aspect.' },
          { icon: <Layers className="text-indigo-500" size={28} />, title: 'Seamless Integration', desc: 'Connect your resources with native tools built for scale.' },
          { icon: <Shield className="text-teal-500" size={28} />, title: 'Highly Reliable', desc: 'Stable APIs and infrastructure you can depend on in production.' }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
