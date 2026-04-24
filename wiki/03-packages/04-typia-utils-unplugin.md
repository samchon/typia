# packages/typia, packages/utils, packages/unplugin

## A. packages/typia — 사용자 진입 모듈

### 공개 API 표면

- 기본 검증: `is`, `assert`, `assertGuard`, `validate`, `equals`, `random`, factory 계열
- namespace: `json`, `llm`, `protobuf`, `misc`, `notations`, `reflect`, `functional`, `http`
- CLI: `typia setup`, `typia generate`
- plugin entry: `typia/lib/transform`

### 현재 wrapping 구조

- `packages/typia/src/transform.ts` 가 `@typia/ttsc.definePlugin()`으로 native plugin을 선언한다.
- `typia/lib/transform` export는 native plugin entry로 유지된다.
- `TypiaProgrammer` legacy alias도 제거되었다.
- 메인 패키지는 사용자 facing API, 런타임 헬퍼, CLI, native plugin entry만 들고 간다.

### 빌드

- `ttsc → rollup` 순으로 `lib/` 생성
- Dual CJS+ESM
- workspace dependency: `@typia/interface`, `@typia/ttsc`, `@typia/utils`
- external dependency: `@standard-schema/spec`, `commander`, `inquirer`, `randexp`
- peer dependency: `@typescript/native-preview`

## B. packages/utils — 런타임 헬퍼 + 변환 유틸

- `converters/` — `LlmSchemaConverter`, `OpenApiConverter`
- `http/` — `HttpError`, `HttpLlm`, `HttpMigration`
- `validators/` — OpenAPI/LLM schema validators
- `utils/` — `LlmJson`, `StringUtil`, `NamingConvention`, `Singleton`

## C. packages/unplugin — 번들러 통합 어댑터

### 진입점

- `core/index.ts` — `UnpluginFactory<Options>` 본체
- `core/typia.ts` — `@typia/ttsc.transform()` 호출
- `vite.ts | webpack.ts | rspack.ts | rollup.ts | esbuild.ts | farm.ts | rolldown.ts | bun.ts | next.ts` — 각 번들러 wrapper

### 메커니즘

- transform hook에서 typia가 포함된 TS 파일만 처리한다.
- `plugins: [{ transform: "typia/lib/transform" }]` 를 명시 주입한다.
- `@typia/ttsc.transform()` 이 반환한 JS string을 diff-match-patch-es + magic-string으로 sourcemap 처리한다.

### 옵션

- `include`, `exclude` — 파일 필터
- `tsconfig` — 자동/수동
- `typia` — native transform option bag
- `cache` — 빌드 캐시 ON/OFF
- `enforce` — 플러그인 순서

→ 다음 [05-llm-integrations.md](05-llm-integrations.md)
