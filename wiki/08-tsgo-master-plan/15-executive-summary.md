# 15. Executive Summary — 1 페이지 (v2 개정)

## 단 하나의 명제

> **typescript-go를 직접 정복하지 않는 한 typia에게 미래는 없다.**

ts-patch 경로는 tsgo에서 **구조적으로 불가능**하다. 대체 경로는 없다. TS 6.x LTS는 시간 매수일 뿐 해답이 아니다. **ttsc(driver)와 typia-go(engine)는 양자택일이 아니라 한 몸이다** — ttsc는 tsgo 파이프라인의 진입점, typia-go는 그 안에서 실행되는 엔진. 한 Go 바이너리에 통합.

## 위기의 실체

- **Microsoft TS 7 (tsgo) GA** 2026 (공식 확정일 미정, mid/late 추정) — JS 모듈 변조 불가, in-process plugin 불가, 공식 transformer API 없음·Post-7.0 milestone
- **tsgonest** 이미 72K Go LOC / v0.13.5 / 49 releases — typia+nestia를 Go로 재구현한 경쟁자가 이미 작동 중
- **typical** — 또 다른 Go 기반 typia 클론이 실증 완료

→ 침묵은 죽음. typia가 Go로 건너가지 않으면 2~3년 내 outlier.

## 해답의 실체 (택일 아님)

**ttsc + typia-go를 처음부터 함께 만든다**:

- **ttsc** = typescript-go에 hook을 꽂는 드라이버. tsgonest/tsgolint/effect-tsgo가 검증한 `shim + 최소 patch` 하이브리드.
- **typia-go** = ttsc 안에서 실행되는 엔진. MetadataFactory + 13 Programmers의 Go 재구현.

두 프로젝트는 **동일 Go 바이너리** 내에서 결합 가능. 개발 순서는 **ttsc 스캐폴딩이 typia-go의 뼈대를 우선 담고, typia-go가 채워지면서 완성**.

## 패키지 포팅 경계 (Layer 원칙)

| Layer | 패키지 | 언어 | 이유 |
|---|---|---|---|
| L0 Types | `@typia/interface` | **TS 유지** | 0-runtime-dep 순수 타입. Go 불필요 |
| L1 Facade | `@typia/typia` | **TS 유지, 얇게** | 사용자가 import하는 marker API. 실체는 ttsc가 빌드 타임 치환 |
| L2 Engine | `@typia/core` + `@typia/transform` | **Go 포팅 필수** | MetadataFactory + 13 Programmers. ttsc 안으로 흡수 |
| L3 Runtime helpers | `@typia/utils` (런타임 부분) | **TS 유지** | emit된 JS에 import되는 헬퍼. Node/Edge/Bun 실행 |
| L4 Build | `@typia/ttsc` (신규) + `@typia/unplugin` | **Go 본체 + TS 얇은 launcher** | 사용자 빌드 통합 |
| L5 LLM adapters | `@typia/mcp`, `langchain`, `vercel` | **TS 유지** | 외부 Node SDK peer 의존 |

상세: [16-package-port-boundary.md](16-package-port-boundary.md) (신규).

## 전환 후 최종 모습

```
@typia/typia           (TS, ~2K LOC)     ← 사용자 import 지점
  ↓  (typia.is<T> 마커)
@typia/ttsc            (Go binary + Node launcher)  ← 빌드 타임 치환
  ↓  (typescript-go 호출)
typescript-go          (submodule + shim + 최소 patch)
  ↓  (metadata extraction)
typia-go engine        (Go, 100~150K LOC)  ← MetadataFactory + Programmers
  ↓  (emit)
사용자 .js 파일        (static, zero typia runtime)  ← Edge runtime 호환
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
| 2026 Q2 | 공식 출발, spike, Go 조력자 확보 공지 |
| 2026 Q4 | ttsc walking skeleton + typia-go analyzer 기초 |
| 2027 Q2 | ttsc 0.5 + typia-go alpha (validators + json) = **typia v13 preview** |
| 2028 Q2 | typia-go MVP (+ LLM) = typia v13 stable |
| 2029 Q2 | typia-go v1.0 (13 namespace 전체) = **typia v14** |

## 사용자 약속 (불변)

- `typia.is<T>(input)` 한 자도 바뀌지 않는다
- `tsconfig.json plugins` 스키마 호환
- 빌드 명령어 `tsc` → `ttsc` (자동화로 한 번에)
- 13 namespace 전부 유지
- LLM/Protobuf/Edge runtime 차별점 유지

## 가장 큰 리스크 3

1. **R8 samchon 번아웃** → 조력자 + 재정 + 범위 관리
2. **R3 tsgonest 선점** → 2028 Q2 LLM MVP 조기 출시로 방어
3. **R4 Go linkname 1.27+ 제약** → typescript-go와 handshake 협약

## 한 문장

> **ttsc와 typia-go를 동시에 만들어 typescript-go를 정복한다. 사용자 API는 불변, 구현은 Go로 이주, 3년 뒤 typia는 tsgo 시대의 de-facto 자리를 지킨다.**

---

*이것은 이제 "옵션 중 하나를 선택"하는 문서가 아니다. 유일한 길을 어떻게 갈지의 문서다.*
