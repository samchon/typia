# 01. tsgo 대응 전략기획서

> 대상 독자: typia 메인테이너(samchon).
> 목적: TypeScript 7.0 (Corsa, Go 포팅) 전환에 typia가 사상을 지키며 살아남는 단계별 시나리오.
> 기준 시점: 2026-04. 자세한 사실 자료는 [05-research/03-tsgo-status.md](../05-research/03-tsgo-status.md).

---

## Executive Summary (1분 읽기)

1. **위협의 실체**: TS 7.0은 in-process plugin을 지원하지 않는다 (IPC만). ts-patch와 typia의 현재 transformer 모델은 **그대로는 동작 불가**. 시기는 2026 Q3~Q4 GA, transformer-friendly API는 빨라야 2027 하반기.
2. **typia의 구조적 자산**: P3·P4 원칙(public API only + import 경로 식별) + MetadataSchema 자체 IR 덕에 **core 80%는 그대로 살아남는다**. 새로 만들 것은 transformer 어댑터 + 빌드 통합 부분.
3. **3-track 동시 추진**:
   - **Track 1 (TS 6.x LTS 유지)** — 기존 사용자 안정 운영 (~2027 말까지)
   - **Track 2 (Generate 모드 대중화)** — `typia generate`를 1급 시민으로 격상해 **transformer 없이 typia를 쓸 수 있는 보조 경로** 확보. 즉시 시작 가능, tsgo 대응의 베이스.
   - **Track 3 (tsgo IPC 어댑터)** — tsgo API 안정화 시점에 새 transformer 어댑터 구현
4. **사상 양보 없음**: 위 3-track 모두 사상(Pure TypeScript / 자체 IR / 0 외부 런타임)을 그대로 유지.
5. **타임라인**: 2026 H2 Track 2 출시, 2027 H1 Track 3 prototype, 2027 H2 production.

---

## 1. 위협 모델 — 무엇이, 언제, 얼마나

### 1.1 사실 정리 (출처: [05-research/03-tsgo-status.md](../05-research/03-tsgo-status.md))

| 사실 | 증거 |
|---|---|
| TS 7.0 GA 2026 mid/late | InfoWorld, MS DevBlog |
| 기존 Strada API 미지원 | DevBlog 공식 |
| in-process plugin 불가 | Discussion #455, jakebailey |
| Transformer Plugin milestone "Post-7.0" | Issue #516 |
| Microsoft 공식 transformer 답변 없음 | Issue #516 dormant |
| ts-patch maintainer 응답 없음 | Issue #181 |
| typia issue 1534 공식 플랜 없음 | typia repo |

### 1.2 위협의 시간축

```
2026 Q2~Q3   TS 6.0 안정 (현재). typia 정상 동작.
2026 Q3~Q4   TS 7.0 GA. opt-in VS Code 확장. ts-patch 호환 안 됨.
                ⚠️ 신규 사용자가 TS 7로 시작하면 typia setup 불가능.
2027 H1      TS 7이 에디터 기본값으로 전환되기 시작.
                ⚠️ TS 6.x는 LTS이지만 신규 프로젝트는 TS 7 우선.
2027 H2~     Microsoft가 IPC API 1.0 stable 발표 (예측).
                Transformer Plugin 정식 지원 (예측, 빠르면).
2028~        ts-patch / typia가 tsgo 어댑터 출시 (예측).
```

이 사이의 **공백 1년 (2027년)** 이 가장 위험하다. typia 사용자는 TS 6.x에 묶여 있게 되고, 신규 사용자는 typia를 시도하지 못한다.

### 1.3 영향 범위 — typia 패키지별 충격

[02-architecture/03-package-graph.md](../02-architecture/03-package-graph.md)에 따라 layer별 충격:

| Layer | 패키지 | tsgo 영향 |
|---|---|---|
| 0 | interface | **0** — 순수 타입, TS Compiler API 무관 |
| 1 | utils | **0** — 런타임 헬퍼 |
| 2 | core | **거의 0** — TypeChecker public API만 사용. 이름과 시그니처가 비슷하면 어댑터로 흡수 가능 |
| 3 | transform | **100%** — tsc TransformerFactory 자체가 사라짐. 새로 작성 |
| 4a | typia (CLI) | **30%** — `typia setup` 명령이 ts-patch 대신 새 빌드 통합 가이드 |
| 4b | unplugin | **40%** — `ts.transform()` 호출 부분이 IPC로 변경 |
| 4c | mcp/langchain/vercel | **0** — TS Compiler 의존 없음 |

**관찰**: 핵심 로직(core IR + Programmer)은 살아남는다. **다시 만들 부분은 빌드 통합 어댑터(transform + unplugin) 중 ~30% 분량**.

이게 typia가 tsgo를 견딜 수 있는 구조적 이유다 — 사상이 만든 분리가 미래 자산이 됐다.

---

## 2. 전략 옵션 분석 (4가지 길)

### 옵션 A. "tsgo가 IPC API 안정화할 때까지 기다린다" — **소극적**

- 비용: 0 (당분간)
- 위험: 2027년 1년 동안 신규 사용자 0. 기존 사용자도 TS 7 마이그레이션을 못 함. 이 사이 zod/valibot/arktype에 자리 빼앗김.
- 평가: **권장 안 함**. 사상이 살아도 사용자가 옮겨가면 의미 없음.

### 옵션 B. "ts-patch 의존 끊고 unplugin만 강화" — **부분적**

- 비용: unplugin 1급 시민화 + TS 6.x LTS 운영
- 위험: tsgo가 unplugin도 부분적으로 깨뜨림 (typescript 모듈의 동기 transform API가 사라지면)
- 평가: **A4(unplugin 1급 시민화)와 결합해야 일부만 효과**. 단독으로는 부족.

### 옵션 C. "Generate 모드를 1급 시민화" — **사상 보존 + 새 경로** ⭐

핵심 아이디어:
```
[빌드 시 1회] typia generate
    interface 파일 분석 → 검증/직렬화/스키마 함수가 들어있는 .generated.ts 파일 emit
    
[사용자 코드]
    import { isMember, validateMember } from "./member.generated";
    isMember(input);  // typia.is<Member>(input) 대신
```

**왜 이게 답인가**:
- transformer 의존이 사라짐 → tsc / tsgo / esbuild / swc 모두 동작
- generate된 코드는 plain TS — 어떤 빌드 파이프라인에서든 그냥 코드
- 사상 양보 0 — 여전히 typia가 코드를 emit, 여전히 Pure TypeScript에서 출발
- **기존 transformer 모드와 공존** — 사용자가 선택

**비용**: 
- `packages/typia` CLI에 generate 모드 강화 (이미 존재하지만 보조)
- watch 모드, partial regeneration, IDE 통합
- 마이그레이션 가이드 (transformer 사용자 → generate 사용자)

**평가**: ⭐⭐⭐⭐⭐. tsgo 대응 + 일반 사용자 setup 마찰 ↓ + ts-node·esbuild·swc 환경 모두 지원. **즉시 시작 가능**.

### 옵션 D. "tsgo IPC 어댑터 직접 구현" — **장기 메인 트랙**

- 비용: tsgo API 안정화까지 대기 + 어댑터 prototype + production 검증 (1년~)
- 위험: tsgo API가 늦게 안정화될수록 비용 증가
- 평가: ⭐⭐⭐⭐ — **장기에서 필요**. 단기에서는 옵션 C가 시간 매수.

### 결론: **C + D 동시 추진** + 옵션 B(unplugin 1급 시민화)는 자연스럽게 따라옴.

---

## 3. 3-Track 로드맵

### Track 1: TS 6.x LTS 유지 (~2027 말)

**목표**: 기존 사용자 안정 운영, 사상 변경 없음.

| 시점 | 작업 |
|---|---|
| 2026 H2 | TS 6.0 호환성 명시 (이미 호환). buy time. |
| 2026~2027 | 보안 패치 + 버그 수정만. 새 기능 최소화. |
| 2027 말 | "TS 6.x 지원 종료 예정" 공지 (1년 전 통지) |
| 2028 말 | TS 6.x 지원 종료. transformer 모드 deprecation. |

**비용**: 운영 부담만, 신규 개발 0.

### Track 2: Generate 모드 1급 시민화 (즉시~2026 H2)

**목표**: transformer 없이도 typia를 쓸 수 있는 경로 확보. tsgo 대응의 base.

#### 2-A. CLI 재설계 (2026 Q2)

```
npx typia generate
  --input  src/             # interface 파일이 있는 곳
  --output src/             # .generated.ts emit 위치
  --watch                   # watch 모드
  --hash                    # 변경 감지 (cache)
```

기존 `packages/typia/src/executable/TypiaGenerateWizard.ts`를 강화. 다음 추가:
- 파일 단위 partial regeneration (변경된 interface만)
- watch 모드 (chokidar)
- 변경 hash로 cache invalidation
- co-located output (`Member.ts` → `Member.generated.ts`) 옵션
- aggregate output (`src/typia.generated.ts` 한 파일) 옵션

#### 2-B. API 설계 — 자연스러운 import 경험

```ts
// member.ts
export interface Member { ... }

// member.generated.ts (typia generate가 emit)
import type { Member } from "./member";
export const isMember: (input: unknown) => input is Member = ...;
export const assertMember: (input: unknown) => Member = ...;
export const validateMember: (input: unknown) => IValidation<Member> = ...;
export const stringifyMember: (input: Member) => string = ...;
// ...

// 사용자 코드
import { isMember, validateMember } from "./member.generated";
if (!isMember(input)) ...;
```

**원칙**: 한 interface에서 사용자가 원하는 모든 함수 emit. 사용자는 `typia.config.ts`로 어떤 함수를 emit할지 선택.

```ts
// typia.config.ts
export default {
  generate: {
    is: true,
    assert: true,
    validate: true,
    json: { stringify: true, parse: true, schema: true },
    llm: { schema: ["chatgpt", "claude"] },
    protobuf: false,
    random: process.env.NODE_ENV !== "production",
  },
};
```

#### 2-C. IDE 통합 (2026 Q3)

- `typia.generated.ts` 파일은 자동 생성이라는 표시 (lint suppression, gitignore 추가, 또는 git tracked w/ banner)
- VSCode extension: interface 변경 시 generate 자동 트리거
- ts-node / tsx와 호환 (generate된 코드는 plain TS)

#### 2-D. 마이그레이션 가이드 (2026 Q3)

`docs/migrations/transformer-to-generate.mdx`:
- 기존 `typia.is<T>(input)` 사용처 → `import { isT } from "...generated"`
- codemod 제공 (jscodeshift)
- 두 모드 공존 가능 (점진 마이그레이션)

#### 2-E. 검증 & 출시 (2026 H2)

- typia 자체 dogfooding (typia 코드베이스 안에서 generate 모드 사용)
- nestia에 generate 모드 옵션 추가
- AutoBE / Agentica가 generate 모드로 전환
- v13 메이저 릴리스 — generate가 1급 시민

**산출물**:
- `typia generate`가 transformer와 동등한 1급 경로
- 사용자가 어떤 빌드 환경에서도 typia 사용 가능
- tsgo 시대를 위한 base layer

### Track 3: tsgo IPC 어댑터 (2027 H1~)

**목표**: tsgo API 안정화 시점에 새 transformer 어댑터 구현. 옵션 D.

#### 3-A. tsgo API 모니터링 (지속)

- `microsoft/typescript-go` Issue #516 / Discussion #455 / 새 PR
- `@typescript/native-preview` nightly 추적
- 분기마다 typia 호환 상태 점검

#### 3-B. Prototype (2027 H1)

tsgo API가 다음을 노출하기 시작하면 (현재 부분 구현):
- `Project.getSourceFile(path)`
- `getTypeAtLocation(node)`
- `getPropertiesOfType(type)`
- `getApparentType(type)`

→ MetadataFactory를 IPC 호출로 옮김. **MetadataSchema는 그대로** (P1 효과).

#### 3-C. 빌드 통합 재설계 (2027 H1~H2)

tsgo가 transformer를 직접 지원하지 않으면 두 경로:
1. **Out-of-process codegen**: tsgo로 type check → 별도 typia 프로세스가 IPC로 type 정보 받아 generate (Track 2 위에 자연스럽게)
2. **Build tool plugin**: vite/webpack/rspack의 transform 훅에서 tsgo IPC를 부르는 typia plugin

대부분 1번이 단순 + 안정적. 2번은 watch 성능을 위해 보조.

#### 3-D. Production 검증 (2027 H2)

- nestia / AutoBE / Agentica 에서 tsgo 모드 dogfooding
- 벤치마크: tsgo 모드 vs TS 6.x 모드 (속도, 빌드 시간)
- 호환성 매트릭스 (TS 6.x / TS 7 / esbuild / swc / vite / webpack)

### Track 통합 그림

```
2026 H1 ─ 현재 상태
   │
2026 H2 ─ Track 2 (Generate 모드 1급) 출시
   │
2027 H1 ─ Track 3 prototype (tsgo IPC)
   │
2027 H2 ─ Track 3 production
   │
2028 ── ts-patch transformer 모드 deprecation 예고
   │
2028 말 ─ TS 6.x 지원 종료. typia v14 (tsgo native).
```

---

## 4. 사상 일관성 점검

전략이 [01-philosophy/](../01-philosophy/)의 8가지 원칙(P1~P8)을 깨지 않는가:

| 원칙 | Track 1 | Track 2 | Track 3 |
|---|---|---|---|
| P1 IR 입력 | ✅ | ✅ MetadataSchema 그대로 | ✅ |
| P2 Programmer 패턴 | ✅ | ✅ | ✅ |
| P3 ts.factory only | ✅ | ✅ | ✅ |
| P4 import 경로 식별 | ✅ | N/A (generate에선 직접 호출) | ✅ |
| P5 얇은 어댑터 | ✅ | ✅ | ✅ 어댑터만 새로 |
| P6 캐시 | ✅ | ✅ | ✅ |
| P7 path 합성 | ✅ | ✅ | ✅ |
| P8 N표준 동시 도출 | ✅ | ✅ | ✅ |

→ **사상 양보 0**. 모든 Track이 사상을 지키며 적용 범위만 넓힌다.

---

## 5. 리스크 매트릭스 + 대응

| 리스크 | 가능성 | 영향 | 대응 |
|---|---|---|---|
| Microsoft가 transformer plugin 끝내 미지원 | 중 | 큼 | Track 2가 fallback이라 typia는 견딤 |
| tsgo IPC API가 typia 필요 기능 미노출 | 중 | 큼 | Track 2가 보조 경로. Microsoft에 기능 요청 |
| ts-patch 사실상 죽음 | 높 | 중 | Track 2 + unplugin이 우회 |
| TS 6.x 지원 조기 종료 | 낮 | 큼 | LTS 약속, 1년 전 통지 |
| AI SDK / MCP가 typia 호환 끊음 | 낮 | 중 | A1 Standard Schema 어댑터로 차단 |
| 신규 경쟁자(ts-runtime-checks 부활, 새 라이브러리) | 중 | 중 | 사상 마케팅 + AI 통합 차별점 |
| 메인테이너 번아웃 | 중 | 매우 큼 | 핵심 컨트리뷰터 1~2명 양성 |

---

## 6. 의사결정 시점 표

| 시점 | 의사결정 |
|---|---|
| **2026 Q2** | Track 2 시작 여부 (권장: 시작) |
| 2026 Q4 | TS 7.0 GA 후 typia 호환 상태 발표 |
| 2027 Q1 | tsgo API 안정도에 따라 Track 3 본격 시작 여부 |
| 2027 Q3 | TS 6.x 지원 종료 시기 공지 |
| 2028 Q1 | typia v14 (tsgo native) 출시 여부 |

---

## 7. 외부 커뮤니케이션 전략

### 7-A. 공식 입장문 (2026 Q2)

다음 내용 명시:
1. typia는 TS 6.x를 적어도 2028 말까지 지원
2. Track 2 (Generate 모드)를 즉시 시작
3. Track 3 (tsgo)은 Microsoft API 안정화에 맞춰 진행
4. **사상 양보 없음** — Pure TypeScript 명제 유지

배포 채널: typia.io 블로그, GitHub Issue #1534 답변, Twitter/X, dev.to.

### 7-B. Microsoft에 기능 요청

- Issue #516에 typia 사용 사례 + 요구사항 코멘트
- ts-morph dsherret과 협력해 공동 청원
- VS Code TypeScript 팀에 직접 컨택 (Daniel Rosenwasser)

요구 핵심:
1. `getTypeAtLocation`, `getPropertiesOfType`, `getApparentType`, `getIndexInfoOfType` 등 핵심 TypeChecker API 노출
2. 동기 API 유지 (또는 await 가능한 형태)
3. 변환된 AST 주입 메커니즘 (custom emit)

### 7-C. 컨퍼런스 / 발표

- TSConf 2026 발표 신청 ("Pure TypeScript in the Age of Tsgo")
- Korea JS Conference, dev conferences
- AutoBE / Agentica 사례와 묶어서 발표

---

## 8. 한 줄 결론

> **즉시 시작할 것: Track 2 (Generate 모드 1급 시민화). 이 한 결정이 typia의 다음 5년을 결정한다.**

Track 2가 있으면:
- tsgo가 어떻게 결정나든 typia는 살아남는다
- ts-patch가 죽어도 typia는 살아남는다
- 신규 사용자의 setup 마찰이 사라진다 (transformer 옵션이지만 generate가 default)
- esbuild / swc / Bun 환경에서도 typia 사용 가능
- 사상 양보 0

Track 2가 없으면:
- 2027년 신규 사용자 0, 기존 사용자 위축
- tsgo API 결정에 100% 종속
- 사상은 살아도 사용자가 옮겨감

→ 다음 [02. 종합 로드맵](02-roadmap.md)에서 모든 액션 아이템을 시간축에 배치.
