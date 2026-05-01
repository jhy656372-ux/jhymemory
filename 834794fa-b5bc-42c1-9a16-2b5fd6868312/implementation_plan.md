# NicheMaster Concierge MVP 구현 계획

## 목표
"Human-in-the-loop" 방식의 컨시어지 MVP 플랫폼 구축. 자동화된 것처럼 보이지만 관리자가 AI를 활용해 직접 품질을 관리하여 비즈니스 가치를 검증함. '롱테일' 영역의 초니치 고객을 타겟으로 함.

## 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui (Radix UI 기반)
- **State Management**: React Context (간단한 전역 상태 관리)
- **Icons**: Lucide React

## 디자인 시스템 & UI/UX
- **Colors**:
  - Primary: Deep Blue (`#0F172A` - Slate 900)
  - Secondary: Vivid Orange (`#EA580C` - Orange 600)
  - Background: Soft Grey (`#F8FAFC` - Slate 50)
- **Typography**: Inter (Google Fonts)
- **Komponent Library (Shadcn/ui)**:
  - `Button`, `Card`, `Input`, `Textarea`, `Badge`, `Progress`, `Dialog`, `ScrollArea`, `Tabs`, `Avatar`

## 데이터 모델 (TypeScript Interfaces)

```typescript
// 사용자 및 관리자
interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  name: string;
}

// 작업 요청 (핵심 엔티티)
interface Task {
  id: string;
  userId: string;
  status: 'new' | 'analyzing' | 'generating' | 'review' | 'done';
  title: string; // "Project X Analysis"
  inputData: {
    q1: string; // "Target Niche?"
    q2: string; // "Problem?"
    files?: string[];
  };
  aiDraft?: string; // AI가 생성한 초안
  finalResult?: string; // 관리자가 수정한 최종 결과
  adminFeedback?: string; // 내부용 메모
  createdAt: string;
  updatedAt: string;
}
```

## 상세 폴더 구조

```text
app/
├── (public)
│   └── page.tsx           # Landing Page (Hero, Testimonials, Pricing)
├── (auth)
│   └── login/page.tsx     # Simple Login (Mockable)
├── (app)
│   ├── layout.tsx         # Dashboard Layout (Sidebar, User Nav)
│   ├── dashboard/page.tsx # User Dashboard (Task List, Result Viewer)
│   └── intake/page.tsx    # Intelligent Intake Form (Wizard)
├── (admin)
│   ├── layout.tsx         # Admin Layout
│   └── admin/
│       └── page.tsx       # Admin Dashboard (Kanban, Task List)
├── api/
│   └── submit-result/     # API: 관리자 작업 완료 처리
└── components/
    ├── ui/                # Shadcn UI Components
    ├── landing/           # Landing Page specific
    ├── intake/            # Form Wizard Components
    └── admin/             # Kanban, AI Assist Editor
```

## 구현 상세

### 1. 프로젝트 초기화
- `npx create-next-app@latest nich-concierge --typescript --tailwind --eslint`
- `npx shadcn-ui@latest init` 및 필요한 컴포넌트 추가

### 2. 주요 페이지 및 기능

#### [NEW] `app/page.tsx` (Landing Page)
- **Hero**: "We build your [Niche] strategy." + "Get Started" Button -> `/intake`
- **Social Proof**: "Joined by 500+ founders"
- **Pricing**: "$9.99 for comprehensive report" (Fake Stripe button for MVP)

#### [NEW] `app/intake/page.tsx` (Smart Intake Form)
- **Wizard Step**: 상태 관리를 통해 Step 1 -> Step 2 -> Step 3 이동
- **Storage**: 완료 시 `localStorage` 또는 Mock DB에 `Task` 저장 (status: 'new')

#### [NEW] `app/dashboard/page.tsx` (User Dashboard)
- **Polling**: 주기적으로 Task 상태 확인
- **Status UI**: 상태에 따라 Progress Bar 애니메이션 변경
- **Viewer**: `Task.finalResult`가 있으면 마크다운 렌더링하여 표시

#### [NEW] `app/admin/page.tsx` (Wizard Dashboard)
- **Task List**: 'new' 상태의 Task 목록 표시
- **Editor Modal**: Task 클릭 시 열림.
  - Left: User Input Data
  - Right: AI Draft Editor
  - **Action**: "Generate Draft" (Mock AI Call) -> Textarea에 채움 -> 관리자가 수정 -> "Send to User" 버튼

### 3. API 및 로직

#### [NEW] `app/api/admin/tasks/route.ts`
- GET: 모든 Task 조회 (관리자용)
- POST: 새로운 Task 생성 (Intake Form 제출)

#### [NEW] `app/api/admin/complete/route.ts`
- POST: `{ taskId, finalResult }` 받아서 Task 상태를 'done'으로 변경

## 검증 포인
1. **End-to-End Test**:
    - User: Landing -> Intake Form 제출 -> Dashboard (Waiting...)
    - Admin: Admin Panel -> 새 Task 확인 -> AI Draft 생성(버튼 클릭) -> 텍스트 수정 -> "Complete" 클릭
    - User: Dashboard (Auto refresh) -> "Complete!" -> 결과물 확인
2. **Style Check**: 지정된 Color Palette와 Shadcn UI 감성 확인
