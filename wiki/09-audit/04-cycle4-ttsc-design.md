# Audit 4 — ttsc 설계 v1/v2 불일치

## 핵심 적발

### 1. v1/v2 불일치
- `04-ttsc-architecture.md`만 v2 (shim 중심)로 재작성
- 나머지 (03-vision, 05-impl-plan, 06-interaction, 07-risks, 08-open-q)는 **v1 기준 유지**
- 특히 05-impl-plan의 "12 person-months"가 shim 발견 후 재계산 안 됨

### 2. 수치 오차
- Wiki "tsgolint shim 15 packages" → 실측 **12 디렉토리** (또는 11 shim.go 파일)
- Wiki "Effect-TS 24 patches" → 실측 **23 파일** (001~023)
- Wiki "tsgolint `go:linkname` 896" → 실측 **~910**
- tsgonest 72,200 LOC ≈ 실측 72,190 ✓ 정확

### 3. "매 tsgo release 5~10분 rebase" 근거 부족
- tsgolint/tsgonest CI/CD 로그 미확인
- 가정에 가까움

### 4. "사상 양보 0" 거짓
- Wiki는 "사용자 API 불변 = 양보 0"이라 정의
- 그러나 `tsc → ttsc` 명령 변경은 사용자에게 **보이는 양보**
- package.json의 `"build": "tsc"` → `"build": "ttsc"` 수동 변경 또는 자동화 보장 필요

### 5. Transform chain hook patch "1~3개" 낙관
- 실제 필요: (1) cmd main import, (2) emitter hook, (3) CompilerOptions 필드, (4) tsconfig parsing, (5) plugin spawning, (6) diagnostic 병합 … **10개 이상 가능성**

### 6. IPC 오버헤드 "15~50ms per file" 낙관
- MessagePack round-trip 100-500 μs × 수십 호출 = 수 ms 예상
- 그러나 Node child startup, plugin load, lock contention, concurrent 관리 오버헤드 미반영
- 실제 파일당 80~200ms 가능성

### 7. tsgonest "Rewrite 모델" 평가 누락
- Wiki는 "이후 재평가"라 했으나 실행 안 함
- Emit 후 파일 기반 수정은 patch 지점을 **더 줄일 수 있는 대안**

## 결론

- 04-architecture만 업데이트되고 **나머지 문서는 v1 상태**
- 수치의 20%까지 오차
- Stage 0 spike 필수 — 종이 설계로는 IPC 비용·patch 수 검증 불가
- master plan 06-ttsc-specification은 이 모든 결함을 한꺼번에 교정
