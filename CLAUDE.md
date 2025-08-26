# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm test` - Run Jest test suite
- `npm run test:watch` - Run tests in watch mode

### Code Quality
The project enforces strict TypeScript rules via ESLint:
- `@typescript-eslint/no-explicit-any: error`
- `@typescript-eslint/no-unused-vars: error`
- `react/no-unescaped-entities: error`

Always run `npm run lint` before committing changes.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS + shadcn/ui (New York style)
- **Database**: Supabase with typed client
- **UI Components**: Radix UI primitives
- **Fonts**: Pretendard (Korean), with custom font loading
- **Testing**: Jest + React Testing Library
- **Animation**: Framer Motion + Tailwind Animate

### Component Architecture
Follows Atomic Design pattern:
- `src/components/atoms/` - Basic building blocks (Header, Footer, etc.)
- `src/components/molecules/` - Composite components
- `src/components/ui/` - shadcn/ui components (Button, Card, Dialog, etc.)

### Key Patterns

**Database Integration**: 
- Supabase client configured in `src/lib/supabase.ts`
- Complete TypeScript database schema with `v6_profiles`, `v6_ideal_profiles`, `v6_verification_codes` tables
- Environment variables required: `SUPABASE_URL`, `SUPABASE_ANON_KEY`

**Styling System**:
- Uses `cn()` utility from `src/lib/utils.ts` for conditional classes
- Custom CSS variables for theming (primary, secondary, destructive, etc.)
- Dark mode support via `next-themes`
- Korean language support (`lang="ko"` in layout)

**Type System**:
- Comprehensive profile types in `src/types/profile.ts` with survey options and test data
- Category system in `src/types/categories.ts` for dating/hobby/career/trade/misc profiles
- Connection level types for privacy controls

**Font Configuration**:
- Pretendard variable font loaded from `/public/fonts/PretendardVariable.woff2`
- Custom font variables defined in Tailwind config

### Environment Setup
Copy `.env.example` to `.env.local` and configure:
- Supabase credentials
- NextAuth configuration
- Node environment settings

### Testing Strategy
Jest configuration includes:
- Module path mapping for `@/*` imports
- jsdom environment for React component testing
- Coverage collection from `src/**/*.{js,jsx,ts,tsx}`
- Exclusion of font files and global styles

### Key Dependencies
- UI: `@radix-ui/*`, `lucide-react`, `class-variance-authority`
- Data: `@supabase/supabase-js`, `date-fns`
- Animation: `framer-motion`, `tailwindcss-animate`
- Charts: `chart.js`
- Notifications: `sonner`

### Profile Data Models
The project centers around user profiles with extensive categorization:
- Personal profiles with demographic and preference data
- Ideal partner profiles with matching criteria
- Multiple profile categories (dating, hobby, career, trade, misc)
- Survey options with Korean language support
- Test data available for development