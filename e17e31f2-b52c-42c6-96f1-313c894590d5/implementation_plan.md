# '한글개역개정' (HR2) 지원 추가

이 계획은 성경 앱에 "한글개역개정" (NKRV/HR2) 버전을 추가하는 절차를 설명합니다.

## 검토 필요 사항

> [!IMPORTANT]
> **데이터 소스 누락**: 실제 "개역개정" (NKRV) JSON 데이터는 저작권 문제로 온라인에서 구할 수 없습니다.
> **필요한 조치**: 기존 `ko_krv.json` 파일을 복사하여 `public/data/ko_hr2.json` 임시 파일을 생성하겠습니다. 앱에서 HR2를 선택하면 기능은 동작하지만, 실제 NKRV 데이터 파일로 교체하기 전까지는 내용은 KRV와 동일하게 나옵니다.

## 변경 제안

### 데이터
#### [NEW] [ko_hr2.json](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/public/data/ko_hr2.json)
- `ko_krv.json`을 복사하여 임시 파일로 생성합니다.

### 서비스 (Services)
#### [MODIFY] [BibleService.js](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/src/services/BibleService.js)
- `loadBibleData` 함수를 수정하여 'HR2' 버전을 처리하고 `ko_hr2.json`을 로드하도록 변경합니다.

### UI
#### [MODIFY] [BiblePage.jsx](file:///c:/Users/admin/.gemini/%EB%82%98%EC%9D%98%20%EC%82%AC%EB%9E%91%ED%95%98%EB%8A%94%20%EC%B1%85/src/pages/BiblePage.jsx)
- 버전 선택 버튼에 "HR2" (또는 개역개정) 옵션을 추가합니다.
- `BibleService`에 'HR2'를 올바르게 전달하도록 로직을 수정합니다.

## 검증 계획

### 수동 검증
1.  **앱 실행**: 브라우저에서 애플리케이션을 실행합니다.
2.  **성경 페이지 이동**: 성경 탭으로 이동합니다.
3.  **UI 확인**: 새로운 "HR2" 버전 선택 버튼이 표시되는지 확인합니다.
4.  **버전 선택**: "HR2" 버튼을 클릭합니다.
5.  **로드 확인**: 성경 본문이 오류 없이 로드되는지 확인합니다. (참고: 내용은 KRV와 동일하게 표시됩니다).
