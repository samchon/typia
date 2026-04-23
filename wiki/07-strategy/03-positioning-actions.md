# 03. 포지셔닝 & 메시징 액션

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../08-tsgo-master-plan/) + [10-ecosystem/](../10-ecosystem/).


전략은 코드만이 아니라 **메시지**가 함께 움직여야 한다. typia가 다음 1~2년 외부에 어떻게 비춰져야 할지의 액션 아이템.

## 1. 4개 청중에게 4개 메시지

| 청중 | 메시지 |
|---|---|
| **신규 채택자** | "타입 한 번 = 검증·직렬화·스키마·LLM·랜덤 모두" |
| **zod 사용자** | "zod 자리에 그대로 들어가면서 200× 빠르고 LLM tool도 자동" |
| **AI/LLM 빌더** | "vibe coding 시대 type-first가 자연스럽다. AutoBE처럼 interface만 쓰면 끝" |
| **TS 7 / tsgo 우려자** | "Generate 모드로 transformer 없이 동작. tsgo 대응 트랙 진행 중" |

## 2. 홈페이지 영웅 섹션 재설계

### Before (현재)
```
20,000x faster than class-validator
200x faster than class-transformer
6.75% → 100% accuracy
```

### After
```
[Hero]
  Type once. Get everything.
  
  One TypeScript type. Validate, serialize, schema-ify,
  LLM-ify, randomize. Zero runtime cost.
  
  ┌──────────────────────────┐
  │ interface Member {        │
  │   id: string & tags...    │
  │   ...                     │
  │ }                         │
  │ ↓                         │
  │ typia.is<Member>          │
  │ typia.json.stringify      │
  │ typia.llm.application     │
  │ typia.json.schema         │
  │ typia.protobuf.encode     │
  │ typia.random              │
  └──────────────────────────┘
  
  [Get Started in 30 seconds] [Try in Playground]

[Sub-hero — Evidence]
  As a side effect: 20,000× class-validator,
  200× class-transformer, 6.75% → 100% LLM accuracy.

[Three pillars]
  ★ Pure TypeScript           ★ AI-native           ★ tsgo-ready
  Type is the source.         Type-first agent       Generate mode +
  Zero schema duplication.    workflow (AutoBE).     transformer mode.
```

→ 사상 → 증거 → 미래 안전 신호의 3단 구성.

## 3. 사상 페이지를 1급 위치로

현재 `docs/pure.mdx` (Setup 옆 메뉴)이 "Pure TypeScript" 사상의 본거지. 이를:

1. 홈페이지 hero에서 **직접 링크** ("Read the philosophy")
2. README.md 첫 단락에서 인용
3. blog series로 확장 ("Pure TypeScript: a Manifesto", "Pure TypeScript: How and Why")

## 4. AI/LLM 시대 메시징 — 별도 챕터 신설

`docs/llm/`은 기능 문서지만, **사상 차원의 글이 별도로 필요**:

`docs/philosophy/ai-native.mdx` (신규):
- 왜 type-first가 AI 친화적인가
- AutoBE / Agentica 사례로 검증
- vibe coding 시나리오 (Cursor + typia)
- "Schema-first vs Type-first in AI agent era"

→ Anthropic / OpenAI / Vercel devrel과 인터뷰/팟캐스트.

## 5. tsgo 입장문 — 신뢰 메시지

2026 Q2 발표 권장. 형식: typia.io 블로그 + GitHub Issue #1534 답변.

내용 골격:
1. 사실 인지: "TS 7이 옵니다. typia는 준비합니다."
2. 약속:
   - TS 6.x는 2028 말까지 LTS 지원
   - Generate 모드를 즉시 1급 시민으로 격상 (Track 2)
   - tsgo 안정화 시점에 native 어댑터 (Track 3)
3. 사상 약속: "Pure TypeScript 명제는 양보하지 않습니다."
4. 사용자 액션 가이드:
   - 기존 사용자: 변경 없음
   - 신규 사용자: TS 6.x 권장 (당분간)
   - 모험적 사용자: Generate 모드 베타 시도

→ 이 한 글이 신규 채택의 가장 큰 우려를 해소한다.

## 6. Standard Schema 어댑터 출시 마케팅

`~standard` 어댑터는 단순 기술 출시가 아니라 **메시징 이벤트**:
- "typia, now in the Standard Schema family"
- Zod / Valibot / ArkType / Effect Schema 옆에 typia 로고 노출 (standard-schema 리포)
- MCP / Vercel AI SDK / Next.js / Hono 통합 가이드 동시 출시
- dev.to / Hashnode 발표

## 7. 컨퍼런스 / 발표 캘린더

| 시기 | 행사 | 주제 |
|---|---|---|
| 2026 H2 | Korea JS Conference | "Pure TypeScript in the Age of AI" |
| 2026 H2 | dev.to series | "Why type-first beats schema-first for AI tools" |
| 2027 H1 | TSConf | "Surviving tsgo: a transformer library's perspective" |
| 2027 H1 | JSConf Korea / EU | "From typia to AutoBE: a typed agent stack" |
| 2027 H2 | Microsoft Build (가능하면) | tsgo session에 commenter / panel |

## 8. nestia / AutoBE / Agentica와의 통합 마케팅

samchon님 OSS 생태계 자체가 typia의 가장 강력한 사례:
- nestia: NestJS + typia 통합 → "타입 한 번으로 NestJS DTO/Swagger/검증"
- AutoBE: typia.llm.application 위에 만든 backend 자동 생성
- Agentica: agentic LLM 워크플로

→ 한 페이지에 묶어서 "typia ecosystem" 보여주기. 신뢰의 구체적 증거.

## 9. 마이그레이션 패스 — 친절한 길

신규 채택의 마지막 장벽은 "내가 zod에서 어떻게 옮기지?":

`migrations/zod-to-typia.mdx`:
- 같은 schema를 양쪽으로 보여주는 비교 표
- 자동 변환 도구 (codemod)
- 부분 전환 가능 (한 모듈만 typia, 나머지 zod)
- 함정과 해결책 (transform 함수 등)

`class-validator-to-typia.mdx`, `joi-to-typia.mdx` 동시 작성.

## 10. 한 줄로

> **사상을 1급으로 마케팅, 증거(속도/정확도)를 2급, AI 시대의 type-first를 새 챕터, tsgo 대응을 신뢰 메시지로.**

이 4개 축이 다음 18개월 메시징의 전부.

---

## 부록: 우선순위 표

| 액션 | 우선 | 일정 |
|---|---|---|
| 홈페이지 hero 재설계 | ★★★★★ | 2026 Q2 |
| 공식 tsgo 입장문 | ★★★★★ | 2026 Q2 |
| Standard Schema 어댑터 마케팅 | ★★★★★ | 2026 Q2 |
| 사상 페이지를 홈에서 직접 링크 | ★★★★ | 2026 Q2 |
| AI-native 사상 챕터 신설 | ★★★★ | 2026 Q3 |
| 마이그레이션 가이드 3종 | ★★★★ | 2026 Q3 |
| nestia/AutoBE/Agentica 묶기 | ★★★ | 2026 Q3 |
| 컨퍼런스 발표 신청 | ★★★ | 2026 H2 시작 |
| Anthropic/OpenAI devrel 인터뷰 | ★★ | 2027 H1 |

→ 모든 wiki 문서 완료. 인덱스로 돌아가기: [00-INDEX.md](../00-INDEX.md)
