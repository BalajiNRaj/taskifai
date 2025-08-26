# TaskifAI

A modern task management application built with NextJS and TypeScript, designed to evolve from a basic task management tool into an AI-powered productivity platform.

## 🚀 Project Overview

TaskifAI is a full-stack task management application that provides essential task organization features with a clean, intuitive interface. The application is architected to support future AI integrations for intelligent task management.

### Core Features (Phase 1)
- ✅ **Task Management**: Create, read, update, and delete tasks
- ✅ **Organization**: Categories and tags for task organization
- ✅ **Priority System**: Low, medium, and high priority levels
- ✅ **Due Dates**: Set and track task deadlines
- ✅ **Filtering & Sorting**: Advanced task filtering and sorting options
- ✅ **Responsive Design**: Works seamlessly across devices

### Future AI Features (Phase 2)
- 🤖 Smart task prioritization
- 🤖 Automatic task categorization
- 🤖 Due date suggestions
- 🤖 Task breakdown recommendations
- 🤖 Natural language task creation
- 🤖 Progress insights and analytics

## 🛠️ Tech Stack

### Frontend
- **Framework**: NextJS 14+ with App Router
- **Language**: TypeScript
- **UI Components**: Radix UI / shadcn/ui
- **Styling**: CSS Modules + Radix styling system
- **State Management**: Zustand
- **Testing**: Playwright (E2E)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT tokens
- **Validation**: Joi

### Development Tools
- **Package Manager**: npm
- **Code Quality**: ESLint + Prettier
- **Testing**: Jest + Playwright
- **Version Control**: Git

## 📁 Project Structure

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
└── README.md               # This file
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or pnpm

### Quick Setup
1. **Clone and setup project structure**
   ```bash
   git clone <repository-url>
   cd taskifai
   mkdir -p frontend backend shared docs
   ```

2. **Follow the detailed setup guide**
   See [`PROJECT_SETUP_GUIDE.md`](PROJECT_SETUP_GUIDE.md) for complete installation instructions.

3. **Start development servers**
   ```bash
   # Terminal 1: Backend
   cd backend && npm run dev
   
   # Terminal 2: Frontend
   cd frontend && npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 📚 Documentation

- **[Architecture Documentation](ARCHITECTURE.md)** - Technical architecture and design decisions
- **[System Diagrams](SYSTEM_DIAGRAM.md)** - Visual system architecture with Mermaid diagrams
- **[Project Setup Guide](PROJECT_SETUP_GUIDE.md)** - Step-by-step setup instructions
- **[Commands Reference](COMMANDS_LOG.md)** - All npm/git commands used in the project
- **[Development Checklist](DEVELOPMENT_CHECKLIST.md)** - Detailed acceptance criteria for each phase

## 🎯 Development Roadmap

### Phase 1: Core Task Management ✅
- [x] Project architecture and setup
- [x] Database schema design
- [x] Basic CRUD operations
- [x] Frontend interface
- [x] Filtering and sorting
- [x] Testing framework

### Phase 2: AI Integration 🚧
- [ ] Natural language processing for task creation
- [ ] Smart prioritization algorithms
- [ ] Automatic categorization
- [ ] Intelligent due date suggestions
- [ ] Progress analytics and insights

### Phase 3: Advanced Features 📋
- [ ] User authentication and authorization
- [ ] Team collaboration features
- [ ] Real-time updates
- [ ] Mobile application
- [ ] Third-party integrations

## 🧪 Testing

### Running Tests
```bash
# Backend unit tests
cd backend && npm test

# Frontend E2E tests
cd frontend && npx playwright test

# Run all tests
npm run test:all
```

### Test Coverage
- Unit tests for business logic
- Integration tests for API endpoints
- End-to-end tests for user workflows
- Performance and accessibility testing

## 🚀 Deployment

### Development Environment
```bash
# Start all services
npm run dev

# Build for production
npm run build

# Start production servers
npm run start:prod
```

### Production Deployment
See deployment documentation for detailed instructions on deploying to various platforms.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new features
- Use conventional commit messages
- Ensure code passes linting and formatting
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by productivity and task management best practices
- Designed for scalability and future AI integration

---

**Ready to build the future of task management? Let's get started!** 🚀

For detailed setup instructions, see [`PROJECT_SETUP_GUIDE.md`](PROJECT_SETUP_GUIDE.md)