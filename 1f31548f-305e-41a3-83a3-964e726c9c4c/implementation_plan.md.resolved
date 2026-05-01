# AI Lip Sync Web Application

This project is a web-based AI Lip Sync application inspired by Toki AI and DreamFace. It uses an open-source model (like SadTalker or MuseTalk) to animate a static image character using a provided audio track.

## Hardware Constraints & Execution Plan
> [!NOTE]
> 코다리님의 PC 사양을 확인했습니다! (i7-10700, 32GB RAM, **GTX 1060 6GB VRAM**)
> VRAM이 6GB이므로, 아주 무거운 최신 모델보다는 **VRAM을 적게 먹고 가벼운 오픈소스 모델(Wav2Lip 또는 SadTalker 저해상도/FP16 모드)**을 로컬에서 구동하도록 최적화하여 구성하겠습니다.

## User Review Required
> [!IMPORTANT]
> **Tech Stack & Architecture 확정**
> - **Frontend**: React (Vite 기반), 고급스러운 UI (다크모드, 글래스모피즘, 애니메이션 적용)
> - **Backend 및 AI 연동**: FastAPI (Python)를 통해 로컬 환경(GTX 1060 6GB)에 맞는 AI 추론 파이프라인 구축.
> 
> 이 스택으로 본격적인 프론트엔드 UI 화면 개발과 백엔드 뼈대 코드 작성을 시작해도 될까요?

## Proposed Changes

### Frontend (User Interface)
- Set up a React application built via Vite.
- Create a modern, beautiful, and dynamic UI with dark mode support and micro-animations.
- Implement forms for uploading a character image (JPG/PNG) and an audio file (MP3/WAV).
- Add an interactive video player to preview the generated lip-sync.
- **Files**:
  - `frontend/index.html`
  - `frontend/src/App.jsx`
  - `frontend/src/index.css` (Premium vanilla CSS styling)
  - `frontend/src/components/...`

### Backend (API Server)
- Set up a FastAPI Python server.
- Implement endpoints for `POST /upload` to securely receive audio and images.
- Endpoint `POST /generate` to trigger the lip-sync processing logic.
- **Files**:
  - `backend/main.py`
  - `backend/requirements.txt`
  - `backend/lip_sync_service.py`

## Verification Plan
### Automated & Manual Verification
- **Frontend Test**: Upload dummy file and visually inspect the loading state and premium UI.
- **Backend Test**: Verify endpoints successfully accept multipart file uploads.
- **Inference Test**: Pass a sample image/audio to the model to verify actual video generation capability.
