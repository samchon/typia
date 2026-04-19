# Mega-cycle 5 — 미래 시나리오 주입

> 상태: 대기 중
> 입력: `../mega-cycle-4/01-*.md` ~ `06-*.md`
> 산출: `mega-cycle-5/01-*.md` ~ `06-*.md`

## Mega-5 의 고유 임무

Mega-4 까지는 **현재**(Phase 0) 기반. Mega-5 는 **미래 시나리오**를 주입하여 규약이 견디는지 스트레스 테스트한다.

## 주입 시나리오

### S1. Phase 1~2 확장 (2026 Q4 ~ 2027 Q2)

- LLM function calling (6 model compat) 추가
- Protobuf encode/decode 추가
- Random generator (RandExp 의존) 추가
- Misc / Notations / Functional / HTTP / Reflect 추가

규약이 이 확장을 **수정 없이 수용**하는가? 어떤 규약이 Phase 1 에서 깨질 예정인가?

### S2. typia-go 70% 포팅 상태 (2028 Q2)

- v12 TS 와 typia-go 가 공존
- 사용자 프로젝트가 TS 와 Go 을 혼용
- migration wizard 가 일부만 자동화

이 전이 구간에서 규약이 사용자를 어떻게 보호하는가?

### S3. tsgo 버전 bump (1.0 → 1.x → 2.x)

- typescript-go 가 `go:linkname` 규칙을 강화 (Go 1.27+ 예상)
- 내부 API 변경
- tsgo 의 emit API 공식화 가능성

우리 shim·patch 규약이 bump 에 얼마나 유연한가?

### S4. 경쟁자 대응

- tsgonest v1.0 GA (2027 추정)
- effect-ts 가 전체 Go 포팅 선언
- 신규 경쟁자 등장

마케팅·DX·API 규약이 경쟁 환경 변화에 어떻게 대응하는가?

### S5. samchon burnout / bus factor

- 주 개발자 부재 시 6 개월 유지 가능한가?
- 새 기여자가 규약만 읽고 컨트리뷰션 가능한가?

## 각 역할 Sub-1 임무

S1~S5 각 시나리오에 대해 자기 역할 규약이 견디는지 **개별 스트레스 테스트**. 깨지는 규약은 개정. 새 규약 필요 시 추가.

산출: `mega-cycle-5/cycles/cycle-01-X-future-stress.md`

## Sub-2, 3, 4, 5 — 표준 절차 (시나리오 중심 비판)

## 진행 상태

- [ ] Sub-1
- [ ] Sub-2
- [ ] Sub-3
- [ ] Sub-4
- [ ] Sub-5
