# AI 립싱크 생성기 완벽 연동 가이드

## 완료된 작업 내용 (Changes Made)
1. **Wav2Lip AI 모델 로컬 설치 기반 완비**
    - 기존의 부자연스러운 MediaPipe 턱관절 변형 스크립트를 삭제했습니다.
    - 실제 방송급 AI 립싱크를 생성할 수 있는 `Wav2Lip` 오픈소스를 다운로드하고 필수 AI 모델(`wav2lip_gan.pth`, `s3fd.pth`)을 로컬(`backend/Wav2Lip`)에 자동 세팅했습니다.
2. **백엔드 리팩토링 (`main.py`)**
    - 프론트엔드에서 API 요청을 보내면 Python의 서브프로세스를 통해 `Wav2Lip`의 추론 메인 스크립트(`inference.py`)를 곧바로 실행하도록 통신 모듈을 연결했습니다.
3. **프론트엔드 UI/UX 수정**
    - `Ace-Step`과 연동할 수 있음을 명확하게 인지할 수 있도록, **"Ace-Step에서 만든 음악을 넣어 나만의 한국 립싱크 AI 가수를 만들어보세요!"**라는 문구로 업데이트했습니다.
    - 이제 사용자가 '캐릭터 이미지(정면 사진)'와 'Ace-Step에서 출력된 노래 파일(wav/mp3)'을 드래그앤드롭으로 넣기만 하면 자동으로 결과 영상을 도출합니다.

## 사용 방법 확인 (Verification Results)
1. 백엔드를 켭니다 (`backend` 폴더에서 `uvicorn main:app --reload` 혹은 기존 런처 사용).
2. 프론트엔드를 켭니다 (`frontend` 폴더에서 `npm run dev`).
3. 웹페이지 접속 후 정면 사진 1장과 Ace-Step으로 완성한 MP3 파일을 함께 넣으시면 됩니다.
