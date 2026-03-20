# Docs Portal

A high-performance, multi-language documentation portal built with Next.js Pages Router. 

## Features
- **Incremental Static Regeneration (ISR)**: Fast and fresh content with 60s revalidation.
- **Internationalization (i18n)**: English, Spanish, French, and German translation.
- **Version Control**: Support for multiple documentation versions (v1, v2, v3).
- **Dark Mode**: Integrated `next-themes` for system-preference based dark mode.
- **Client-Side Search**: A React-based search filtering system across documentation.
- **Code Blocks**: Interactive `Copy Code` buttons on code listings.
- **Table of Contents**: Auto-generated TOC with `<IntersectionObserver>` active highlighting.
- **API Reference**: Swagger UI rendering OpenAPI schema from `public/openapi.json`.
- **Feedback Widget**: Captures mock user feedback asynchronously.
- **Containerized**: Fully Dockerized standard setup `docker-compose`.

## Setup
Ensure you have Docker and Docker Compose installed.

1. Copy `.env.example` to `.env`.
2. Run `docker-compose up --build -d`.
3. Application will be available on `http://localhost:3000`.

## Architecture Decisions
- Used Next.js Pages Router for first-class `next-i18next` integration matching the ISR `getStaticProps` requirements dynamically.
- `flex-col` layout splitting main content and `aside` components for TOC.

## Tests
All interactive components have specific `data-testid` mappings implemented according to the required specifications.
