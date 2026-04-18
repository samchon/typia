# packages/typia, packages/utils, packages/unplugin

## A. packages/typia — 사용자 진입 모듈

### 공개 API 표면 (요약)

기본 검증 (`module.ts:172-252, 515-779`):
- `is<T>`, `assert<T>`, `assertGuard<T>`, `validate<T>`
- `equals<T>`, `assertEquals<T>`, `validateEquals<T>` — extra property 거부
- `random<T>`, `createRandom<T>`
- `createIs<T>`, `createAssert<T>`, `createValidate<T>`, `createEquals<T>`, ...

서브 namespace:
- `typia.json.{schema, schemas, application, parse, stringify, assertParse, assertStringify}` (`json.ts:41-74`)
- `typia.llm.{controller, application, schema, parameters, structuredOutput}` (`llm.ts:54-74`)
- `typia.protobuf.{message, encode, decode, assertEncode, assertDecode}` (`protobuf.ts:35-72`)
- `typia.misc.{clone, prune, literals}` (`misc.ts:30-56`)
- `typia.notations.{camel, pascal, snake}`
- `typia.reflect.{schema, name}`
- `typia.functional.{assertFunction, assertParameters, assertReturn}`
- `typia.http.{formData, queryObject, headers, parameter}` (`http.ts:46-90`)

### Wrapping 구조

- `packages/typia/src/transform.ts` — 단순 re-export of `@typia/transform`.
- `package.json` exports에서 `./lib/transform` 별도 진입점 → ts-patch가 직접 참조.
- 메인 패키지는 **사용자 facing API + CLI**만 들고, 실제 transformer는 의존성으로 가져온다.

### 빌드

- Rollup 번들 (`config/rollup.config.mjs` 공유)
- `tsc → rollup` 순으로 lib/ 생성
- Dual CJS+ESM
- `@typia/core | @typia/transform | @typia/utils | @typia/interface`는 workspace dependency
- `@standard-schema/spec`, `commander`, `inquirer`, `randexp`는 외부 dep
- TypeScript는 peerDependency

### CLI (`packages/typia/src/executable/typia.ts`)

```
npx typia setup    [--manager npm|pnpm|yarn|bun] [--project tsconfig.json]
npx typia patch    # JSDoc parseAll 패치 (TypeScript 5.3+ 대응)
npx typia generate --input <dir> --output <dir>
```

#### `typia setup` 5단계
1. PackageManager 감지 (`detect`)
2. Inquirer 인터랙티브 입력
3. `typescript` + `ts-patch` 설치
4. `package.json.scripts.prepare = "ts-patch install"` (기존 "typia patch"는 제거)
5. `tsconfig.json.compilerOptions.plugins += [{ transform: "typia/lib/transform" }]` + strict 옵션 활성화 → `ts-patch install` 실행

지원 빌더:
- **ts-patch** (TypeScript 4.8 ~ 5.9) — 표준 경로
- **unplugin** (Vite/Webpack/Rspack/esbuild/Rolldown/Bun) — 별도 패키지

---

## B. packages/utils — 런타임 헬퍼 + 변환 유틸

### 모듈 구조
- `converters/` — `LlmSchemaConverter`, `OpenApiConverter`
- `http/` — `HttpError`, `HttpLlm`, `HttpMigration`
- `validators/` — `LlmTypeChecker`, `OpenApiTypeChecker` (V3, V3_1, SwaggerV2)
- `utils/` — `LlmJson`, `StringUtil`, `NamingConvention`, `ArrayUtil`, `MapUtil`, `Singleton`

### 런타임에 emit되는 헬퍼
- `TypeGuardError` (path/expected/value 포함)
- `_isFormatEmail`, `_isFormatUuid`, `_isFormatIpv4`, ...
- `_httpFormDataRead*`, `_httpQueryRead*`, `_httpParameterRead*`
- `_ProtobufReader`, `_ProtobufWriter`, `_ProtobufSizer`

→ 사용자가 `typia.is<T>()`를 부르면 위 헬퍼들이 자동 import 된다.

---

## C. packages/unplugin — 빌더 통합 어댑터

### 진입점
- `index.ts` — 옵션 타입 export
- `core/index.ts` — `UnpluginFactory<Options>` 본체 (`core/index.ts:39-150`)
- `vite.ts | webpack.ts | rspack.ts | rollup.ts | esbuild.ts | farm.ts | rolldown.ts | bun.ts | next.ts` — 각 번들러 wrapper

### ts-patch 우회 메커니즘 (`core/typia.ts:31-62`)
- `typia/lib/transform`을 직접 import하지 않고
- TypeScript Compiler API + `ts.transform()` + `ts.createPrinter()`로 **개별 파일 단위 변환**
- 파일별 변환 결과를 캐싱 (`Cache` 클래스)
- diff-match-patch-es로 sourcemap 생성

### 옵션 (`core/options.ts:7-78`)
- `include`, `exclude` — 파일 필터
- `tsconfig` — 자동/수동
- `typia` — `ITransformOptions` 패스스루
- `cache` — 빌드 캐시 ON/OFF
- `enforce` — 플러그인 순서 (pre/post)

---

## 주요 파일 한 줄 설명

### packages/typia
- `index.ts` — 모듈 re-export
- `module.ts` — assert/is/validate/random/factory 함수
- `json.ts | llm.ts | protobuf.ts | misc.ts | notations.ts | reflect.ts | functional.ts | http.ts` — 각 namespace
- `TypeGuardError.ts` — path/expected/value 에러
- `transform.ts` — `@typia/transform` re-export
- `executable/typia.ts` — CLI dispatcher
- `executable/TypiaSetupWizard.ts` — setup 본체
- `executable/TypiaPatchWizard.ts` — JSDoc parseAll 패치
- `executable/TypiaGenerateWizard.ts` — generate 명령
- `executable/setup/PluginConfigurator.ts` — tsconfig 수정

### packages/utils
- `index.ts` — 컨버터/HTTP/검증기 re-export
- `utils/LlmJson.ts` — LLM 결과 lenient 파싱

### packages/unplugin
- `core/index.ts` — UnpluginFactory 본체
- `core/typia.ts` — TS Compiler API로 변환
- `core/options.ts` — 옵션 정의/해석
- `vite.ts, webpack.ts, ...` — 번들러별 thin wrapper

→ 다음 [05-llm-integrations.md](05-llm-integrations.md)
