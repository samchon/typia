# 07. Go 포팅 특유 리스크

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


## 리스크 매트릭스

| # | 리스크 | 가능성 | 영향 | 완화 |
|---|---|---|---|---|
| R1 | Go 학습 곡선으로 M1~M2 지연 | 중 | 크 | 조력자 1인, AI 페어링 |
| R2 | TS 자산 30K LOC 폐기의 심리적 저항 | 중 | 중 | 명시적 병행 유지 기간 설정 |
| R3 | tsgonest가 1년 먼저 시장 장악 | 중 | 크 | LLM/Protobuf 차별화, M4까지 MVP |
| R4 | go:linkname이 Go 1.30+에서 더 제약 | 낮 | 크 | typescript-go 측과 협의, handshake linkname opt-in |
| R5 | tsgo upstream 대규모 리팩토링 | 중 | 중 | gen_shims 자동화, CI 매일 smoke test |
| R6 | typia v12 버그픽스 자산 재현 필요 | 높 | 중 | test-typia-automated 전체 재실행 |
| R7 | 커뮤니티가 Go 도구 선호도 낮음 | 중 | 중 | Nix + npm 통합 설치 UX |
| R8 | samchon 번아웃 | 중 | 매우 크 | 자원 확보, 스코프 관리 |
| R9 | Microsoft가 공식 transformer API 출시 → typia-go 무용? | 낮 | 중 | typia-go는 facade, 내부 교체 가능 |
| R10 | Bug bash 기간 예상 초과 | 중 | 중 | CI 커버리지, fuzzing |

## 개별 리스크 상세

### R1. Go 학습 곡선
- samchon은 TypeScript + Node 전문. Go는 학습 필요.
- **완화**:
  - AI 도구(Claude Opus 4.7, Copilot)로 생산성 2× 이상
  - Go 조력자 1인 Phase 초반 mentoring
  - `tsgonest`, `typical`, `tsgolint` 실제 코드 읽기로 패턴 흡수
- **남은 리스크**: 6개월 정도 Go 숙련 시간 필요 — 일정 여유 1~2개월 버퍼

### R2. TS 자산 폐기 저항
- 수년간 쓴 30K LOC TypeScript core 버리는 것 — 심리적 비용
- **완화**:
  - 단순 폐기 아닌 "새 구현의 모델로 계속 참조"
  - ttsc(옵션 B)와 병행 운영 기간 (옵션 D처럼)
  - 모든 TS 코드를 Go 코드 작성 시 reference로 사용
- **남은 리스크**: 심리적 — 기술보다 멘탈 관리 문제

### R3. tsgonest 시장 선점
- 현재 v0.13.5, 49 releases — 매 2주마다 릴리스 중
- typia-go M4(8개월)까지는 validators+json+llm MVP만 가능
- **완화**:
  - typia의 기존 사용자 기반(5.7k stars, nestia/AutoBE 생태계)이 방어선
  - tsgonest 없는 영역(LLM, Protobuf, 13 namespace) 선점
  - M2 종료 시점(6개월)에 early alpha로 얼리어답터 확보
  - AutoBE/Agentica의 typia-go 우선 채택으로 레퍼런스 확보
- **남은 리스크**: NestJS-only 시장은 tsgonest가 가져갈 수 있음 — 수용 필요

### R4. go:linkname 제약 강화
- Go 1.23부터 stdlib 대상 linkname에 handshake 강제
- typescript-go는 third-party라 현재 제약 없지만, 미래에 변할 수 있음
- **완화**:
  - typescript-go 프로젝트에 **handshake linkname opt-in** 기여
  - (또는) patch 방식으로 fallback 설계 미리 준비
- **남은 리스크**: Microsoft의 정책 변경 시 대응 필요

### R5. tsgo upstream 리팩토링
- Microsoft가 internal 구조를 대규모 바꾸면 shim 대량 깨짐
- **완화**:
  - `gen_shims` 자동화로 빠른 재생성
  - CI에서 매일 tsgo nightly 대상 smoke test
  - 깨지면 즉시 PR로 대응
- **남은 리스크**: 드물지만 발생 시 1~2주 집중 작업 필요

### R6. typia v12 버그픽스 자산
- typia는 수년간 edge case 버그 해결. Go 포팅 시 재현 가능
- **완화**:
  - `tests/test-typia-automated` 전체를 typia-go에도 실행
  - emit JS 출력이 typia v12와 byte-level diff 최소화 목표
  - 차이 발생 시 해당 TS 코드 다시 검토 (버그픽스 interpolation)
- **남은 리스크**: 테스트되지 않은 edge case 누락

### R7. 커뮤니티 Go 선호도
- TS 개발자 상당수가 "내부가 왜 Go냐" 의문
- **완화**:
  - `npm i typia` 한 줄 설치 — 사용자가 Go를 몰라도 됨
  - 바이너리 투명 (tsgonest 모델)
  - "Microsoft도 Go로 감" 메시지 (tsgo 자체가 근거)
- **남은 리스크**: 기여 희망자 풀 축소 — typia의 PR 빈도 감소 가능

### R8. samchon 번아웃
- 18~24개월 집중 개발 + typia v12 유지보수 + nestia/AutoBE/Agentica 동시
- **완화**:
  - 명확한 MVP 범위 (M4 기준)
  - 조력자 영입
  - 상업화(AutoBE) 수익의 일부를 ttsc 유지에 투입
  - OpenCollective / GitHub Sponsors 활성화
- **남은 리스크**: 매우 높음 — 이 요인이 프로젝트 실패의 1순위

### R9. Microsoft 공식 API
- 만약 2027년에 Microsoft가 공식 transformer API 출시한다면?
- typia-go는 **facade**이므로 내부를 공식 API 호출로 교체 가능
- 사용자 입장에서는 변화 없음
- **남은 리스크**: 개발 시점에 잘못 설계된 shim 일부 재작업

### R10. Bug bash 초과
- Go 포팅 후 production 버그 대응 기간 길어질 수 있음
- **완화**:
  - CI 커버리지 90%+
  - Fuzzing (go-fuzz)
  - Early alpha로 얼리어답터가 버그 사전 발굴
- **남은 리스크**: v1.0 출시 후 1~3개월 hotfix 반복

## 리스크 우선순위 (완화 투자 ROI)

| # | 리스크 | 투자 | 효과 |
|---|---|---|---|
| R8 | 번아웃 | 높 | 매우 높 — 프로젝트 생존 |
| R3 | tsgonest 선점 | 중 | 높 — 차별화 투자 |
| R1 | Go 학습 | 낮 | 중 — 시간 소비 |
| R6 | 버그픽스 재현 | 중 | 중 — 품질 |
| R5 | tsgo upstream | 낮 | 중 — 자동화 |
| R2 | 심리적 저항 | 낮 | 낮 — 관리 가능 |
| R4 | linkname 제약 | 낮 | 중 — 장기 |
| R9 | 공식 API | 낮 | 낮 — facade 안전 |
| R7 | 커뮤니티 | 중 | 낮 — 사용자 UX로 흡수 |
| R10 | Bug bash | 낮 | 중 — CI |

## 가장 큰 3가지

1. **R8 (번아웃)**: 이 프로젝트가 실패한다면 이 이유.
2. **R3 (tsgonest)**: 시장 내 시계 — 8개월 안에 MVP, 18개월 안에 v1.0.
3. **R6 (버그픽스)**: 품질 신뢰도 — typia v12와 파리티 달성이 관건.

나머지는 모두 기술적 완화 가능.

## 완화 전략 종합

### 자원 확보
- Go 조력자 1인 (Phase 1 필수)
- 상업화 수익 연결 (AutoBE)
- 후원 체계 (OC, GitHub Sponsors)

### 시간 관리
- MVP 범위 엄격히 (validators + json + llm)
- protobuf / random은 v1.1로 미루기
- M4 조기 alpha 출시로 feedback 수렴

### 기술 관리
- `gen_shims` + CI 자동화
- typia v12와 emit diff 자동 검증
- fuzzing / edge case 적극 발굴

### 심리 관리
- ttsc(옵션 B)와 병행 실행 (옵션 D) — 즉각적 방어선
- 단기 성과로 동기 유지 (M2까지 공개 alpha)

## 한 줄 결론

> **10가지 리스크 중 7가지는 기술적 완화 가능. 나머지 3가지(번아웃, 선점, 파리티)가 진짜 프로젝트 생존 변수.** 이 셋을 관리하는 것이 typia-go의 성패를 결정.
