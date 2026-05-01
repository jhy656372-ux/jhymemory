# AI 작곡가 웹앱 구현 계획 (업데이트: Shadcn UI + 실제 AI 연동)

사용자 요청에 따라 UI 프레임워크를 **Shadcn UI (Tailwind CSS 기반)** 로 변경하고, 가짜 시뮬레이션이 아닌 **실제 AI 작사 및 음악 생성** 기능을 연동합니다.

## Proposed Changes

1. **디자인 시스템 변경 (Shadcn UI + Tailwind CSS)**
   - `vanilla CSS`를 걷어내고 `tailwindcss`, `postcss`, `autoprefixer`를 설치합니다.
   - Shadcn UI의 기반 패키지(`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`)를 설치하고 유틸리티 함수(`cn`)를 구성합니다.
   - 둥글고 부드러운 파스텔톤 느낌을 Shadcn의 테마 변수(CSS 변수)에 맞게 재정의하여 "프리미엄하고 몽글몽글한" 느낌은 그대로 유지합니다.

2. **실제 AI 작사 로직 (Gemini API 등)**
   - 사용자가 입력한 "래퍼런스 곡", "제목", "내용"을 바탕으로 완벽히 통제된 프롬프트를 구성합니다.
     - 규칙: 음절 맞춤, 중복 단어 배제, 세련된 Pop, 고음 배제.
   - 브라우저에서 직접 AI(예: Google Gemini API)를 호출하여 텍스트 가사를 얻어옵니다.

3. **실제 오디오 생성 로직 (Hugging Face MusicGen 등)**
   - 생성된 가사의 무드와 사용자가 입력한 테마를 영어 프롬프트로 변환하여 오픈소스 Music AI 모델 (예: `facebook/musicgen-small`)에 API 요청을 보냅니다.
   - 생성된 오디오 바이너리를 받아 브라우저에서 재생 가능한 Blob URL로 변환하여 오디오 플레이어에 띄웁니다.

4. **API 키 관리 (Settings 모달)**
   - 무료 퍼블릭 API는 곡 길이나 퀄리티 제한, 대기열(Queue) 문제가 심합니다.
   - 따라서 고품질 결과를 얻을 수 있도록 사용자가 본인의 API 키(Gemini API 키, Hugging Face Token)를 안전하게 입력하고 브라우저 `localStorage`에 저장하여 사용할 수 있는 '설정 창'을 구현합니다.

## Verification Plan
1. Tailwind CSS가 정상 작동하며 Shadcn 스타일 버튼/폼이 렌더링되는지 확인.
2. 설정 창에서 API 키를 입력했을 때 실제 외부 AI 로직으로 통신이 오가는지 확인.
3. 결과로 실제 텍스트(가사)와 재생 가능한 MP3/WAV 파일이 반환되는지 검증.
