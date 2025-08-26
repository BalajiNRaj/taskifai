# TaskifAI - Command Reference & Log

This document tracks all npm, git, and other commands used in the TaskifAI project for easy reference and reproducibility.

## Initial Project Setup

### Git Commands
```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Initial commit
git commit -m "Initial project setup with architecture documentation"

# Create development branch
git checkout -b develop
```

### Project Structure Setup
```bash
# Create main project directories
mkdir frontend backend shared docs

# Create frontend subdirectories
mkdir -p frontend/src/{app,components,lib,hooks,types,styles}
mkdir -p frontend/public
mkdir -p frontend/tests

# Create backend subdirectories
mkdir -p backend/src/{controllers,models,routes,middleware,services,utils,types}
mkdir -p backend/tests
mkdir -p backend/prisma

# Create shared directory
mkdir -p shared/types
```

## Frontend Setup (NextJS + TypeScript)

### Package Installation
```bash
cd frontend

# Initialize NextJS with TypeScript
npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*"

# Install additional dependencies
npm install @radix-ui/react-icons
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx
npm install lucide-react

# Install development dependencies
npm install -D @types/node
npm install -D eslint-config-prettier
npm install -D prettier

# Install state management (if needed)
npm install zustand
# OR
npm install @reduxjs/toolkit react-redux
```

### shadcn/ui Setup
```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Install common components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add calendar
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add form
npx shadcn-ui@latest add table
```

### Frontend Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run linting with fix
npm run lint -- --fix

# Format code with prettier
npx prettier --write .
```

## Backend Setup (Node.js + Express + TypeScript)

### Package Installation
```bash
cd backend

# Initialize npm project
npm init -y

# Install production dependencies
npm install express
npm install cors
npm install helmet
npm install morgan
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
npm install joi
npm install prisma
npm install @prisma/client

# Install TypeScript and development dependencies
npm install -D typescript
npm install -D @types/node
npm install -D @types/express
npm install -D @types/cors
npm install -D @types/bcryptjs
npm install -D @types/jsonwebtoken
npm install -D @types/morgan
npm install -D ts-node
npm install -D nodemon
npm install -D eslint
npm install -D @typescript-eslint/parser
npm install -D @typescript-eslint/eslint-plugin
npm install -D prettier
npm install -D eslint-config-prettier

# Testing dependencies
npm install -D jest
npm install -D @types/jest
npm install -D ts-jest
npm install -D supertest
npm install -D @types/supertest
```

### TypeScript Configuration
```bash
# Initialize TypeScript config
npx tsc --init
```

### Prisma Setup
```bash
# Initialize Prisma
npx prisma init

# Generate Prisma client
npx prisma generate

# Create and run migrations
npx prisma migrate dev --name init

# Reset database
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio

# Deploy migrations to production
npx prisma migrate deploy
```

### Backend Development Commands
```bash
# Start development server
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

## Database Setup (PostgreSQL)

### Local PostgreSQL Setup
```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql
brew services start postgresql

# Create database
createdb taskifai_dev
createdb taskifai_test

# Connect to database
psql taskifai_dev
```

### Docker PostgreSQL Setup (Alternative)
```bash
# Create docker-compose.yml and run
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs postgres
```

## Testing Setup (Playwright)

### Playwright Installation
```bash
cd frontend

# Install Playwright
npm install -D @playwright/test

# Install browsers
npx playwright install

# Install system dependencies (Linux)
npx playwright install-deps
```

### Playwright Commands
```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/tasks.spec.ts

# Run tests in debug mode
npx playwright test --debug

# Generate test report
npx playwright show-report

# Update snapshots
npx playwright test --update-snapshots
```

## Development Workflow Commands

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/task-crud

# Add changes
git add .

# Commit changes
git commit -m "feat: implement task CRUD operations"

# Push to remote
git push origin feature/task-crud

# Merge to develop
git checkout develop
git merge feature/task-crud

# Delete feature branch
git branch -d feature/task-crud
```

### Package Management
```bash
# Install all dependencies (run from root)
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd backend && npm install

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Build and Deployment
```bash
# Build frontend
cd frontend && npm run build

# Build backend
cd backend && npm run build

# Start both services (using concurrently)
npm install -D concurrently
npm run dev  # Runs both frontend and backend

# Production deployment
npm run build:all
npm run start:prod
```

## Useful Development Commands

### Code Quality
```bash
# Format all code
npx prettier --write "**/*.{ts,tsx,js,jsx,json,md}"

# Lint all TypeScript files
npx eslint "**/*.{ts,tsx}" --fix

# Type check
npx tsc --noEmit
```

### Database Management
```bash
# Backup database
pg_dump taskifai_dev > backup.sql

# Restore database
psql taskifai_dev < backup.sql

# View database size
psql -c "SELECT pg_size_pretty(pg_database_size('taskifai_dev'));"
```

### Monitoring and Debugging
```bash
# View application logs
tail -f logs/app.log

# Monitor file changes
npx nodemon --watch src --ext ts --exec "npm run dev"

# Profile application
node --inspect server.js
```

---

## Command Execution Log

*This section will be updated as commands are executed during development*

### [Date] - Initial Setup
- [ ] Commands executed will be logged here with timestamps
- [ ] Any issues encountered and solutions will be documented
- [ ] Performance metrics and build times will be tracked

### [Date] - Feature Development
- [ ] Feature-specific commands and their outcomes
- [ ] Database migration commands and results
- [ ] Test execution results

### [Date] - Deployment
- [ ] Production deployment commands
- [ ] Environment setup commands
- [ ] Performance optimization commands