# 내비게이션 박스화 및 하단 배치 계획 (v24)

사용자의 "아이콘을 박스에 넣어서 오늘도 승리하세요 밑에 배치" 요청에 따라, 내비게이션을 고정(fixed) 바에서 **콘텐츠와 함께 흐르는 박스형 푸터**로 변경합니다.

## 제안된 변경 사항

### [Navigation.jsx](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/src/components/Navigation.jsx)
- **박스 디자인**: `bg-white/60 backdrop-blur-md`, `rounded-3xl`, `shadow-lg`, `border border-white/40` 등을 적용하여 예쁜 박스 형태로 만듭니다.
- **고정 해제**: `fixed bottom-0` 클래스를 제거하여 페이지 콘텐츠의 일부로 배치되도록 합니다.
- **간격 조정**: 박스 내부의 아이콘 간격을 최적화합니다.

### [Layout.jsx](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/src/Layout.jsx)
- **위치 이동**: `Navigation` 컴포넌트를 `main` 영역 내부, 즉 `{children}` 요소 바로 다음에 배치합니다.
- **여백 조정**: 고정 바를 위한 `pb-36` 등을 제거하고, 박스형 메뉴가 자연스럽게 보이도록 상하 여백을 조정합니다.

### [HomePage.jsx](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/src/pages/HomePage.jsx)
- '오늘도 승리하세요~^^' 문구 뒤에 적절한 마진을 주어 내비게이션 박스와의 간격을 실력 있게 맞춥니다.

## 빌드 계획
- `v24` 버전으로 APK를 빌드합니다.

## 검증 계획
- [ ] 홈 화면에서 "오늘도 승리하세요" 문구 아래에 박스형 메뉴가 나타나는지 확인
- [ ] 모든 페이지(말씀, 찬양 등)에서 동일하게 박스형 메뉴가 하단에 오는지 확인
- [ ] 메뉴가 더 이상 화면 하단에 고정되지 않고 콘텐츠를 따라가는지 확인
