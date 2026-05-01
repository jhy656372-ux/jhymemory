# 모바일 주식 솔루션 앱 구현 계획

이 문서는 스티치(Stitch)에서 가져온 미니멀 주식 상세 화면을 기반으로 실제 구동되는 모바일 웹 애플리케이션을 개발하기 위한 상세 계획입니다.

## 1. 기술 스택
- **프론트엔드 (Frontend):** React.js, Vite, Tailwind CSS (디자인 요건 충족 및 빠른 모바일 렌더링)
- **차트 라이브러리:** Recharts 또는 Chart.js (멀티 타임프레임 차트 구현)
- **데이터 소스 (API):** 
  - 기본 금융 데이터: Alpha Vantage API (Fundamentals, Core Stock, Economic Indicator, Currencies)
- **AI 요약 엔진:** OpenAI API 또는 Google Gemini API (뉴스 감성 분석 및 3줄 요약)

## 2. 주요 기능 및 연동 전략

### 2.1. 실시간 시세 및 기본 정보
- **기능:** 코스피, 나스닥, S&P 500 등 주요 지수와 USD/KRW 환율, 개별 종목의 상단 시세 표출.
- **연동:** Alpha Vantage `GLOBAL_QUOTE` 및 `CURRENCY_EXCHANGE_RATE` 엔드포인트 활용.
- **주기:** 일정 주기로 폴링(Polling)하거나 사용자 진입 시 최신화.

### 2.2. 멀티 타임프레임 차트
- **기능:** 디자인에 포함된 1D, 1W, 1M, 1Y, ALL 버튼에 맞춘 히스토리 차트.
- **연동:** Alpha Vantage `TIME_SERIES_INTRADAY` (당일) 및 `TIME_SERIES_DAILY` (과거) 등 데이터 호출.
- **구현:** SVG 또는 Canvas 기반의 경량 차트 적용 (미니멀 디자인 유지).

### 2.3. 재무 및 통계 지표 (52주 범위, 모멘텀)
- **기능:** 52주 최고/최저가 시각화 막대 및 일간 모멘텀 히트맵.
- **연동:** Alpha Vantage `OVERVIEW` 엔드포인트를 통해 PER, PBR, 52WeekLow/High 등 데이터 연동.

### 2.4. AI 기반 뉴스 필터링 및 요약
- **기능:** 종목 관련 최신 뉴스 2~3개를 추천하고, 긍정/부정 감성 분석이 포함된 3줄 요약 제공.
- **연동:** 
  1. Alpha Vantage `NEWS_SENTIMENT` API를 통해 관련 기사 수집.
  2. 수집된 기사의 제목+요약을 LLM(OpenAI/Gemini)에 전달하여 핵심 인사이트 3줄 요약 생성.

## 3. 개발 단계

1. **프로젝트 초기화:** Vite + React 템플릿 세팅 및 Tailwind CSS 설정 적용.
2. **UI 퍼블리싱:** 다운로드된 `screen_code.html`을 분석하여 React 컴포넌트로 분리 및 이식 (헤더, 가격, 차트, 지표, 뉴스, 네비게이션).
3. **API 연동 모듈 개발:** Alpha Vantage 연동 서비스 및 Mock Data 구조화.
4. **상태 관리 및 비즈니스 로직:** 선택된 타임프레임에 따른 차트 데이터 변경 로직, API 연동 로직.
5. **AI 파이프라인 연동:** 요약 모델 API 연결.

> [!CAUTION]
> Alpha Vantage 및 AI 서비스(OpenAI/Gemini) 활용을 위해서는 API Key가 필수입니다. 프로덕션 환경의 경우 별도의 백엔드(BFF)를 두어 API Key를 숨기는 구조로 확장해야 합니다. (본 프로토타입에서는 환경 변수를 활용한 프론트엔드 연동을 우선 진행합니다.)
