# 03. 기술적 기반 — 3 접근 모델

> tsgo 연결 기술은 **3가지 모델**로 분류된다. 각 모델의 전제·한계·실측 수치.

## 모델 A: JS 모듈 변조 (ttypescript, ts-patch)

### 방식
- `typescript/lib/tsc.js` 또는 VM 컨텍스트 런타임을 monkey-patch
- Node 프로세스 안의 JS 모듈 치환

### 장점
- 기존 typia가 의존하는 방식 (v12 작동 경로)
- TypeScript Compiler API 동일하게 사용 가능

### 한계 (tsgo에서 절대 불가)
- **tsgo는 Go 바이너리** — JS 모듈이 존재하지 않음
- TypeScript 7에서 이 경로는 **구조적으로 봉쇄**

## 모델 B: Go 소스 Patch + Hook (Effect-TS/tsgo)

### 방식
- `typescript-go` 소스를 pinned commit으로 fork
- `_patches/*.patch`로 최소 변경
- `etscheckerhooks` 같은 Go 모듈을 추가
- Nix flake로 빌드 재현성

### 실측 (Effect-TS)
- `_patches/` 파일 수: **23** ([Audit 6](../09-audit/06-cycle6-repository-measurements.md))
- Total patch LOC: **1,312**
- Go hook 모듈: etscore, etscheckerhooks, etslshooks, etsexecutehooks, etstesthooks
- Platform 배포: 7종 cross-compile

### 장점
- Transform chain 주입 가능 (hook 등록 지점 생성)
- 타입 안정성 확보 (Go struct 공식 export)

### 한계
- 매 tsgo release마다 **patch rebase** 필요 (1,312 LOC 분량)
- 충돌 빈도·시간은 변동적 (공개 로그 기반 확언 불가; 이 wiki의 이전 "5~10분" 주장은 추정이었음)

## 모델 C: go:linkname Shim (tsgolint)

### 방식
- typescript-go를 submodule/require로 참조 (fork 아님)
- `shim/` 디렉토리에서 `//go:linkname` directive로 internal symbol을 local alias로 노출
- patch 없음 (또는 거의 없음)
- `tools/gen_shims/main.go`로 자동 생성

### 실측 (tsgolint, 2026-04-18 기준)
- `go:linkname` directive 총수: **~910** ([Audit 6](../09-audit/06-cycle6-repository-measurements.md) — wiki 이전 896 주장은 오차)
- shim 디렉토리 수: **12** (wiki 이전 15 주장은 오차)
- Go 최소 버전: 1.26

### 장점
- **patch 0개 → upstream rebase 비용 없음**
- shim은 자동 재생성 (gen_shims 1회 실행)

### 한계 (결정적)
- **read-only API에만 적합**
- Transform chain 주입 불가 — `getScriptTransformers()` 반환이 unexported 구조체
- Emitter 내부 호출 replace 불가 (이미 컴파일된 binary)
- `go:linkname`은 Go 1.23부터 handshake 강제, 1.27+에서 더 엄격 예상 ([Go #67401](https://github.com/golang/go/issues/67401))
- typescript-go 공식 opt-in 없이는 장기적으로 취약

## 모델 D: Hybrid Shim + 최소 Patch (ttsc 제안, 미검증)

### 방식
- 대부분 API 접근: **shim (go:linkname)** — tsgolint 패턴
- Transform chain 주입: **1~3개 최소 patch** — Effect 패턴 부분
- 두 모델의 장점 결합

### 실측 가능성 (미검증)
- Patch 수: **Phase 0 spike에서 결정** (현재 wiki의 "1~3" 주장은 설계 목표이지 측정값 아님)
- go:linkname 수: **tsgolint 수준(~900) 재활용 가능**
- 유지보수 비용: **Phase 0에서 CI 파이프라인 구축 후 측정**

### 장점 (이론)
- patch 수 최소로 rebase 비용 절감
- shim 자동 생성으로 upstream 추적 용이
- Transform 주입 가능

### 한계 (정직)
- **Phase 0 프로토타입이 없으면 패치 수가 실제 몇 개 필요한지 확정 불가**
- Go:linkname handshake 정책에 따라 변동
- typescript-go 유지관리자의 적대 정책 시 shim 차단 가능성

## 모델 E: 완전 재구현 (tsgonest, typical)

### 방식
- typescript-go를 **의존**하되, validation·serialization·OpenAPI 생성 로직을 **모두 Go로 재작성**
- shim 패턴 공유

### 실측 (tsgonest, 2026-04-15 기준)
- Go LOC: **72,190** (typescript-go 제외)
- 파일 수: 140
- Shim 패키지: 11
- 기능 범위: validation + JSON serialize + OpenAPI 3.2 + SDK (4 namespace, typia 13 중 4)
- Release: v0.13.5, 49 releases
- Migration tool: `tsgonest migrate --apply`

### 장점
- IPC 없음 → tsgo 네이티브 속도
- Node 의존 제거 (단일 Go 바이너리)
- typescript-go와 같은 언어

### 한계
- 개발 기간 long (tsgonest는 4 namespace로 72K LOC)
- typia 13 namespace 전부면 **100~150K Go LOC** 예상 ([Audit 5](../09-audit/05-cycle5-decision-matrix.md))
- 기존 TypeScript core 자산 폐기
- Go 스킬 필요

## 모델 비교

| 축 | A JS 변조 | B Patch+Hook | C Shim | D Hybrid | E 재구현 |
|---|---|---|---|---|---|
| tsgo 호환 | ❌ | ✅ | ✅ | ✅ | ✅ |
| Transform 주입 | ✅ | ✅ | ❌ | ✅ (이론) | ✅ |
| 유지보수 비용 | — | 중 (patch rebase) | 낮 (shim 재생성) | **낮 (예상)** | **낮 (단일 언어)** |
| 구현 비용 | — | 중 | 낮 | 중 | **매우 큼** |
| typia 자산 재사용 | — | 높 | 낮 | 높 | 낮 (0%) |
| 성능 | — | 중 | — | 중 | **최고** |

## 향후 변수

- **Microsoft 공식 transformer API 출시 시**: 모델 B/C/D/E 모두 **public API로 대체 가능**한 facade 구조이면 영향 최소
- **공식 API가 IPC-only인 경우**: 모델 B/D의 patch 방식은 **폐기** 필요 ([Audit 5](../09-audit/05-cycle5-decision-matrix.md) 누락 리스크)
- **Go linkname 1.27 handshake 강제**: 모델 C/D/E 모두 typescript-go와의 협약 필요

## 결론

- 모델 A는 **과거** — tsgo 시대에 불가
- 모델 B vs C vs D vs E — 각각 장단
- ttsc 설계는 **모델 D (hybrid)** 를 제안하나, **Phase 0 spike에서 실현성 검증 필수**
- typia-go는 **모델 E** — 18~24개월 투자

→ 다음 [04. 전략 옵션](04-strategic-options.md)
