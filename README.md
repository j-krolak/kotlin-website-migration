# Kotlin Website - React Router 7 SSR Migration

A migration of the Kotlin programming language official website
from the original Flask backend to modern React Router 7 with Server-Side Rendering.

## Project Overview

This is a test assignment for JetBrains internship program. The project successfully
migrates the Kotlin homepage to a modern full-stack React setup while maintaining
visual accuracy and all interactive functionality.

## Key Features

- ✅ **Server-Side Rendering (SSR)** - Page renders on server, fully functional after hydration
- ✅ **React Router 7 Framework Mode** - Modern routing with file-based structure
- ✅ **TypeScript** - Full type safety throughout
- ✅ **@rescui Components** - UI components from JetBrains
- ✅ **Production Ready** - Docker, proper build tools, error handling

### SEO, A11y and performance

Chrome Lighthouse — before vs after optimizations:

|        Metric | Before | After |
| ------------: | :----: | :---: |
|   Performance |   83   |  99   |
| Accessibility |   84   |  93   |
|           SEO |   82   |  91   |

## Quick Start

```bash
# Install dependencies
pnpm install

# Development (with HMR)
pnpm run dev
# Open http://localhost:5173

# Production build
pnpm run build

# Run production server
pnpm run start
# Open http://localhost:3000
```

## Deployment

### Docker Compose

To build and run using Docker Compose:

```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

To stop the application:

```bash
docker-compose down
```

### Docker Deployment

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

## Project structure

```
app/
├── assets/                 # Assets for pages
├── routes/                 # Route definitions
│   └── home.tsx            # Homepage with loader
├── components/
│   ├── home/               # Homepage components
│   │   ├── header-section/
│   │   ├── why-kotlin-section/
│   │   ├── usage-section/
│   │   └── ...
│   └── layout/             # Header, Footer
├── styles/                 # SCSS
└── root.tsx                # Root layout

public/
├── images/                 # Static images
└── favicon.svg
```
