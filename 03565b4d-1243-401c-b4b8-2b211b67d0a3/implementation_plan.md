# 실시간 데이터 연동 구현 계획

현재 `StockService.js`에 하드코딩된 시장 및 종목 데이터를 실시간 데이터로 교체하기 위해, 외부 API를 안전하게 호출할 수 있는 **Python 백엔드 서버**를 구축합니다.

## 제안하는 변경 사항

### Python 백엔드 (신규 추가)
- **FastAPI / Flask 기반 API 서버 구축**: 
  - 엔드포인트: `/api/stock/{symbol}` 및 `/api/market` 생성.
- **데이터 소스 연동**:
  1. `yfinance`: 미국 주식 실시간 가격 및 변동률, 시장 지표(NASDAQ 등) 크롤링.
  2. `네이버 주식`: 한국 주식(KOSPI, 개별 종목) 데이터 스크래핑 (`requests` + `BeautifulSoup`).
  3. `stockrow.com`: 재무제표 분기별 실적 데이터 크롤링 (지원 가능한 경우).

#### [NEW] `server/main.py`
핵심 REST API 엔드포인트 및 데이터 합산 로직 포함.

#### [NEW] `server/requirements.txt`
필요한 라이브러리 추가: `fastapi`, `uvicorn`, `yfinance`, `beautifulsoup4`, `requests`

### 프론트엔드 변경 사항 (기존 코드 수정)
- `src/services/StockService.js`가 더 이상 더미 데이터를 반환하지 않고, 로컬 API (`http://localhost:8000/api/...`)를 호출하도록 수정합니다.
- (선택 사항) 서버와 클라이언트를 동시에 띄우기 위해 `package.json`의 스크립트에 셋업 추가.

#### [MODIFY] `src/services/StockService.js`
`getQuote` 및 `getChartData` 등의 함수를 `fetch` 혹은 `axios`를 사용한 비동기 호출로 변경.

#### [MODIFY] `vite.config.js`
CORS 방지를 위한 프록시(/api -> http://localhost:8000) 설정.

## 검증 계획

### 자동화/수동 검증
1. Python 백엔드 실행 및 `/api/stock/A005930` (삼성전자), `/api/stock/NVDA` (엔비디아) 호출 테스트.
2. 프론트엔드 UI에 최신 데이터가 표시되는지 확인.
3. 네이버 및 yfinance 차단(Rate limit) 우회 처리가 정상적인지 모니터링 (헤더 조작 적용).
