# TaskifAI - Project Setup Guide

This guide provides step-by-step instructions for setting up the TaskifAI development environment.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **pnpm** (latest version)
- **PostgreSQL** (v14 or higher)
- **Git** (latest version)

## Quick Start

### 1. Clone and Setup Project Structure

```bash
# Navigate to project root
cd /Users/balajinagarajan/Documents/workspace/taskifai

# Create project directories
mkdir -p frontend backend shared docs

# Initialize git (if not already done)
git add .
git commit -m "Add architectural documentation and setup guides"
```

### 2. Frontend Setup (NextJS + TypeScript)

```bash
# Navigate to frontend directory
cd frontend

# Create NextJS application with TypeScript
npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*"

# Install shadcn/ui dependencies
npm install @radix-ui/react-icons @radix-ui/react-slot class-variance-authority clsx lucide-react

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Install essential UI components
npx shadcn-ui@latest add button input label textarea select dialog dropdown-menu card badge calendar popover toast form table

# Install state management
npm install zustand

# Install development dependencies
npm install -D prettier eslint-config-prettier
```

### 3. Backend Setup (Node.js + Express + TypeScript)

```bash
# Navigate to backend directory
cd ../backend

# Initialize npm project
npm init -y

# Install production dependencies
npm install express cors helmet morgan dotenv bcryptjs jsonwebtoken joi prisma @prisma/client

# Install TypeScript and development dependencies
npm install -D typescript @types/node @types/express @types/cors @types/bcryptjs @types/jsonwebtoken @types/morgan ts-node nodemon eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier

# Install testing dependencies
npm install -D jest @types/jest ts-jest supertest @types/supertest

# Initialize TypeScript
npx tsc --init

# Initialize Prisma
npx prisma init
```

### 4. Database Setup (PostgreSQL)

```bash
# Create development database
createdb taskifai_dev
createdb taskifai_test

# Or using Docker (alternative)
docker run --name taskifai-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=taskifai_dev -p 5432:5432 -d postgres:14
```

### 5. Testing Setup (Playwright)

```bash
# Navigate to frontend directory
cd ../frontend

# Install Playwright
npm install -D @playwright/test

# Install browsers
npx playwright install
```

## Environment Configuration

### Frontend Environment (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Backend Environment (.env)
```env
NODE_ENV=development
PORT=3001
DATABASE_URL="postgresql://username:password@localhost:5432/taskifai_dev"
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=http://localhost:3000
```

## Development Workflow

### Start Development Servers

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev

# Terminal 3: Start database (if using Docker)
docker start taskifai-postgres
```

### Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend E2E tests
cd frontend
npx playwright test
```

## Project Structure Overview

```
taskifai/
├── frontend/                 # NextJS application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/            # Utilities and configurations
│   │   ├── hooks/          # Custom React hooks
│   │   ├── types/          # TypeScript type definitions
│   │   └── styles/         # Global styles
│   ├── tests/              # Playwright E2E tests
│   └── package.json
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   ├── tests/              # API tests
│   ├── prisma/             # Database schema
│   └── package.json
├── shared/                  # Shared types and utilities
├── docs/                   # Documentation
├── ARCHITECTURE.md         # Technical architecture
├── COMMANDS_LOG.md         # Command reference
└── PROJECT_SETUP_GUIDE.md  # This file
```

## Common Issues and Solutions

### Database Connection Issues
- Ensure PostgreSQL is running: `brew services start postgresql`
- Check database exists: `psql -l | grep taskifai`
- Verify connection string in `.env`

### Port Conflicts
- Frontend default: `http://localhost:3000`
- Backend default: `http://localhost:3001`
- Change ports in package.json scripts if needed

### TypeScript Errors
- Run type checking: `npx tsc --noEmit`
- Update TypeScript: `npm install -D typescript@latest`

### Prisma Issues
- Regenerate client: `npx prisma generate`
- Reset database: `npx prisma migrate reset`
- View in Prisma Studio: `npx prisma studio`

## Next Steps

After completing the setup:

1. ✅ Verify all services start without errors
2. ✅ Run initial tests to ensure everything works
3. ✅ Create your first database migration
4. ✅ Build your first API endpoint
5. ✅ Create your first React component

## Useful Commands Reference

See [`COMMANDS_LOG.md`](COMMANDS_LOG.md) for a comprehensive list of all commands used in this project.

## Getting Help

- Check the [Architecture Documentation](ARCHITECTURE.md) for technical details
- Review the [System Diagrams](SYSTEM_DIAGRAM.md) for visual architecture
- Consult the [Commands Log](COMMANDS_LOG.md) for command references