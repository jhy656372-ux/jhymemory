# CMS 기능 구현 계획

## 목표
웹사이트의 텍스트와 이미지를 관리자가 직접 수정할 수 있는 CMS(Content Management System) 기능을 구현합니다. 데이터는 브라우저의 `localStorage`에 저장되어 유지됩니다.

## 사용자 리뷰 필요 사항
- **데이터 초기화**: 데이터 구조가 변경되거나 초기화가 필요한 경우 웹사이트의 캐시(localStorage)를 지워야 할 수 있습니다. 관리자 페이지에 '초기화' 버튼을 추가할 예정입니다.
- **보안**: 현재는 별도의 로그인 없이 숨겨진 URL(`.../admin`)로 접근하는 방식입니다. 실제 배포 시에는 적절한 인증 시스템이 필요할 수 있습니다.

## 변경 제안

### Core
#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/App.jsx)
- `DataProvider`로 앱 전체를 감쌉니다.
- `/admin` 라우트를 추가합니다.

### Pages
#### [NEW] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/AdminPage.jsx)
- 각 섹션(Hero, Intro, 등)별로 텍스트와 이미지 URL을 수정할 수 있는 입력 폼을 제공합니다.
- '저장' 버튼과 '초기화' 버튼을 구현합니다.

### Components
#### [MODIFY] [Footer.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/components/layout/Footer.jsx)
- 우측 하단 또는 특정 위치에 `/admin`으로 이동하는 숨겨진(투명하거나 작게 표시된) 링크를 추가합니다.

#### [MODIFY] [Hero.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/components/sections/Hero.jsx)
- 직접 `churchData`를 import하는 대신 `useChurchData` 훅을 사용하여 데이터를 받아오도록 수정합니다.

#### [MODIFY] [IntroPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/IntroPage.jsx)
- `useChurchData` 훅을 사용하도록 수정합니다.

*(참고: 다른 페이지들도 순차적으로 적용할 예정입니다)*

## 검증 계획

### 수동 검증
1. **관리자 페이지 접근**: 브라우저 주소창에 `/admin`을 입력하거나 Footer의 숨겨진 링크를 클릭하여 관리자 페이지로 이동합니다.
2. **데이터 수정**: Hero 섹션의 타이틀을 "수정된 산돌교회"로 변경하고 저장합니다.
3. **반영 확인**: 홈 화면으로 이동하여 타이틀이 변경되었는지 확인합니다.
4. **지속성 확인**: 페이지를 새로고침한 후에도 변경된 내용이 유지되는지 확인합니다.
5. **초기화 확인**: 관리자 페이지에서 '초기화' 버튼을 누르고, 데이터가 원래대로 돌아오는지 확인합니다.
