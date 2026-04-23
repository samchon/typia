# Audit 5 — 의사결정 매트릭스 근거 빈약

## 핵심 적발

### 1. LOC 예산 논리 붕괴
- Wiki: "typia core+transform 34,613 TS LOC → Go 2~3배 = 70~100K"
- 실측: typia 전체(interface+typia 포함) = **50,665 TS LOC**
- tsgonest 72,190 Go LOC는 **부분 구현(4/13 namespace)**
- 정정: typia 13 namespace Go 포팅 = **100~150K LOC** (tsgonest가 4개로 72K 쓰므로 비례 계산)

### 2. "Go:TS LOC 2~3배" 근거 없음
- 프로젝트마다 0.8~5배까지 변동
- 실제 측정 없이 가정

### 3. 의사결정 매트릭스 점수표 = post-hoc rationalization
- A=5.15, B=7.5, C=8.4, D=7.85 — 8 기준 × 1~10 점 각각 자의적
- 가중치 "경쟁 대응 20%" 근거 없음. 1% 변동만 해도 순위 역전
- "현실 반영 조정"으로 매트릭스 결과 무효화 — 순환 논리

### 4. 시나리오 S1/S2/S3 단순성
- 단 3개 — 실제 변수는 다차원
- AI 페어링 생산성, MS 일정, market bifurcation, 사용자 저항 누락

### 5. 누락 리스크 5개
- **MS 적대 정책** (go:linkname 제약 강화 요청)
- **공식 transformer API가 IPC-only** (현재 ttsc 설계 폐기 필요)
- **사용자 반발** (Go 바이너리 거부, Windows 권한 이슈)
- **바이너리 서명 운영 비용** (Apple notarization, Windows code signing 유지)
- **기여자 이탈** (nestia/typia 기여자가 Go 포팅 거부)

### 6. "$50~80K 조력자" + "AutoBE 수익 조달 가능" 근거 없음
- AutoBE 수익 비공개
- Go 개발자 시장가 $50~80K는 국가·경력별로 큼

### 7. "사상 양보 0 / 사용자 체감 0" 홍보성 표현
- 실제로는 빌드 명령어 변경, 바이너리 다운로드, 서명 신뢰 이슈 등 체감 존재

## 대안 프레임워크

점수표 대신 **기댓값(EV) + 감수 가능한 손실선 + Sequencing**:

1. 조건 판단: "Go 조력자 2026 말 확보 확률 P?"
2. 옵션별 EV 계산
3. Downside protection: 실패 시 회복 비용
4. Sequencing: "6개월 후 재평가, 12개월 후 C 고고판정"

## 결론

현 의사결정 문서는 **"이미 결정된 D를 매트릭스로 정당화"**하는 형태. 진정한 결정은 **Stage 0 spike + 6개월 go/no-go + 12개월 commit**의 단계적 실행.

master plan의 05-recommended-path와 10-success-criteria는 이 재구조화를 수용.
