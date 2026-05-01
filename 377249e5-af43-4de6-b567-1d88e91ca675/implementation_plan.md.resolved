# 관심종목 모니터링 개선 구현 계획

## User Review Required
> [!NOTE]
> 실시간 데이터 갱신 주기를 **15초**로 설정할 예정입니다. 너무 잦은 갱신은 네이버/야후 API 차단 위험이 있으므로 15초가 적당해 보입니다. (원하시면 주기를 더 늘리거나 줄일 수 있습니다.)

## Proposed Changes

### 프론트엔드 UI 수정 (크기 축소 및 모달 중앙 정렬)
---
#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/%EA%B4%80%EC%8B%AC%EC%A2%85%EB%AA%A9%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81/src/App.jsx)
- `market-preview` 영역의 `indices-row` 스타일을 세로(`column`)에서 가로(`row`) 형태로 변경.
- 각 지수 박스(`index-pill`)의 `padding`을 줄이고 폰트 크기를 축소하여 전체 차지하는 높이를 크게 줄임.
- 컴포넌트 마운트 시 `setInterval`을 활용하여 시장 지수(KOSPI, KOSDAQ, 환율)를 주기적으로 (예: 15초) 자동 갱신.
- 선택된 종목(`stockData`)이 있을 경우, 현재가 역시 주기적으로 받아오도록 리프레시 로직 추가.

#### [MODIFY] [DetailModal.jsx](file:///c:/Users/admin/.gemini/%EA%B4%80%EC%8B%AC%EC%A2%85%EB%AA%A9%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81/src/components/DetailModal.jsx)
- 스마트폰 화면(폭이 좁은 경우)에서 모달이 한쪽으로 치우치지 않도록 `modal-overlay`와 `modal-content`의 CSS In-line Style 수정.
- 모달 내부에 `overflow-x: hidden` 및 `max-width: 95vw` 등을 적용하여 작은 화면에서도 가운데에 예쁘게 뜨도록 최적화.

### 프론트엔드 스타일 (마이크로 인터랙션 등)
---
#### [MODIFY] [App.css](file:///c:/Users/admin/.gemini/%EA%B4%80%EC%8B%AC%EC%A2%85%EB%AA%A9%20%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81/src/App.css)
- `index-pill` 관련 모바일 반응형 가로 배치 스타일 추가.
- 전체적인 버튼 및 카드 호버/터치 애니메이션(크기 변동, 색상 변화 등) 부드럽게 조정.

## Verification Plan
### Manual Verification
1. 변경 사항 적용 후 `start.bat` 파일을 실행하여 프론트엔드와 백엔드를 모두 가동합니다.
2. 스마트폰 환경(또는 브라우저의 모바일 개발자 도구 창 F12)에서 접속하여 다음을 확인합니다.
   - 메인 화면 하단의 코스피/나스닥/환율 박스가 작고 예쁘게 한 줄(또는 두 줄)로 잘 나오는지 확인.
   - 시간이 지나면 지수와 주식 가격이 자동으로 깜빡이며(업데이트되며) **최신가로 변동**하는지 확인.
   - 특정 종목 검색 후 나오는 팝업 상세 모달이 폰 화면 **한가운데**에 잘 뜨고 옆으로 잘리지 않는지 확인. 
