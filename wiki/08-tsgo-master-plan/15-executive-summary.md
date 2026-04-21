# 15. Executive Summary — 1 페이지 (v2 개정)

## 단 하나의 명제

> **typescript-go를 직접 정복하지 않는 한 typia에게 미래는 없다.**

ts-patch 경로는 tsgo에서 **구조적으로 불가능**하다. 다만 최종 제품 계약은 **tsgo 내장형 독자 compiler** 가 아니라 **공식 compiler + `@typia/ttsc` adapter** 다. TS 6.x LTS는 시간 매수일 뿐 해답이 아니고, current internal Go spike 는 그 사이를 메우는 bridge 다.

## 위기의 실체

- **Microsoft TS 7 (tsgo) GA** 2026 (공식 확정일 미정, mid/late 추정) — JS 모듈 변조 불가, in-process plugin 불가, 공식 transformer API 없음·Post-7.0 milestone
- **tsgonest** 이미 72K Go LOC / v0.13.5 / 49 releases — typia+nestia를 Go로 재구현한 경쟁자가 이미 작동 중
- **typical** — 또 다른 Go 기반 typia 클론이 실증 완료

→ 침묵은 죽음. typia가 Go로 건너가지 않으면 2~3년 내 outlier.

## 해답의 실체 (택일 아님)

**`@typia/ttsc` + `@typia/ttsx` + official compiler side-by-side + bridge/engine 동시 개발**:

- **`@typia/ttsc`** = typia monorepo 안에서 개발되는 현재 제품. 공식 compiler 위에 typia build/run surface 를 올리는 adapter.
- **`@typia/ttsx`** = `ts-node`/`tsx` 대체 runner. `@typia/ttsc` 코어를 재사용하는 별도 패키지.
- **official compiler** = 지금은 `@typescript/native-preview`, 나중에는 `typescript@7`.
- **bridge / typia engine** = upstream API 공백 동안 필요한 내부 구현. current spike 는 Go driver + Go engine.

개발 순서는 **공식 compiler reuse 계약을 먼저 고정하고**, 그 위에 bridge 와 engine 을 단계적으로 교체하는 방식이다.

## 패키지 포팅 경계 (Layer 원칙)

| Layer | 패키지 | 언어 | 이유 |
|---|---|---|---|
| L0 Types | `@typia/interface` | **TS 유지** | 0-runtime-dep 순수 타입. Go 불필요 |
| L1 Facade | `@typia/typia` | **TS 유지, 얇게** | 사용자가 import하는 marker API. 실체는 ttsc가 빌드 타임 치환 |
| L2 Engine | `@typia/core` + `@typia/transform` | **Go 포팅 필수** | MetadataFactory + 13 Programmers. ttsc 안으로 흡수 |
| L3 Runtime helpers | `@typia/utils` (런타임 부분) | **TS 유지** | emit된 JS에 import되는 헬퍼. Node/Edge/Bun 실행 |
| L4 Build | `@typia/ttsc` + `@typia/ttsx` + `@typia/unplugin` | **Go bridge + TS adapter/runner** | 사용자 빌드/실행 통합 |
| L5 LLM adapters | `@typia/mcp`, `langchain`, `vercel` | **TS 유지** | 외부 Node SDK peer 의존 |

상세: [16-package-port-boundary.md](16-package-port-boundary.md) (신규).

## 전환 후 최종 모습

```
@typia/typia           (TS, thin facade) ← 사용자 import 지점
  ↓  (typia.is<T> 마커)
@typia/ttsc            (현재 제품)        ← build adapter
  └─ ttsc build/check/transform
@typia/ttsx            (별도 제품)        ← runner
  └─ ttsx src/index.ts
       ↓  (reuse @typia/ttsc core)
official compiler      (`@typescript/native-preview`, later `typescript@7`)
       ↓
bridge / typia engine  (현재는 shim + Go spike, 장기적으로 공식 경계 재사용)
       ↓
사용자 .js 파일        (static, zero typia runtime) ← Edge runtime 호환
  + @typia/utils       (TS 헬퍼 import)
```

## Edge runtime 구조적 승리

typia emit은 `eval`/`new Function(code)` 사용 안 함 → **Cloudflare Workers, Vercel Edge, Deno Deploy에서 그대로 작동**. Ajv 같은 경쟁사는 crash.

## 즉시 착수 (2026 Q2, 6주)

1. **공식 입장문** — "ttsc + typia-go 개발 시작, typescript-go 직접 정복"
2. **ttsc Phase 0 spike** — typescript-go submodule + shim + 최소 patch + "hello from ttsc" 증명
3. **Standard Schema 어댑터** (2~3주) — 생태계 진입
4. **Edge runtime 홍보** (며칠)
5. **AI-native DX 템플릿** (llms.txt, Cursor rules, MCP server)
6. **Go 조력자 모집** — 혼자는 무리

## 타임라인

| 시점 | 마일스톤 |
|---|---|
| 2026 Q2 | `@typia/ttsc` 공식 출발, spike, 조력자 확보 공지 |
| 2026 Q4 | `@typia/ttsc` walking skeleton + Go engine analyzer 기초 |
| 2027 Q2 | `@typia/ttsc` preview = **typia v13 preview** |
| 2028 Q2 | typia 중심 제품으로 안정화 |
| 2029 Q2 | generic extraction 가능 여부 최종 판단 |

## 패키징 원칙

- 지금은 **`@typia/ttsc`**
- runner는 **`@typia/ttsx`**
- 설치 계약은 **공식 compiler + `@typia/ttsc` side-by-side**
- 나중에 공통 코어가 검증되면 **generic `ttsc`**
- 지금 repo 분리를 강행하지 않는다

## 사용자 약속 (불변)

- `typia.is<T>(input)` 한 자도 바뀌지 않는다
- `tsconfig.json plugins` 스키마 호환
- 빌드 명령어 `tsc` → `ttsc` (자동화로 한 번에)
- 실행 명령어 `tsx` / `ts-node` 류에 대응하는 **`@typia/ttsx` 의 `ttsx src/index.ts`** 를 제공한다
- 13 namespace 전부 유지
- LLM/Protobuf/Edge runtime 차별점 유지

## 가장 큰 리스크 3

1. **R8 samchon 번아웃** → 조력자 + 재정 + 범위 관리
2. **R3 tsgonest 선점** → 2028 Q2 LLM MVP 조기 출시로 방어
3. **R4 upstream API 미성숙** → current bridge 를 유지하되 공식 compiler side-by-side 계약을 먼저 고정

## 한 문장

> **지금은 `@typia/ttsc` 로 typia 빌드 코어를 먼저 살리고, `@typia/ttsx` 로 실행 표면을 분리한다. 설치 계약은 공식 compiler와의 side-by-side 로 고정하고, current Go spike 는 bridge 로만 본다.**

---

*이것은 이제 "옵션 중 하나를 선택"하는 문서가 아니다. 유일한 길을 어떻게 갈지의 문서다.*
