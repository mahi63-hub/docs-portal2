import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'swagger-ui-react/swagger-ui.css';

// Swagger UI needs to be rendered on the client side only
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiReference() {
  return (
    <div className="p-8 bg-white dark:bg-gray-100 dark:text-gray-900 rounded shadow-md h-full">
      <Head>
        <title>API Reference - Docs Portal</title>
      </Head>
      <SwaggerUI url="/openapi.json" />
    </div>
  );
}
