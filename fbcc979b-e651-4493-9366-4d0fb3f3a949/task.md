# 모션 추가: 페이크 숨쉬기 효과 (진행 완료)

- [x] `backend/Wav2Lip/inference.py` 수정
  - 영상 저장 직전, 개별 프레임 인덱스를 추적 변수 생성 (global_frame_idx)
  - `cv2.getRotationMatrix2D` 와 `cv2.warpAffine` 을 사용하여 삼각함수(Sin, Cos) 기반 줌인아웃 및 상하좌우 미세 흔들림 효과 추가
- [x] 서버 재시작 빛 검증
