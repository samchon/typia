# 02. 위협 지도 — 2026-04 실측

> 가설·추정 제거, 확인된 사실만.

## 위협 A: Microsoft TypeScript 7 (Corsa)

### 사실 [모두 출처 있음]
- 2026-03-23: TypeScript 6.0 정식 — "마지막 JavaScript 기반 버전" (Visual Studio Magazine)
- TypeScript 7.0 (Corsa) GA 목표: **2026 mid/late** (InfoWorld, Microsoft DevBlog)
- **Strada API (현행 JS) 미지원** (Microsoft DevBlog 공식)
- **in-process plugin 불가** — Go 런타임 다중 로드 불가 (jakebailey, Discussion #455)
- **공식 transformer API 없음** — Issue #516 "Post-7.0" milestone, dormant 2025-03~
- IPC 기반 API prototype 존재 — PR #711 머지 (andrewbranch). stdio + MessagePack + `libsyncrpc` Node 바인딩. **67 메소드 모두 read-only**.

### 추정 [출처: wiki 작성자]
- IPC API 1.0 stable: 2027 H1 이후
- 공식 transformer API: 빨라야 2027 H2, 현실적으로 2028+
- Editor 기본 전환: 2026 말 ~ 2027

### typia에 대한 함의
- ts-patch (현재 typia 의존) — tsgo에서 **구조적으로 불가능**
- 기존 unplugin-typia (Node ts.createProgram 기반) — tsgo에서 **부분 불가**
- typia가 tsgo 시대에 동작하려면 **새 경로 필수**

## 위협 B: tsgonest/tsgonest (직접 경쟁자 #1)

### 사실 [실측]
- GitHub: tsgonest/tsgonest
- License: MIT
- Release: **v0.13.5 (2026-04-15)**, 누적 **49 releases** [GitHub 확인]
- Stars: **13** (2026-04 시점, 아직 신생) [단, 성장 중]
- Forks: 3
- 언어 구성: **Go 71.5%, TypeScript 19.5%, MDX 8.2%**
- Go LOC: 실측 **~72,200** (typescript-go 제외, `find . -name "*.go" | xargs cat | wc -l`)
- 플랫폼: darwin/linux/win × arm64/x64
- typescript-go 연결: **git submodule + 10 shim 패키지** (`go:linkname`)
- patches 디렉토리 존재 (최소 patch)

### 기능 범위 [실측]
- ✅ Validation (is/assert/validate, 32 builtin formats)
- ✅ JSON serialization
- ✅ OpenAPI 3.2 (only 3.2)
- ✅ SDK generation (`tsgonest sdk`)
- ✅ Migration 자동화 (`tsgonest migrate --apply` — class-validator/typia/nestia → tsgonest)
- ❌ LLM function calling
- ❌ Protobuf
- ❌ Random generator
- ❌ 프레임워크 중립 (NestJS 전용)
- ❌ OpenAPI 3.0/3.1

### 경쟁 위협 평가
- **매우 빠른 릴리스 속도**: 49 릴리스 (1년 미만)
- **typia/nestia 사용자 직접 흡수**: migrate 명령 내장
- **typia 주요 시장(NestJS)** 정면 공략
- **차별점**: Go 네이티브 속도 (주장 ~10× tsc+ts-patch)

### 아직 약한 점
- 별 수 13 (2026-04) — 인지도 낮음
- LLM function calling / Protobuf / Random 미지원
- NestJS 전용 (Hono / Fastify / Express 부재)

## 위협 C: elliots/typical (경쟁자 #2, 약한)

### 사실 [실측]
- GitHub: elliots/typical (Elliot Shepherd)
- Release: **v0.3.1 (2026-02-23)** — 상대적 신생
- 언어: Go + TypeScript
- typescript-go 연결: shim (go:linkname + replace)
- 철학: typia와 거의 동일 ("TypeScript type safety at runtime")

### 기능 [실측]
- ✅ Runtime 검증 (함수 파라미터/반환 자동 주입)
- ✅ JSON.parse / stringify 자동 필터링
- ❌ JSON Schema
- ❌ LLM function calling
- ❌ Protobuf
- ❌ Random generator

### 차이점 (vs typia)
- **자동 주입** (명시적 `typia.is<T>()` 호출 없음)
- 기능 범위 좁음 — 검증 전용

### 위협 평가
- **현재 낮음** — 기능 제한적, 성숙도 낮음
- **미래 가능성** — Go 아키텍처 입증, 성장 시 명시호출 vs 자동주입 선호 경쟁

## 위협 D: 간접 위협 — 스키마 빌더 라이브러리

### Zod (v4)
- 42.4k stars [2026 기준 GitHub]
- 주간 다운로드 ~31M (v4 launch) ~ 139M (일부 집계) [npm-stat.com 확인 필요]
- v4: 타입 인스턴스화 25,000 → 175, 코어 번들 -57%, `.toJSONSchema()` 양방향
- **AI SDK / LangChain / MCP TS SDK / Hono / Drizzle 사실상 표준**

### Valibot / ArkType / TypeBox
- Valibot 1.37 kB (최소 번들) [Builder.io 측정]
- ArkType 2.x — "1:1 TypeScript syntax" DSL
- TypeBox — JSON Schema 1급

### 표준화 — Standard Schema v1.0
- Zod / Valibot / ArkType / Effect Schema / TypeBox가 모두 `~standard` 인터페이스 구현
- MCP TS SDK 2025-11-25부터 수용
- **typia는 아직 미구현** → 생태계 연결 약점

### 위협 평가
- **typia 직접 대체는 아님**
- 그러나 "Standard Schema를 받는 곳에 typia 못 끼움" → **간접 생태계 고립**

## 시장 시계 (2026-04 시점)

```
2026 Q2 (지금)    TS 6.0 stable + TS 7 preview nightly
                   tsgonest v0.13.x 주 2회 릴리스
                   typical v0.3.x 활발
                   typia v12.0.2 (2026-03-25 마지막 릴리스)

2026 Q3~Q4        TS 7.0 GA 예정
                   tsgonest 성장 가속 예상
                   typia의 TS 7 호환 대응 필수

2027 H1           TS 7 에디터 기본 전환 시작
                   ts-patch 경로 사실상 불가능
                   → typia가 여기까지 대응 못 하면 신규 유입 0

2027 H2           Microsoft 공식 IPC API stable 예상
                   tsgonest가 NestJS 생태계 상당 장악 예상

2028              공식 transformer API 등장 가능성 (불확실)
                   TS 6.x LTS 종료 권장 시점
```

## typia의 위기 요약

### 긴급도 (2026 Q2~Q4)
1. **tsgo 호환 경로 필요** — 없으면 2027년부터 신규 사용자 0
2. **tsgonest 대응** — 아무것도 안 하면 NestJS 시장 잃음
3. **Standard Schema 미지원** — 생태계 고립 심화

### 중요도 (2027~2028)
4. **Go 네이티브 성능 경쟁** — tsgonest 10× 주장에 대응 필요
5. **LLM 차별점 방어** — typia 해자

### 전략적 (2028+)
6. **TS 6.x LTS 종료 준비**
7. **Microsoft 공식 API 대응**

## 기회 요약

### typia만의 해자
1. **13 namespace 범위**: tsgonest 4개 기능만 커버
2. **LLM function calling**: tsgonest·typical 미구현
3. **Protobuf**: 바이너리 프로토콜 영역 독점
4. **프레임워크 중립**: tsgonest는 NestJS 전용
5. **OpenAPI 3.0/3.1/3.2 모두**: tsgonest는 3.2만
6. **AutoBE / Agentica / nestia 생태계**: 상업 레퍼런스
7. **5년 축적된 신뢰**: typia v12까지 안정 운영

### 선도자 후행자 이점
- tsgonest가 NestJS 시장 개척 → typia가 쉽게 따라잡기
- Go 포팅의 기술 위험을 typical / tsgonest가 먼저 검증
- shim / patch 두 모델이 이미 prior art

## 한 줄 결론

> **2026 Q2~Q4에 공식 입장·기술 경로 공개가 필요하다. 그때까지 아무것도 안 하면 2027년 시장 잃는다. 그러나 위협은 존재하되, 해자(LLM·다영역·범용)로 반격 가능.**

→ 다음 [03. 기술적 기반](03-technical-foundations.md)
