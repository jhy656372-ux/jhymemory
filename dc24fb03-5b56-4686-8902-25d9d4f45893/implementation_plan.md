# 고화질 AI 립싱크(GFPGAN) 적용 계획 (Phase 2)

현재 Wav2Lip의 생성 결과물에서 나타나는 입 주변의 떨림 및 화질 저하 현상을 극복하기 위해, 전 세계적으로 가장 널리 쓰이는 **얼굴 화질 복원 AI 모델인 GFPGAN**을 파이프라인 마지막에 연결합니다. 

## User Review Required

> [!IMPORTANT]
> GFPGAN은 프레임(이미지) 단위로 딥러닝 연산을 수행하기 때문에, 기존보다 비디오 생성 속도가 **약 2배~3배 더 오래 걸릴 수 있습니다.** (보내주신 영상을 한 땀 한 땀 붓칠하는 것과 같습니다.) 
> 이 방식대로 바로 백엔드 로직에 덧붙여도 괜찮으신지 확인 부탁드립니다.

---

## Proposed Changes

### 백엔드 (API 서버)
#### [NEW] backend/enhance.py (file:///c:/Users/admin/.gemini/AI 립싱크 생성기/backend/enhance.py)
- `gfpgan` 모듈을 불러와서 비디오의 각 프레임에서 얼굴을 추출하고 고해상도로 업스케일링(복원)하는 기능 모듈입니다.
- 원본 영상의 오디오는 유지하면서 프레임만 교체하여 `ffmpeg`로 재조립합니다.

#### [MODIFY] main.py (file:///c:/Users/admin/.gemini/AI 립싱크 생성기/backend/main.py)
- 기존 Wav2Lip이 비디오(`result_wav2lip.mp4`)를 생성하고 나면, 즉시 `enhance.py`의 함수를 호출하여 2차 보정(`final_output.mp4`)을 거치도록 파이프라인을 추가합니다.

---

## Verification Plan

### Manual Verification
1. 프론트엔드(`index.html`)에서 동일한 정면 얼굴과 노래 파일을 넣고 다시 한 번 생성합니다.
2. 결과물을 확인하여 입술 및 얼굴 텍스처가 뭉개짐 없이 선명하게 유지되는지 이전 영상 결과물과 비교합니다.
