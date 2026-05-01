# 게시판 및 푸터 인터랙션 개선 계획

홈페이지 게시판 섹션의 게시물 노출 개수를 2개로 조정하고, 푸터의 빈 내용에서 발생하는 `<br>` 태그 노출 문제를 해결합니다.

## Proposed Changes

### [Component] 홈페이지 게시판 섹션 (Board Section)
게시판 섹션에서 표시되는 게시물 개수를 최신순 2개로 제한합니다.

- #### [MODIFY] [Board.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/components/sections/Board.jsx)
  - `slice(0, 2)`를 적용하여 최신글 2개만 렌더링하도록 수정

### [Component] 홈페이지 푸터 (Footer)
푸터 설명 및 하단 연락처 정보에서 HTML 태그가 텍스트로 노출되지 않도록 처리합니다.

- #### [MODIFY] [Footer.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/components/layout/Footer.jsx)
  - `footerData.description` 뿐만 아니라 `address`, `phone`, `website`, `email` 렌더링 시 태그 정제 로직 추가.
  - 정규표현식을 사용하여 `<br>`, `&nbsp;` 등을 제거하고 순수 텍스트만 표시.

### [Component] 관리자 페이지 (Admin Page)
푸터의 간단한 정보 필드들이 리치 텍스트 에디터의 불필요한 태그를 포함하지 않도록 입력 방식을 제한합니다.

- #### [MODIFY] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/AdminPage.jsx)
  - `isSingleLine` 판단 로직에 'address', 'phone', 'website', 'email', 'url' 키워드 추가.
  - 이를 통해 에디터에서 엔터(Enter) 입력이 방지되고 순수 텍스트 위주로 저장되도록 유도.

## Verification Plan

### Automated Tests
- `npm run build`를 실행하여 수정 후 빌드 성공 확인

### Manual Verification
- 홈페이지의 '게시판' 섹션에 게시물이 2개만 보이는지 확인
- 관리자 페이지에서 푸터 내용을 모두 지웠을 때 홈페이지 푸터에 `<br>`이 보이지 않는지 확인
