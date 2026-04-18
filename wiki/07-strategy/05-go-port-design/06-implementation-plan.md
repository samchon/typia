# 06. typia-go 18개월 로드맵

## 전체 시간축

```
M0           spike (2주)
M1  (3개월)  Foundation: metadata, analyzer, is
M2  (3개월)  Validators: assert, validate, equals + test 재사용
M3  (3개월)  JSON: schema, stringify, parse, application
M4  (2개월)  LLM MVP: llm.application, schema, parameters
M5  (1개월)  Misc: notations, misc.*, reflect, http, functional
M6  (3개월)  Hardening: watch, cache, diagnostics, CI
M7  (3개월)  Specialized: random, protobuf, v1.0 launch prep

총 18개월 (+ 2주 spike)
```

## M0 — Spike (2주)

### 목표
기술 실현 가능성 최종 확인.

### 작업
- `/mnt/d/github/contributions/tsgonest` 로컬 빌드 → 실행 검증
- tsgonest의 metadata schema Go 파일을 이해 (`internal/metadata/metadata.go`)
- 최소 go:linkname 샘플 작성 — `Checker_getTypeOfSymbol` 호출
- 간단한 "typia.is<string>(input)" → "(input) => typeof input === 'string'" emit 실증

### 산출물
- 기술 go/no-go 결정
- 18개월 일정의 현실성 재확인

## M1 — Foundation (3개월)

### 목표
MetadataSchema + MetadataFactory + `typia.is<T>` 작동.

### W1-2: 저장소·빌드 인프라
- `samchon/typia-go` 새 저장소 (또는 typia monorepo `packages/typia-go`)
- `go.mod`, `go.work` 구성
- typescript-go를 git submodule 추가
- `flake.nix` (Effect-TS 복사)
- `tools/gen_shims/main.go` (tsgolint 복사)

### W3-6: shim 자동 생성
- 13 shim 패키지 초안 (ast, checker, compiler, core, parser, scanner, tsoptions, tspath, vfs/*, bundled, lsp)
- `gen_shims` 실행해 자동 생성
- 기본 테스트: `NewProgram`, `GetTypeOfSymbol` 동작 확인

### W7-10: metadata 스키마
- `internal/metadata/*.go` 13 파일
- typia `MetadataSchema.ts` 등 1:1 포팅
- unit test

### W11-14: analyzer 기초
- `internal/analyzer/factory.go`
- `explore_metadata`, `iterate_metadata` 포팅
- 원시 타입·객체만

### M1 Exit
- `typia.is<string>(input)`, `typia.is<{x: number}>(input)` 작동
- 간단한 fixture 테스트 통과

## M2 — Validators 완성 (3개월)

### W15-20: analyzer 완성
- union, intersection (★ 최고 난이도)
- recursive, generic, alias
- native (Date, Uint8Array)
- template literal types

### W21-24: IsProgrammer 완성
- CheckerProgrammer, FeatureProgrammer 포팅
- UnionExplorer (discriminator 최적화)
- combiner / atomist 패턴

### W25-26: AssertProgrammer
- create_guard_call (path 합성)
- TypeGuardError throw emit

### W27-28: ValidateProgrammer
- IValidation 누적
- errors 배열 emit

### M2 Exit
- typia의 `tests/test-typia-automated` 중 validator 테스트 50% 통과
- 벤치마크: tsc+ts-patch 대비 ≥ 8× 속도

## M3 — JSON (3개월)

### W29-32: json.schema
- JsonSchemaProgrammer 포팅
- OpenAPI 3.0/3.1/3.2/Emended 네 가지 출력

### W33-38: json.stringify (가장 큼)
- StringifyJoinder 포팅
- inline template literal 합성
- 1129 LOC TS → ~2500 Go

### W39-40: json.parse / assertParse / assertStringify
- parse + validate 결합

### M3 Exit
- 자동 테스트 json 카테고리 100% 통과
- 벤치: json.stringify가 fast-json-stringify 대비 ≥ 3×

## M4 — LLM MVP (2개월)

### W41-44: llm.schema / llm.parameters / llm.structuredOutput
- ILlmSchema 단일 타입 출력
- 모델별 호환 모드 (chatgpt strict, anthropic, gemini, llama)

### W45-48: llm.application / llm.controller
- 클래스 메소드 → 함수 호출 스키마
- JSDoc description 추출
- ILlmFunction의 parse/coerce/validate는 runtime에 남김

### M4 Exit
- AutoBE/Agentica의 LLM function calling 테스트 통과
- **tsgonest가 포기한 영역 선점**

## M5 — Misc 일괄 (1개월)

### W49-52
- notations (camel/pascal/snake)
- misc (clone/prune/literals)
- reflect (schema/name)
- functional (assertFunction 등)
- http (formData/queryObject/headers/parameter)

### M5 Exit
- 자동 테스트 각 카테고리 100%

## M6 — Hardening (3개월)

### W53-58: Watch / Incremental
- `fsnotify` 사용
- `buildcache/` 구현 (파일 해시 + version 태그)
- 변경 파일만 재생성

### W59-64: 진단(Diagnostic) 통합
- tsgo diagnostic + typia 자체 diagnostic 병합
- VS Code language server 호환성 (선택)

### W65-68: CI / 배포 인프라
- GitHub Actions 7 플랫폼 빌드
- 바이너리 서명 (macOS notarize, Windows code signing)
- `npm publish @typia/typia-{plat}-{arch}` 자동화
- smoke test

### M6 Exit
- v0.9 beta 출시 가능 상태

## M7 — Specialized + Launch (3개월)

### W69-72: random
- RandomProgrammer 포팅 (~1200 LOC → 3000)

### W73-78: protobuf
- encode / decode / message
- .proto IDL 생성
- wire format helper

### W79-84: v1.0 준비
- 전체 통합 테스트
- 성능 벤치마크 공개 (tsgonest, tsc+ts-patch, tsgo 단독 비교)
- 마이그레이션 가이드 (ts-patch → typia-go)
- typia v13 출시

### M7 Exit
- **typia-go v1.0 출시**
- typia 공식 "v13 = Go 네이티브" 발표
- 컨퍼런스 발표

## 인력 추정

### 시나리오 A: samchon 혼자
- M1~M7 모두 직접 → **18~22 개월**
- Go 학습 포함 시 24개월

### 시나리오 B: samchon + Go 조력자 1인
- 병렬 작업으로 M2, M3, M4 압축
- **12~14 개월**

### 시나리오 C: samchon + Go 조력자 2인
- 10개월 가능
- 팀 빌드 + 커뮤니케이션 비용 있음

## 마일스톤 별 중요 결정

| 시점 | 결정 |
|---|---|
| M0 종료 | 본격 착수 여부 |
| M1 종료 | metadata 설계 동결 (이후 변경 영향 큼) |
| M2 종료 | 공개 alpha 여부 |
| M3 종료 | LLM 우선순위 재확인 |
| M4 종료 | tsgonest와 기능 갭 검토 |
| M6 종료 | beta 공개 |
| M7 종료 | v1.0 launch |

## 리소스 요구

- 저장소: samchon/typia-go (또는 packages/ 하위 Go 바이너리)
- CI 예산: GitHub Actions 사용량 증가 (Go 빌드 7 플랫폼 × 매 PR)
- 서명 비용: Apple Developer ID (연 99 USD), Windows code signing (연 300~400 USD)
- 재정 후원: OpenCollective 또는 GitHub Sponsors

## 리스크 완화

- 매 분기 tsgonest 진행 상황 모니터링
- typical v1.0 출시 시 공유 문제점 분석
- tsgo upstream breaking change 발생 시 shim 재생성 자동화

## 한 줄 결론

> **18개월 + 2주 spike. samchon 혼자면 빠듯하나 가능, 조력자 1인이면 12~14개월로 단축. M4 종료 시점(8개월)에 "LLM MVP + validators + json"만 있어도 사용자 가치 큼 — 조기 출시 권장.**

→ 다음 [07. 리스크](07-risks.md)
