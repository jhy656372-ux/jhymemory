# NicheMaster Concierge MVP - 작업 목록 (Task List)

## 1. 기획 및 설정 (Planning & Setup)
- [ ] 프로젝트 폴더 및 환경 설정 (Project Initialization) <!-- id: 0 -->
- [ ] 기술 스택 검증 (Next.js, Tailwind, Shadcn/ui) <!-- id: 1 -->
- [ ] 구현 계획서 (Implementation Plan) 작성 및 사용자 검토 <!-- id: 2 -->

## 2. 프론트엔드 구현 (Frontend Implementation)
- [ ] 기본 레이아웃 및 디자인 시스템 (Design System Setup) <!-- id: 3 -->
    - Color Palette: Deep Blue, Soft Grey, Vivid Orange
    - Typography: Inter/Roboto/Outfit
- [ ] 랜딩 페이지 (Landing Page) <!-- id: 4 -->
    - Hero Section (Value Prop + CTA)
    - Testimonial Section (Trust Signals)
- [ ] 스마트 입력 폼 (Intake Form) <!-- id: 5 -->
    - Multi-step form with progress bar
    - Conditional logic
    - File upload UI
- [ ] 결제/전환 페이지 (Payment Gateway Mock) <!-- id: 6 -->
    - Stripe UI styling
    - "Wizard of Oz" payment logic (Simple payment/tip)
- [ ] 사용자 대시보드 (User Dashboard) <!-- id: 7 -->
    - Status Tracker (New -> Analyzing -> Generating -> Done)
    - Result Viewer
    - Chat Interface

## 3. 백엔드 및 관리자 기능 (Backend & Admin)
- [ ] Supabase 연동 설정 (Mock or Real) <!-- id: 8 -->
- [ ] 관리자 대시보드 (Admin Dashboard) <!-- id: 9 -->
    - Kanban Board for Task Queue
    - AI Assist Workspace UI (Prompt template, Edit, Publish)
- [ ] API 라우트 구현 (API Routes) <!-- id: 10 -->
    - `POST /api/submit-request` (Handle user intake)
    - `POST /api/admin/generate-draft` (Mock AI generation)
    - `POST /api/admin/publish-result` (Send to user)

## 4. 검증 및 배포 준비 (Verification & Deployment)
- [ ] 전체 사용자 흐름 테스트 (User Flow Walkthrough) <!-- id: 11 -->
- [ ] 반응형 UI 확인 (Mobile Responsiveness) <!-- id: 12 -->
- [ ] 최종 배포 가이드 문서화 (Deployment Guide) <!-- id: 13 -->
