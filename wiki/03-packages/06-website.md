# website — 문서/플레이그라운드/블로그

> 위치: `website/`
> 책임: typia.io 사용자 대면 문서 사이트, 인-브라우저 playground, 블로그.

## 1. 기술 스택

- **Next.js 15.3.4** + `output: "export"` (정적 사이트)
- **Nextra 4.6.0** — `nextra-theme-docs` + `nextra-theme-blog`
- **MDX** — 마크다운 + React 컴포넌트
- **Rspack 1.0.0** — 브라우저용 TypeScript 컴파일러 번들 (`rspack.config.js`)
- **Monaco Editor** + `@rollup/browser` — 인-브라우저 편집/번들
- **Pagefind** — 정적 검색
- **TypeDoc** — 현재 website 기본 빌드에서는 분리됨 (`build:typedoc` 스크립트는 남아 있으나 `prebuild` 에서 호출하지 않음)

## 2. IA / 메뉴 (`src/content/docs/_meta.ts`)

```
🙋🏻‍♂️ Introduction
📦 Setup
⛲ Pure TypeScript                  ← 사상의 핵심
─────────
📖 Features
  ├─ Runtime Validators (validators/{is, assert, validate, functional, tags})
  ├─ Enhanced JSON (json/{schema, stringify, parse})
  ├─ LLM Function Calling (llm/{application, schema, http, json, structuredOutput})
  ├─ Protocol Buffer (protobuf/{message, decode, encode})
  ├─ Random Generator
  └─ Miscellaneous
─────────
🔗 Appendix
  ├─ Utilization (NestJS, tRPC, MCP, Vercel, LangChain, Hono)
  ├─ API Documents (TypeDoc)
  ├─ Benchmark (외부 GitHub)
  └─ dev.to Articles
```

각 기능별 3~5 페이지로 세분화. 코드 예제는 거의 모든 페이지에 TypeScript ↔ Compiled JS 비교 탭으로 제공.

## 3. 마케팅 메시지

홈페이지 (`docs/index.mdx:99-110`):

```
Only one line required, with pure TypeScript type
Runtime validator: 20,000x faster than class-validator
JSON serialization: 200x faster than class-transformer
LLM function calling harness: 6.75% → 100% accuracy
```

비교 대상: class-validator + @nestjs/swagger (Triple Duplicated DTO 비판), ajv, TypeBox, class-transformer.

## 4. "Pure TypeScript" 사상 (인용)

`docs/pure.mdx:12-24`:

> typia needs only one line with pure TypeScript type. You know what? Every other validator libraries need extra schema definition, that is different with pure TypeScript type.
>
> Those duplicated schema definitions are not only annoying, but also error-prone. If you take any mistake on the extra schema definition, such mistake can't be detected by TypeScript compiler.

핵심 차이: AOT(Ahead of Time) 컴파일 — 타입을 분석해 컴파일 타임에 검증/직렬화 코드 emit. 현재 공개 setup 문서의 기본 경로는 `typia setup` → `@typescript/native-preview` + `@typia/ttsc` + `typia/lib/ttsc/plugin` 이다.

## 5. 기능 문서 품질

| 기능       | 코드 예제                     | 깊이  |
| ---------- | ----------------------------- | ----- |
| Validators | 매우 풍부 (TS+JS)             | ★★★★  |
| JSON       | 풍부                          | ★★★★  |
| LLM        | 풍부                          | ★★★★  |
| Protobuf   | 있음                          | ★★★   |
| Random     | 있음                          | ★★★   |
| Tags       | 매우 풍부 (30+ 태그 카탈로그) | ★★★★★ |

특별히 우수: `pure.mdx` 3-탭 비교(class-validator vs ajv vs typia) + 컴파일된 JS 800줄, `setup.mdx` 8가지 환경별 가이드.

## 6. 블로그 (11개)

성능: "15,000x faster TypeScript Validator", "10x faster JSON stringify", "Express faster than Fastify", "V8 hidden class", ...
기술 심화: "Protocol Buffer of TypeScript", "Bun is up to 20x slower than Node.js"
생태계: "Good-bye and thanks to typescript-is", **"Function Calling Harness: 6.75% → 100%" (2026-03-26, AutoBe + Qwen)**

## 7. Playground 구현

`website/src/compiler/index.ts` — Web Worker:

1. `EmbedTypeScript` (브라우저용 TS 컴파일러)
2. `typia/lib/transform` compatibility entry (browser worker)
3. `tgrid` WorkerServer (RPC)
4. `RollupBundler` (esm.sh CDN)

3 모드: `compile / transform / bundle`.

현재 구현 메모:

- website playground는 npm에 배포된 구버전 typia compiler surface를 기준으로 동작한다.
- `@typia/core`, `@typia/transform`, `typia/lib/transform` 의존은 website 내부 브라우저 playground 호환 레이어다.
- 현재 repo 본체의 TS legacy transformer 제거 여부와 별개로, website는 구버전 typia 문서/데모를 재현하기 위해 해당 의존을 유지한다.

기본 스크립트:

```ts
const member: IMember = typia.random<IMember>();
const check = typia.is(member);
const json = typia.json.stringify(member);
const binary = typia.protobuf.encode(member);
```

## 8. 약점 / 개선 여지

| 항목                 | 현황                              | 개선안                                                |
| -------------------- | --------------------------------- | ----------------------------------------------------- |
| 벤치마크             | 외부 GitHub                       | 사이트 내 인터랙티브 차트                             |
| 마이그레이션 가이드  | 없음 (class-validator → typia 등) | 단계별 변환 가이드                                    |
| 고급 패턴            | 태그 사용법 위주                  | 커스텀 포매터/검증기 확장 예제                        |
| TypeDoc              | website 기본 빌드에서 분리        | TS7-ready TypeDoc lane 또는 별도 산출 파이프라인 정리 |
| 에러 메시지 카탈로그 | 일반론                            | 실제 메시지 + 해결법                                  |
| Playground 공유      | URL 공유 미지원                   | gist/pastebin 통합                                    |
| LLM 다중 공급자      | OpenAI 위주                       | Anthropic/Google/Groq/Ollama 예제                     |

## 9. 주요 페이지

| 파일                                                        | 책임                                                                         |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `src/content/index.mdx`                                     | 홈, HomeHeroMovie / HomeCompilationMovie                                     |
| `src/content/docs/pure.mdx`                                 | 핵심 철학, 3-라이브러리 비교, 컴파일 시각화                                  |
| `src/content/docs/setup.mdx`                                | 현재 toolchain 설정 (`typia setup`, `@typia/ttsc`, bundler guide, NX caveat) |
| `src/content/docs/validators/{is,assert,validate,tags}.mdx` | 검증 핵심                                                                    |
| `src/content/docs/llm/application.mdx`                      | `typia.llm.application<App>()`, ILlmApplication 구조                         |
| `src/content/docs/random.mdx`                               | 타입 분석 기반 랜덤, IRandomGenerator 커스텀                                 |
| `src/content/docs/utilization/nestjs.mdx`                   | Nestia 통합, @TypedBody/@TypedRoute                                          |
| `src/app/(docs)/playground/page.tsx`                        | Playground 진입                                                              |
| `src/compiler/index.ts`                                     | Worker 진입점                                                                |
| `src/components/playground/SourceEditor.tsx`                | Monaco 래퍼                                                                  |
| `rspack.config.js`                                          | 브라우저용 TS 컴파일러 번들                                                  |

## 핵심 통찰

웹사이트는 **이론(사상) + 실용(playground) 균형**이 매우 우수하다. 다만 현재 playground는 native host의 대표 구현이 아니라 browser compatibility lane 이라는 점을 문서에서 더 분명히 해야 한다. 다음 단계로 (a) site-native lane 과 browser lane 구분 표기, (b) class-validator/zod 마이그레이션 가이드, (c) Anthropic/Gemini 등 LLM 공급자별 워크플로 문서, (d) playground 공유 URL이 효과 큼.
