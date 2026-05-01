# Implementation Plan - NicheMaster Concierge MVP

이 문서는 'Wizard of Oz' 스타일의 컨시어지 MVP 플랫폼 구축을 위한 기술 계획입니다.

## User Review Required
> [!IMPORTANT]
> - **App Router vs Pages Router**: 사용자 요청은 App Router를 선호하나 API 경로는 `pages/api` 형식을 언급했습니다. 최신 Next.js 표준인 **App Router (`app/api/...`)** 구조를 따를 예정입니다.
> - **Database**: Supabase를 사용하며, 로컬 개발 환경에서는 Mock 데이터를 우선 사용할 수 있으나, 실제 배포를 위해 Supabase 프로젝트 연동이 필요할 수 있습니다.

## Proposed Changes

### Tech Stack / Configuration
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS, Lucide React (Icons), Shadcn/ui (Components)
- **State Management**: React Server Components + Client Hooks
- **Database**: Supabase (PostgreSQL)

### Directory Structure
```
nichemaster-concierge-mvp/
├── app/
│   ├── layout.tsx       # Global layout (Fonts, Providers)
│   ├── page.tsx         # Landing Page
│   ├── intake/          # Intake Form Page
│   ├── dashboard/       # User Dashboard
│   ├── admin/           # Admin Dashboard (Wizard)
│   └── api/
│       └── submit-result/ # API Route for Human-in-the-loop result submission
├── components/
│   ├── ui/              # Shadcn components (Button, Card, Input...)
│   ├── landing/         # Landing specific components
│   ├── intake/          # Intake form components
│   └── admin/           # Admin specific components (Kanban, AI Assist)
├── lib/
│   ├── supabase.ts      # Supabase client
│   └── utils.ts         # Utility functions
└── types/               # TypeScript interfaces
```

### Component Details

#### [Landing Page](file:///app/page.tsx)
- Hero Section with Deep Blue background & Vivid Orange CTA.
- Trust Signals section with testimonials.

#### [Intake Form](file:///app/intake/page.tsx)
- Multi-step form state management.
- Conditional rendering based on user input.

#### [Admin Dashboard](file:///app/admin/page.tsx)
- **Kanban Board**: Drag and drop interface for task status (New -> In Progress -> Review -> Done).
- **AI Assist Workspace**:
    - Input: User request data.
    - AI Output: Editable text area pre-filled with AI draft.
    - Action: "Publish to User" button calling `api/submit-result`.

#### [Backend Logic](file:///app/api/submit-result/route.ts)
- Receives edited content from Admin.
- Updates database record status to 'Done'.
- Triggers notification to user (simulated).

## Verification Plan

### Automated Tests
- `npm run dev`를 통해 로컬 서버 실행 및 페이지 로드 확인.
- ESLint 검사.

### Manual Verification
- 랜딩 페이지 -> 인테이크 폼 제출 -> 어드민 대시보드 수신 -> AI 초안 수정 및 전송 -> 유저 대시보드 확인 흐름 검증.
