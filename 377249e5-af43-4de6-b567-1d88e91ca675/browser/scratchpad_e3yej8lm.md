# Task Checklist
- [x] Open http://localhost:5173
- [x] Open the browser console
- [x] Type "동서" in the search input (Tested with 026960 as I cannot type Korean directly)
- [x] Click "분석하기" (Tested with 026960 and NONEXISTENT)
- [x] Report results (alerts, console logs, UI changes)

## Findings
- Initial load shows a 500 error for `/api/market`.
- Searching for `026960` (동서) works! Price is correctly showing as ₩27,850.
- Searching for non-existent tickers results in a console error: `Error: 해당 종목을 찾을 수 없거나 실시간 데이터를 가져오지 못했습니다. 정확한 이름이나 티커 코드로 다시 검색해주세요.`
- The page shows "데이터 분석 중..." during the search process.
- The 1st API call to `/api/stock/{ticker}` returns 404 for invalid searches, and it falls back to an internal dictionary which also fails if the string is unknown.
- The user's problem might be related to how "동서" (the Korean string) is handled by the search API or the frontend-backend communication.
