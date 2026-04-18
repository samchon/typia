# 07. typia-go 완전 설계

> 상세 배경: [07-strategy/05-go-port-design/](../07-strategy/05-go-port-design/). 이 문서는 **정정된 스펙**.

## 정의

> **typia-go** = typia core/transform을 Go로 완전 재구현. tsgonest 모델을 **전체 13 namespace**로 확장.

## 범위

### In-scope
- typia 13 namespace 전부 (validators, json, llm, protobuf, random, misc, notations, reflect, functional, http)
- MetadataSchema IR (Go 재구현)
- MetadataFactory (Go)
- 모든 Programmer (Go)
- OpenAPI 3.0/3.1/3.2 (tsgonest는 3.2만)
- Standard Schema 어댑터
- Platform binary 7종

### Out-of-scope (Non-goals)
- nestia 자체 포팅 (별도 프로젝트)
- 프레임워크 자동 주입 (typical 스타일은 옵션)
- Runtime 헬퍼 재작성 (`@typia/runtime`은 Node 유지)
- IDE plugin / LSP (tsgo LSP에 위임)

## LOC 예산 (재정정)

[Audit 5](../09-audit/05-cycle5-decision-matrix.md)의 정정 반영:

- tsgonest 실측: **72,190 LOC / 4 namespace** → 18,048 LOC/namespace
- typia 13 namespace = 예상 **100~150K Go LOC**
- 이전 wiki의 "70~100K" 주장은 과소 추정

**상세**:
| 레이어 | Go LOC (예상) |
|---|---|
| metadata schema | ~1,500 |
| analyzer (MetadataFactory) | ~10,000 |
| codegen/programmers | ~60,000 (13 namespace) |
| emitter helpers | ~5,000 |
| shim/ (tsgonest 패턴) | ~5,000 |
| rewrite/controllers | ~2,000 |
| cmd/cli | ~3,000 |
| tools/gen_shims | ~1,000 |
| tests/fixtures | ~20,000 |
| **총** | **~107,500** |

## 아키텍처

```
┌──────────────────────────────────────┐
│ @typia/typia (Node launcher)          │
│ (Platform 감지 + bin spawn)            │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ @typia/typia-{platform}-{arch}        │
│ (Go binary, 단일)                     │
│                                        │
│ cmd/typia/            CLI             │
│ internal/metadata/    IR              │
│ internal/analyzer/    TypeWalker      │
│ internal/codegen/     13 Programmers  │
│ internal/openapi/     3.0/3.1/3.2     │
│ internal/llm/         function calling│
│ internal/protobuf/    encode/decode   │
│ internal/random/      generator       │
│ internal/rewrite/     controller inject│
│ shim/                 go:linkname     │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ typescript-go (submodule)             │
└──────────────────────────────────────┘

+ @typia/interface  (NPM, TS only, runtime 안됨)
+ @typia/runtime    (NPM, emit된 헬퍼 런타임)
```

## TS → Go 매핑 (핵심)

| typia TS | typia-go |
|---|---|
| `packages/core/src/schemas/metadata/*` (500 LOC TS) | `internal/metadata/*.go` (~1,500 LOC) |
| `factories/MetadataFactory.ts` 등 (4K LOC TS) | `internal/analyzer/*.go` (~8~10K) |
| `IsProgrammer.ts`, `AssertProgrammer.ts`, `ValidateProgrammer.ts` | `internal/codegen/is.go`, `assert.go`, `validate.go` |
| `CheckerProgrammer.ts` (1,614 LOC) | `internal/codegen/checker.go` + **파일 분리** 권장 |
| `JsonStringifyProgrammer.ts` (1,129 LOC) | `internal/codegen/json_stringify.go` (~2,500) |
| `RandomProgrammer.ts` (1,200 LOC) | `internal/codegen/random.go` (~3,000) |
| `ProtobufEncodeProgrammer.ts` / `Decode*` | `internal/codegen/protobuf_*.go` |
| `LlmApplicationProgrammer.ts` 등 | `internal/codegen/llm_*.go` |

실측 근거: [Audit 6](../09-audit/06-cycle6-repository-measurements.md).

## 13 Namespace 이식 우선순위

1. **P1 Validators** (is, assert, validate, equals) — 2~3개월
2. **P2 JSON** (schema, stringify, parse) — 3개월
3. **P3 Misc·Notations·Reflect·Functional·Http** — 2개월
4. **P4 Random + Protobuf** — 2~3개월
5. **P5 LLM** (최대 차별점) — 2~3개월

각 우선순위마다 typia test suite 통과 검증.

## MVP 전략

**v0.5 alpha**: validators + json.schema + json.stringify (P1 + P2 부분)
- 8~9개월 개발 후 출시 가능
- typia 사용자 70%+ 커버
- 시장 피드백 수집 조기 시작

**v0.9 beta**: + llm + misc + http (P3 + P5)
- 14~16개월

**v1.0**: 전 기능 + random + protobuf (P4)
- 18~24개월

## Standard Schema 내장

- `typia.createValidate<T>()`가 반환하는 함수에 `~standard` 프로퍼티 주입
- [Audit 7](../09-audit/07-cycle7-missing-perspectives.md) 참조, **2~3주 작업** (1시간 아님)

## Edge runtime 완벽 호환

- 단일 Go 바이너리 (build-time) + static JS emit (runtime)
- Workers/Edge에서 `eval` 없이 완전 작동
- **구조적 승리** — 마케팅 핵심 메시지

## 배포

```
@typia/typia                    (Node launcher, ~200 LOC)
@typia/typia-darwin-arm64
@typia/typia-darwin-x64
@typia/typia-linux-arm64
@typia/typia-linux-arm
@typia/typia-linux-x64
@typia/typia-win32-arm64
@typia/typia-win32-x64
@typia/interface                (type only, 그대로 유지)
@typia/runtime                  (런타임 헬퍼, 그대로 유지)
```

## 테스트 전략

- typia test-typia-automated 자동 생성 테스트 전부 실행
- Emit JS 출력을 typia v12와 **byte-level diff 최소화** 목표
- fuzzing (go-fuzz)
- typia v12 버그픽스 자산 재현 위해 수년 치 edge case 테스트 추가

## 리스크 (정직, [Audit 5](../09-audit/05-cycle5-decision-matrix.md) 누락 5개 포함)

1. **R1 Go 학습 곡선** — AI 페어링 + 조력자
2. **R2 TS 30K LOC 폐기 심리** — D 옵션 병행
3. **R3 tsgonest 선점** — MVP 8~9개월 조기 출시로 대응
4. **R4 Go linkname 1.27+ 제약** — typescript-go와 handshake 협약 추진
5. **R5 tsgo upstream 리팩토링** — gen_shims 자동화 + 주간 CI smoke
6. **R6 typia v12 버그픽스 재현** — test-typia-automated 전체 재실행
7. **R7 커뮤니티 Go 선호도** — "npm i typia"로 투명 설치
8. **R8 samchon 번아웃** — 조력자 + 재정 + AutoBE 연계
9. **R9 Microsoft 공식 API** — facade로 흡수
10. **R10 Bug bash 초과** — CI 90%+, early alpha
11. **NEW R11 Microsoft 적대 정책** — go:linkname 제약 강화 협상
12. **NEW R12 IPC-only 공식 API** — ttsc 재설계 대비
13. **NEW R13 사용자 반발** — Go 바이너리 수용성 조사
14. **NEW R14 서명 운영 비용** — Apple/Windows notarize 연 $400~500
15. **NEW R15 기여자 이탈** — nestia 등 파트너와 사전 합의

→ 다음 [08. 24개월 상세 일정](08-implementation-timeline.md)
