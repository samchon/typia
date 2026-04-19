# 04. Strategic Options (v2 개정 — "택일"에서 "통합"으로)

> v1 초안은 A/B/C/D 4 옵션을 비교했다. 그것은 현실 도피였다. **tsgo에서 ts-patch 경로는 존재하지 않는다**. typescript-go를 정복하지 않는 한 typia는 살아남지 못한다. 따라서 이 문서는 "어떤 옵션을 고를까"가 아니라 "유일한 길을 어떻게 갈까"다.

## 왜 "옵션 선택"은 거짓 질문인가

| 이전 옵션 | 재평가 |
|---|---|
| A: TS 6.x LTS 유지 | 시간 매수일 뿐. 2027~28 신규 사용자 0. 자체 해답 아님. **병행 맥락으로만 의미**. |
| B: ttsc wrapper | 그 자체로 끝이 아님. **typia-go 없이는 Node bridge IPC 비용으로 성능 무너짐**. |
| C: typia-go 완전 재구현 | ttsc 스캐폴딩 없이는 **사용자에게 닿지 않음** — 빌드 파이프라인 통합 수단 없음. |
| D: 단기 B, 장기 C | 순차 전환 발상이 잘못. **처음부터 함께** 해야 중복 투자 안 남음. |

→ **B와 C는 한 시스템의 두 층**이다. 분리 결정은 존재하지 않는다.

## 유일한 길: ttsc + typia-go 동시 구축

### 관점 1. 하나의 Go 바이너리

```
ttsc binary (Go)
  ├─ cmd/ttsc/              ← 사용자 진입 (ttsc --build)
  ├─ internal/driver/       ← typescript-go 구동 + hook (구 "ttsc")
  │     ├─ shim/            (go:linkname, tsgolint 패턴)
  │     ├─ patches/         (최소 1~3개, transform chain hook)
  │     └─ bridge/          (없어짐 — 구 Node IPC는 불필요)
  └─ internal/engine/       ← typia 엔진 (구 "typia-go")
        ├─ metadata/        (MetadataSchema IR)
        ├─ analyzer/        (MetadataFactory)
        ├─ codegen/         (13 Programmers)
        ├─ openapi/
        ├─ llm/
        ├─ protobuf/
        └─ random/
```

`ttsc`는 진입점이고, `engine/`은 그 안의 두뇌다. 사용자는 하나의 바이너리만 설치한다.

### 관점 2. IPC 오버헤드 제거

v1 초안의 ttsc는 Go → Node 자식을 spawn해 **Node 측 typia 코드**를 IPC로 호출했다. 이는:
- 파일당 수십~수백 ms IPC 오버헤드
- 복잡한 MessagePack serialization
- Node 자식 프로세스 관리 부담

**engine/이 Go면 IPC가 없다**. typescript-go 내부에서 shim으로 type 정보 꺼내고, 같은 프로세스 Go 코드가 emit까지 수행. tsgonest가 실증한 모델.

### 관점 3. 중복 투자 없음

B와 C를 순차로 하면 **Node bridge**를 한 번 만들고 버리는 중복이 생긴다. 처음부터 Go engine을 만들면:
- ttsc 스캐폴딩 = Go engine의 껍데기
- typia-go MVP = 껍데기 안에 채워지는 엔진
- 한 저장소·한 빌드 파이프라인

### 관점 4. 사용자 경험 단일

```bash
# 현재 (v12)
npm i -D typescript typia ts-patch
npx typia setup           # ts-patch install
npm run build             # tsc + patched transformer

# 전환 후 (v13+)
npm i -D typia
npx typia setup           # ttsc 바이너리 install
npm run build             # ttsc (내부적으로 Go engine + typescript-go)
```

tsc/ts-patch 의존 **완전 제거**.

## TS 6.x LTS는 어떻게 되는가

이전 "옵션 A"는 **버리는 것이 아니라 자동 맥락**:

- TS 6.x를 쓰는 기존 사용자는 typia v12 (ts-patch 기반)을 2028 말까지 사용 가능
- samchon의 `ts-patch-typescript-6.0` fork로 버그 패치만
- 신규 기능 개발은 **전부 ttsc+typia-go로**
- 2028 말 ts-patch 경로 graceful deprecation

이것은 "선택"이 아니라 **과거와의 결별 일정**이다.

## ttsc와 typia-go의 현실적 개발 순서

### Phase 0 (2026 Q2, 6주) — Spike
- typescript-go submodule + shim 자동 생성 도구 복제
- 최소 patch로 "Hello from ttsc" 증명
- Go engine 껍데기 (metadata 스키마만)
- **Go/No-Go 결정**: 기술 가능성 확인

### Phase 1 (2026 Q3~Q4) — Walking Skeleton
- ttsc driver 완성 (hook, plugin dispatch)
- engine/metadata 완성
- engine/analyzer 기초 (primitive, object)
- engine/codegen/is.go — `typia.is<string>()` end-to-end

### Phase 2 (2027 Q1~Q2) — Validators 완성
- analyzer/union, intersection, recursive, generic
- codegen/is, assert, validate, equals
- typia test suite 절반 통과
- **ttsc v0.5 + typia-go v0.5 preview 공개**

### Phase 3 (2027 Q3~Q4) — JSON
- codegen/json_schema, json_stringify, json_parse
- OpenAPI 3.0/3.1/3.2
- typia v13 alpha

### Phase 4 (2028 Q1~Q2) — LLM MVP (차별점)
- codegen/llm_schema, llm_application, llm_controller
- AutoBE/Agentica 내부 전환
- **typia v13 stable 출시**

### Phase 5 (2028 Q3~Q4) — Misc + HTTP + Runtime 정리
- codegen/notations, misc, reflect, functional, http
- @typia/utils 런타임 분리 (TS 유지)

### Phase 6 (2029 Q1~Q2) — Specialized + v1.0
- codegen/random, protobuf
- 전체 통합 · 벤치마크 · 마이그레이션
- **typia v14 = Go native 전체 출시**

## 자원 전제

| 자원 | 최소 | 이상적 |
|---|---|---|
| samchon 시간 | 25h/주 (3년) | 40h/주 |
| Go 조력자 | 1인 Phase 1부터 | 2인 Phase 2부터 |
| 재정 | $1K/년 (서명) | $50K+/년 (조력자) |

Go 조력자 확보가 **시간표의 주 변수**. 확보 안 되면 Phase 2~6 50% 연장.

## 왜 지금인가

- 2026 Q3~Q4: tsgo GA → 이후 tsgonest가 NestJS 시장 확정 장악 가능
- 2027 전에 **ttsc+typia-go walking skeleton**이 있어야 시장 방어 가능
- Phase 0 spike를 더 미루면 **2년 복구 불가**

## 이 문서가 말하지 않는 것

- 이것은 "결정"이 아니다. 이것은 **유일한 길을 인정**하는 문서다.
- 변수는 "할 것인가"가 아니라 "얼마나 빨리·잘 할 것인가"다.

→ 다음 [05. 권장 경로 (개정)](05-recommended-path.md)
→ 패키지 포팅 상세: [16. Package Port Boundary](16-package-port-boundary.md)
