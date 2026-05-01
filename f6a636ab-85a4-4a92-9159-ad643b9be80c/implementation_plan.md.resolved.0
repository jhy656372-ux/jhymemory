# NicheMaster_Concierge_MVP 구현 계획

"오즈의 마법사" 스타일의 컨시어지 MVP를 구축하여 비즈니스의 수익성을 검증합니다. 사용자는 자동화된 AI 서비스를 경험하는 것처럼 느끼지만, 실제로는 관리자가 AI 도구를 활용해 결과물을 정교하게 다듬어 제공하는 Human-in-the-loop 구조입니다.

## Proposed Changes

### 1. 기술 스택 (Tech Stack)
- **Framework**: Next.js (App Router)
- **Database/Auth**: Supabase
- **Styling**: Tailwind CSS + Shadcn/ui
- **Icons**: Lucide React

---

### 2. 데이터베이스 스키마 (Supabase)

#### `profiles`
- `id`: uuid (PK, references auth.users)
- `email`: text
- `full_name`: text
- `avatar_url`: text

#### `tasks`
- `id`: uuid (PK)
- `user_id`: uuid (FK)
- `input_data`: jsonb (고객이 입력한 폼 데이터)
- `status`: enum (pending, analyzing, generating, reviewing, completed)
- `result_content`: text (최종 결과물)
- `payment_status`: text (paid, unpaid)
- `created_at`: timestamp

---

### 3. 주요 컴포넌트 & 페이지

#### [NEW] [LandingPage](file:///app/page.tsx)
- Hero section: "초니치 솔루션을 위한 최고의 컨시어지"
- CTA: 결제 유도 및 Intake form 연결

#### [NEW] [IntakeForm](file:///components/intake-form.tsx)
- 다단계 폼 (Progress bar 포함)
- 사용자 요구사항 수집 로직

#### [NEW] [UserDashboard](file:///app/dashboard/page.tsx)
- 현재 작업 상태 확인 (실시간 상태 업데이트는 아니더라도 정적/수동 업데이트)
- 결과물 뷰어 및 메시징

#### [NEW] [AdminDashboard](file:///app/admin/page.tsx)
- **Task Queue**: 칸반 보드로 작업 관리
- **AI Workspace**: 사용자 데이터 옆에 LLM 프롬프트 입력창 배치
- **Edit & Publish**: AI가 만든 초안을 사람이 수정 후 사용자에게 전송

---

### 4. API 인터페이스

#### [NEW] [submit-result](file:///app/api/submit-result/route.ts)
- 관리자가 수정한 결과를 `tasks` 테이블에 업데이트하고 상태를 `completed`로 변경

## Verification Plan

### Automated Tests
- `npm run build`를 통한 빌드 무결성 확인
- API 라우트 동작 확인 (Mock data 사용)

### Manual Verification
- 랜딩 페이지에서 폼 입력 후 데이터가 DB에 정상 저장되는지 확인
- 관리자 페이지에서 해당 요청이 노출되고, "Publish" 기능이 작동하여 유저 페이지에 결과가 나타나는지 확인
- UI의 'Apple' 스타일 미니멀리즘 디자인 및 신뢰도 높은 색감 확인
