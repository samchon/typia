# `@typia/unplugin` 패키지 추가 계획

## 개요

`unplugin-typia` 프로젝트의 소스 코드를 본 typia 모노리포에 `@typia/unplugin` 패키지로 통합합니다.

## 핵심 원칙: pnpm 호환성을 위한 typia 단일 의존성

pnpm의 strict한 의존성 관리 때문에 `@typia/transform`이나 `@typia/core`를 직접 의존하면 사용자 환경에서 문제가 발생합니다. 따라서:

> **모든 import는 오직 `typia` 패키지를 통해서만 나가야 합니다.**

### 현재 typia의 re-export 구조

```
typia/
├── src/index.ts         → export * from "./module"
├── src/module.ts        → export * from "./re-exports" (IValidation, tags 등)
├── src/re-exports.ts    → @typia/interface에서 타입들 re-export
└── src/transform.ts     → @typia/transform의 transform 함수 re-export (default)
```

**중요 발견:**
- `typia/lib/transform.js` 경로는 이미 존재하며, `@typia/transform`을 re-export함
- `ITransformOptions`는 현재 `typia`에서 re-export되지 않음 → **추가 필요**

## 1. typia 패키지에 추가할 re-exports

`packages/typia/src/re-exports.ts`에 다음 항목 추가:

```typescript
export {
  // ... 기존 exports ...

  // transform (for @typia/unplugin)
  ITransformOptions,
  ITypiaContext,
} from "@typia/core";
```

또는 새로운 파일 `packages/typia/src/transform-types.ts` 생성:

```typescript
export type { ITransformOptions, ITypiaContext } from "@typia/core";
```

그리고 `packages/typia/src/transform.ts` 수정:

```typescript
import transform from "@typia/transform";
export { ITransformOptions, ITypiaContext } from "@typia/core";

export default transform;
export { transform };  // named export도 추가
```

## 2. 디렉토리 구조

```
packages/
└── unplugin/                         # 새로운 패키지
    ├── src/
    │   ├── index.ts                  # 메인 엔트리포인트 (unplugin 팩토리)
    │   ├── api.ts                    # 퍼블릭 API
    │   ├── core/
    │   │   ├── index.ts              # unplugin 팩토리 & 변환 파이프라인
    │   │   ├── types.ts              # Tagged 타입 시스템
    │   │   ├── options.ts            # 설정 스키마 & 옵션 처리
    │   │   ├── typia.ts              # Typia 변환 로직 (핵심)
    │   │   ├── cache.ts              # MD5 해싱 기반 파일 캐싱
    │   │   ├── utils.ts              # 로깅 및 런타임 감지
    │   │   └── languages/
    │   │       └── svelte.ts         # Svelte 전처리
    │   ├── vite.ts                   # Vite 플러그인
    │   ├── webpack.ts                # Webpack 플러그인
    │   ├── rollup.ts                 # Rollup 플러그인
    │   ├── esbuild.ts                # esbuild 플러그인
    │   ├── next.ts                   # Next.js 래퍼
    │   ├── bun.ts                    # Bun 플러그인
    │   ├── rspack.ts                 # Rspack 플러그인
    │   ├── farm.ts                   # Farm 번들러
    │   └── rolldown.ts               # Rolldown
    ├── package.json
    ├── tsconfig.json
    └── tsdown.config.ts              # 빌드 설정
```

## 3. package.json 설계

```json
{
  "name": "@typia/unplugin",
  "version": "11.0.1",
  "description": "Typia unplugin for Vite, Webpack, Rollup, esbuild, and more",
  "type": "module",
  "main": "src/index.ts",
  "scripts": {
    "build": "rimraf lib && tsdown",
    "dev": "tsdown --watch"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/samchon/typia"
  },
  "author": "Jeongho Nam",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/samchon/typia/issues"
  },
  "homepage": "https://typia.io",
  "exports": {
    ".": "./lib/index.js",
    "./api": "./lib/api.js",
    "./bun": "./lib/bun.js",
    "./esbuild": "./lib/esbuild.js",
    "./farm": "./lib/farm.js",
    "./next": "./lib/next.js",
    "./rolldown": "./lib/rolldown.js",
    "./rollup": "./lib/rollup.js",
    "./rspack": "./lib/rspack.js",
    "./vite": "./lib/vite.js",
    "./webpack": "./lib/webpack.js",
    "./package.json": "./package.json"
  },
  "dependencies": {
    "@rollup/pluginutils": "^5.1.4",
    "consola": "^3.4.2",
    "defu": "^6.1.4",
    "diff-match-patch-es": "^1.0.1",
    "find-cache-dir": "^5.0.0",
    "magic-string": "^0.30.17",
    "pathe": "^2.0.3",
    "pkg-types": "^2.1.0",
    "type-fest": "^4.37.0",
    "unplugin": "^2.2.2"
  },
  "peerDependencies": {
    "typia": "workspace:^",
    "typescript": ">=4.8.0 <5.10.0",
    "svelte": "^5.0.0",
    "vite": ">=3.0.0"
  },
  "peerDependenciesMeta": {
    "svelte": { "optional": true },
    "vite": { "optional": true }
  },
  "devDependencies": {
    "@types/node": "catalog:utils",
    "rimraf": "catalog:utils",
    "tsdown": "^0.12.7",
    "typia": "workspace:^",
    "typescript": "catalog:typescript"
  },
  "sideEffects": false,
  "files": [
    "LICENSE",
    "README.md",
    "package.json",
    "lib",
    "src"
  ],
  "keywords": [
    "typia",
    "unplugin",
    "vite",
    "webpack",
    "rollup",
    "esbuild",
    "transform",
    "typescript",
    "validation"
  ],
  "packageManager": "pnpm@10.6.4",
  "publishConfig": {
    "access": "public",
    "main": "lib/index.js",
    "typings": "lib/index.d.ts"
  }
}
```

**핵심 변경점:**
- `@typia/transform: workspace:^` 제거
- `typia: workspace:^`를 **peerDependencies**로 추가
- devDependencies에도 `typia: workspace:^` 추가 (개발 시 사용)

## 4. 소스 코드 마이그레이션

### 4.1 Import 경로 변경 규칙

| 기존 (`unplugin-typia`) | 변경 후 (`@typia/unplugin`) |
|-------------------------|----------------------------|
| `from 'typia/lib/transform.js'` | `from 'typia/lib/transform.js'` (유지) |
| `import type { ITransformOptions } from '...'` | `from 'typia/lib/transform.js'` |

### 4.2 `core/typia.ts` 수정

**Before:**
```typescript
import { transform as typiaTransform } from 'typia/lib/transform.js';
```

**After:**
```typescript
import typiaTransform from 'typia/lib/transform.js';
// 또는
import { transform as typiaTransform } from 'typia/lib/transform.js';
```

→ 기존 경로 그대로 유지 가능! `typia`가 이미 re-export하고 있음

### 4.3 `core/options.ts` 수정

**Before:**
```typescript
import type { ITransformOptions } from 'typia/lib/...';
```

**After:**
```typescript
import type { ITransformOptions } from 'typia/lib/transform.js';
```

→ typia의 `src/transform.ts`에서 `ITransformOptions` re-export 추가 필요

## 5. typia 패키지 수정 사항

### 5.1 `packages/typia/src/transform.ts` 수정

**현재:**
```typescript
import transform from "@typia/transform";

export default transform;
```

**변경 후:**
```typescript
import transform from "@typia/transform";
export { ITransformOptions, ITypiaContext } from "@typia/core";

export { transform };
export default transform;
```

이렇게 하면 `@typia/unplugin`에서:
```typescript
import typiaTransform, { ITransformOptions } from 'typia/lib/transform.js';
```

## 6. 의존성 계층

```
@typia/interface (base)
    ↓
@typia/utils
    ↓
@typia/core (exports ITransformOptions, ITypiaContext)
    ↓
@typia/transform (exports transform function)
    ↓
typia (re-exports everything via lib/transform.js)
    ↓
@typia/unplugin (depends only on typia as peer dependency)
```

## 7. pnpm-workspace.yaml 업데이트

```yaml
catalogs:
  # ... 기존 카탈로그 ...
  unplugin:
    unplugin: ^2.2.2
    magic-string: ^0.30.17
    consola: ^3.4.2
    defu: ^6.1.4
    pathe: ^2.0.3
    tsdown: ^0.12.7
```

## 8. 작업 순서

1. [ ] **typia 패키지 수정**: `src/transform.ts`에 `ITransformOptions`, `ITypiaContext` re-export 추가
2. [ ] `packages/unplugin/` 디렉토리 생성
3. [ ] `package.json` 작성 (typia를 peer dependency로)
4. [ ] `tsconfig.json` 작성
5. [ ] `tsdown.config.ts` 작성
6. [ ] 소스 코드 복사
7. [ ] Import 경로 수정 (`typia/lib/transform.js` 사용)
8. [ ] `pnpm-workspace.yaml` 카탈로그 추가
9. [ ] `pnpm install` 실행
10. [ ] 빌드 테스트
11. [ ] 테스트 패키지 생성 및 검증

## 9. 사용자 관점에서의 설치

```bash
# npm/yarn/pnpm 모두 동일
npm install @typia/unplugin typia

# vite.config.ts
import typia from '@typia/unplugin/vite';

export default {
  plugins: [typia()]
};
```

사용자는 `typia`와 `@typia/unplugin` 두 패키지만 설치하면 됩니다.
내부 패키지들(`@typia/core`, `@typia/transform` 등)은 `typia`의 의존성으로 자동 설치됩니다.

## 10. 고려 사항

### 10.1 ESM vs CommonJS
- `@typia/unplugin`: ESM (`"type": "module"`)
- `typia`: CommonJS (lib/) + ESM (lib/*.mjs)
- Node.js ESM에서 CJS import 가능하므로 문제없음

### 10.2 Bun 플러그인
- `bun-only` 패키지 제거
- Bun 환경 감지는 `typeof Bun !== 'undefined'`로 대체

### 10.3 빌드 순서
모노리포 빌드 시 typia가 먼저 빌드되어야 함:
1. @typia/interface
2. @typia/utils
3. @typia/core
4. @typia/transform
5. typia
6. @typia/unplugin (typia에 의존)

---

## 11. 테스트 구성

### 11.1 테스트 전략

unplugin-typia의 기존 테스트 방식(Vitest + 스냅샷)과 typia 모노리포의 테스트 방식(@nestia/e2e + DynamicExecutor)을 **혼합**하여 사용합니다.

| 테스트 유형 | 도구 | 위치 |
|------------|------|------|
| 단위 테스트 (transform 함수) | Vitest | `packages/unplugin/tests/` |
| 통합 테스트 (번들러별) | Vitest + 스냅샷 | `packages/unplugin/tests/` |
| E2E 테스트 | @nestia/e2e | `tests/test-unplugin/` |

### 11.2 `packages/unplugin/tests/` 구조 (단위/통합 테스트)

```
packages/unplugin/
├── tests/
│   ├── _utils.ts                    # 테스트 유틸리티
│   ├── typia.spec.ts                # transform 함수 단위 테스트
│   ├── vite.spec.ts                 # Vite 통합 테스트
│   ├── rollup.spec.ts               # Rollup 통합 테스트
│   ├── esbuild.spec.ts              # esbuild 통합 테스트
│   └── fixtures/
│       ├── tsconfig.json            # 테스트용 tsconfig
│       ├── type.d.ts                # 테스트 타입 정의
│       ├── is.ts                    # typia.is 테스트
│       ├── validate.ts              # typia.validate 테스트
│       ├── random.ts                # typia.random 테스트
│       └── __snapshots__/           # 스냅샷 파일들
│           ├── is.ts
│           ├── validate.ts
│           ├── vite/
│           ├── rollup/
│           └── esbuild/
├── vitest.config.ts                 # Vitest 설정
└── package.json
```

### 11.3 Vitest 설정 (`packages/unplugin/vitest.config.ts`)

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 150000,  // transform 시간 고려
    typecheck: true,
  },
});
```

### 11.4 `packages/unplugin/package.json` 스크립트 추가

```json
{
  "scripts": {
    "build": "rimraf lib && tsdown",
    "dev": "tsdown --watch",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "devDependencies": {
    "vitest": "catalog:unplugin",
    "vite": "catalog:unplugin",
    "rollup": "catalog:rollup",
    "esbuild": "catalog:unplugin",
    "typia": "workspace:^",
    "typescript": "catalog:typescript"
  }
}
```

### 11.5 예시 테스트 파일

**`tests/typia.spec.ts`** (transform 단위 테스트):
```typescript
import path from 'pathe';
import type { UnpluginBuildContext, UnpluginContext } from 'unplugin';
import { transformTypia } from '../src/core/typia.js';
import { resolveOptions } from '../src/api.js';
import type { Data } from '../src/core/types.js';
import { getFixtureID, getFixtureIDs, getSnapshotID, readFixture } from './_utils.js';

class DummyContext {
  warn(args: unknown) {
    console.warn(args);
  }
}

const ctx = new DummyContext() as UnpluginContext & UnpluginBuildContext;

async function _test(_id: string): Promise<Data> {
  const id = getFixtureID(_id);
  const code = await readFixture(_id);
  const transformed = await transformTypia(
    id,
    code,
    ctx,
    resolveOptions({ cache: false }),
    [{ find: '@', replacement: path.resolve('./tests/fixtures') }],
  );
  return transformed;
}

it.each(await getFixtureIDs())(`typia transform %s`, async (id: string) => {
  const transformed = await _test(id);
  const snapshot = getSnapshotID(id, 'ts');
  await expect(transformed).toMatchFileSnapshot(snapshot);
});
```

**`tests/vite.spec.ts`** (Vite 통합 테스트):
```typescript
import { build } from 'vite';
import type { RollupOutput } from 'rollup';
import path from 'pathe';
import UnpluginTypia from '../src/vite.js';
import type { ID } from '../src/core/types.js';
import { getFixtureID, getFixtureIDs, getSnapshotID, root } from './_utils.js';

async function transform(_id: ID): Promise<RollupOutput['output']> {
  const id = getFixtureID(_id);
  const { output } = (await build({
    root,
    build: {
      minify: false,
      rollupOptions: {
        input: [id],
        external: ['typia'],
      },
      write: false,
    },
    logLevel: 'silent',
    plugins: [
      UnpluginTypia({
        cache: false,
        log: false,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./tests/fixtures'),
      },
    },
  })) as RollupOutput;
  return output;
}

it.each(await getFixtureIDs())(`vite transform %s`, async (id: ID) => {
  const transformed = await transform(id);
  const code = transformed[0].code;
  const snapshot = getSnapshotID(id).replace('__snapshots__', '__snapshots__/vite');
  await expect(code).toMatchFileSnapshot(snapshot);
});
```

### 11.6 `tests/test-unplugin/` 구조 (E2E 테스트)

기존 typia 테스트 패턴을 따르는 E2E 테스트 패키지:

```
tests/test-unplugin/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts                    # DynamicExecutor 진입점
    ├── TestGlobal.ts               # 전역 설정
    └── features/
        ├── test_vite_transform.ts
        ├── test_rollup_transform.ts
        ├── test_esbuild_transform.ts
        └── test_webpack_transform.ts
```

**`tests/test-unplugin/package.json`**:
```json
{
  "private": true,
  "name": "@typia/test-unplugin",
  "version": "0.1.0",
  "scripts": {
    "build": "tsc",
    "start": "ts-node src/index.ts"
  },
  "dependencies": {
    "typia": "workspace:^",
    "@typia/unplugin": "workspace:^",
    "@nestia/e2e": "catalog:utils",
    "vite": "catalog:unplugin",
    "rollup": "catalog:rollup",
    "esbuild": "catalog:unplugin"
  },
  "devDependencies": {
    "ts-node": "catalog:typescript",
    "typescript": "catalog:typescript"
  }
}
```

**`tests/test-unplugin/tsconfig.json`**:
```json
{
  "extends": "../config/tsconfig.json",
  "compilerOptions": {
    "outDir": "bin"
  },
  "include": ["src"]
}
```

**`tests/test-unplugin/src/index.ts`**:
```typescript
import { DynamicExecutor } from "@nestia/e2e";
import { TestGlobal } from "./TestGlobal";

const main = async (): Promise<void> => {
  const report = await DynamicExecutor.validate({
    prefix: "test_",
    location: __dirname + "/features",
    extension: "ts",
    parameters: () => [],
    onComplete: (exec) => {
      const elapsed = Math.floor(exec.time);
      console.log(`  - ${exec.name}: ${exec.error ? "FAILED" : `${elapsed} ms`}`);
    },
    filter: (name) => {
      if (TestGlobal.include.length > 0)
        return TestGlobal.include.some((inc) => name.includes(inc));
      if (TestGlobal.exclude.length > 0)
        return !TestGlobal.exclude.some((exc) => name.includes(exc));
      return true;
    },
  });

  const exceptions = report.executions.filter((e) => e.error !== null);
  if (exceptions.length > 0) {
    console.log("\nFailed tests:");
    exceptions.forEach((e) => console.log(`  - ${e.name}: ${e.error}`));
    process.exit(-1);
  }
  console.log(`\nSuccess - Elapsed: ${Math.floor(report.time)} ms`);
};

main().catch(console.error);
```

---

## 12. pnpm-workspace.yaml 개정안

### 12.1 전체 파일

```yaml
packages:
  - 'internals/*'
  - 'packages/*'
  - 'tests/*'

catalogs:
  # TypeScript 관련
  typescript:
    '@types/ts-expose-internals': npm:ts-expose-internals@5.6.3
    ts-node: ^10.9.2
    ts-patch: ^3.3.0
    typescript: ~5.9.3

  # Rollup 관련
  rollup:
    rollup: ^4.56.0
    rollup-plugin-auto-external: ^2.0.0
    rollup-plugin-node-externals: ^8.1.2
    '@rollup/plugin-commonjs': ^29.0.0
    '@rollup/plugin-node-resolve': ^16.0.3
    '@rollup/plugin-terser': ^0.4.4
    '@rollup/plugin-typescript': ^12.3.0
    '@rollup/pluginutils': ^5.1.4

  # 유틸리티
  utils:
    '@nestia/e2e': ^10.0.2
    '@types/node': ^25.0.10
    '@types/uuid': ^11.0.0
    openai: ^6.16.0
    rimraf: ^6.1.2
    uuid: ^13.0.0
    tstl: ^3.0.0
    tgrid: ^1.2.1

  # Unplugin 관련 (신규)
  unplugin:
    # 핵심 의존성
    unplugin: ^2.2.2
    magic-string: ^0.30.17

    # 유틸리티
    consola: ^3.4.2
    defu: ^6.1.4
    pathe: ^2.0.3
    pkg-types: ^2.1.0
    type-fest: ^4.37.0
    diff-match-patch-es: ^1.0.1
    find-cache-dir: ^5.0.0

    # 빌드 도구
    tsdown: ^0.12.7

    # 테스트 도구
    vitest: ^3.0.9
    vite: ^6.2.2
    esbuild: ^0.25.5
```

### 12.2 변경 사항 요약

| 항목 | 변경 내용 |
|------|----------|
| `catalogs.rollup` | `@rollup/pluginutils` 추가 (unplugin에서 사용) |
| `catalogs.unplugin` (신규) | unplugin 관련 모든 의존성 정의 |

### 12.3 카탈로그 사용 예시

**`packages/unplugin/package.json`**:
```json
{
  "dependencies": {
    "@rollup/pluginutils": "catalog:rollup",
    "unplugin": "catalog:unplugin",
    "magic-string": "catalog:unplugin",
    "consola": "catalog:unplugin",
    "defu": "catalog:unplugin",
    "pathe": "catalog:unplugin",
    "pkg-types": "catalog:unplugin",
    "type-fest": "catalog:unplugin",
    "diff-match-patch-es": "catalog:unplugin",
    "find-cache-dir": "catalog:unplugin"
  },
  "devDependencies": {
    "@types/node": "catalog:utils",
    "rimraf": "catalog:utils",
    "tsdown": "catalog:unplugin",
    "typescript": "catalog:typescript",
    "vitest": "catalog:unplugin",
    "vite": "catalog:unplugin",
    "esbuild": "catalog:unplugin",
    "typia": "workspace:^"
  }
}
```

---

## 13. 루트 package.json 스크립트 수정

현재:
```json
{
  "scripts": {
    "build": "pnpm --filter=./packages/* -r build",
    "test": "pnpm --filter=./tests/test-* -r start"
  }
}
```

변경 없음 - 기존 패턴으로 자동 포함됨:
- `packages/unplugin`은 `pnpm build`로 자동 빌드
- `tests/test-unplugin`은 `pnpm test`로 자동 실행

### 13.1 추가 스크립트 (선택사항)

```json
{
  "scripts": {
    "build": "pnpm --filter=./packages/* -r build",
    "test": "pnpm --filter=./tests/test-* -r start",
    "test:unplugin": "pnpm --filter=@typia/unplugin test",
    "test:unplugin:e2e": "pnpm --filter=@typia/test-unplugin start"
  }
}
```

---

## 14. 전체 작업 순서 (업데이트)

### Phase 1: typia 패키지 준비
1. [ ] `packages/typia/src/transform.ts`에 re-export 추가

### Phase 2: @typia/unplugin 패키지 생성
2. [ ] `packages/unplugin/` 디렉토리 생성
3. [ ] `package.json` 작성
4. [ ] `tsconfig.json` 작성
5. [ ] `tsdown.config.ts` 작성
6. [ ] `vitest.config.ts` 작성
7. [ ] 소스 코드 복사 및 import 경로 수정
8. [ ] 테스트 코드 복사 (`tests/` 디렉토리)

### Phase 3: pnpm-workspace.yaml 업데이트
9. [ ] `catalogs.unplugin` 추가
10. [ ] `catalogs.rollup`에 `@rollup/pluginutils` 추가

### Phase 4: E2E 테스트 패키지 생성
11. [ ] `tests/test-unplugin/` 디렉토리 생성
12. [ ] `package.json` 작성
13. [ ] `tsconfig.json` 작성
14. [ ] 테스트 파일 작성

### Phase 5: 검증
15. [ ] `pnpm install` 실행
16. [ ] `pnpm build` 실행
17. [ ] `pnpm --filter=@typia/unplugin test` 실행
18. [ ] `pnpm test` 실행 (전체 테스트)

---

## 15. 미진한 점 및 보완 사항

### 15.1 tsconfig.json 상세 설정

```json
{
  "extends": "../../internals/config/tsconfig.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "target": "ES2022",
    "outDir": "lib",
    "noEmit": true,
    "declaration": false,
    "isolatedModules": true
  },
  "include": ["src"],
  "exclude": ["tests"]
}
```

**참고**: tsdown이 빌드와 .d.ts 생성을 담당하므로 `noEmit: true`.

### 15.2 tsdown.config.ts 상세 설정

```typescript
import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    api: 'src/api.ts',
    vite: 'src/vite.ts',
    webpack: 'src/webpack.ts',
    rollup: 'src/rollup.ts',
    esbuild: 'src/esbuild.ts',
    next: 'src/next.ts',
    bun: 'src/bun.ts',
    rspack: 'src/rspack.ts',
    farm: 'src/farm.ts',
    rolldown: 'src/rolldown.ts',
  },
  format: ['esm'],
  target: 'es2022',
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  external: [
    'typia',
    'typescript',
    'vite',
    'svelte',
    // peer dependencies는 번들에서 제외
  ],
});
```

### 15.3 exports 필드 완전한 형태

```json
{
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "import": "./lib/index.js"
    },
    "./api": {
      "types": "./lib/api.d.ts",
      "import": "./lib/api.js"
    },
    "./vite": {
      "types": "./lib/vite.d.ts",
      "import": "./lib/vite.js"
    },
    "./webpack": {
      "types": "./lib/webpack.d.ts",
      "import": "./lib/webpack.js"
    },
    "./rollup": {
      "types": "./lib/rollup.d.ts",
      "import": "./lib/rollup.js"
    },
    "./esbuild": {
      "types": "./lib/esbuild.d.ts",
      "import": "./lib/esbuild.js"
    },
    "./next": {
      "types": "./lib/next.d.ts",
      "import": "./lib/next.js"
    },
    "./bun": {
      "types": "./lib/bun.d.ts",
      "import": "./lib/bun.js"
    },
    "./rspack": {
      "types": "./lib/rspack.d.ts",
      "import": "./lib/rspack.js"
    },
    "./farm": {
      "types": "./lib/farm.d.ts",
      "import": "./lib/farm.js"
    },
    "./rolldown": {
      "types": "./lib/rolldown.d.ts",
      "import": "./lib/rolldown.js"
    },
    "./package.json": "./package.json"
  }
}
```

### 15.4 Windows 호환성

기존 unplugin-typia의 테스트에서 사용하는 `dax-sh`는 cross-platform이지만, 문제 발생 시 대안:

```typescript
// _utils.ts에서 dax-sh 대신
import { execSync } from 'node:child_process';

export async function runScript(path: string): Promise<void> {
  execSync(`node ${path}`, { stdio: 'inherit' });
}
```

### 15.5 테스트 역할 분리 명확화

| 위치 | 목적 | 실행 시점 |
|------|------|----------|
| `packages/unplugin/tests/` | 개발 중 빠른 피드백, 스냅샷 테스트 | `pnpm --filter=@typia/unplugin test` |
| `tests/test-unplugin/` | CI/CD 전체 검증, 실제 번들링 테스트 | `pnpm test` (전체) |

### 15.6 원작자 크레딧

`packages/unplugin/README.md` 또는 소스 파일 상단에 명시:

```markdown
## Credits

This package is based on [unplugin-typia](https://github.com/ryoppippi/unplugin-typia)
originally created by [@ryoppippi](https://github.com/ryoppippi).
```

### 15.7 버전 관리 전략

**권장**: typia 본체와 동일한 버전 사용 (11.0.1)

- 모노리포 내 모든 패키지가 동일한 버전
- 사용자 혼란 방지
- 호환성 명확

### 15.8 빌드 순서 보장

pnpm의 `-r` 옵션은 workspace 의존성 순서를 자동으로 처리함:

```bash
pnpm --filter=./packages/* -r build
```

`@typia/unplugin`이 `typia: workspace:^`를 devDependencies로 가지므로:
1. typia가 먼저 빌드됨
2. 그 다음 @typia/unplugin 빌드

**확인 방법**:
```bash
pnpm --filter=./packages/* -r --parallel=1 build
# --parallel=1로 순차 실행하여 순서 확인
```

### 15.9 Svelte 의존성 처리

`core/languages/svelte.ts`에서 Svelte 컴파일러 사용:

```typescript
import { preprocess } from 'svelte/compiler';
```

**현재 계획**: `svelte`를 optional peer dependency로 설정
- Svelte 사용자만 설치
- 미설치 시 Svelte 파일 처리 건너뜀

**코드 수정 필요**:
```typescript
// core/languages/svelte.ts
let svelte: typeof import('svelte/compiler') | null = null;
try {
  svelte = await import('svelte/compiler');
} catch {
  // Svelte not installed
}

export function canProcessSvelte(): boolean {
  return svelte !== null;
}
```

### 15.10 누락된 테스트 케이스

추가해야 할 테스트:
- [ ] Webpack 통합 테스트
- [ ] Next.js 통합 테스트
- [ ] 캐시 기능 테스트
- [ ] 에러 케이스 테스트 (잘못된 TypeScript 코드)
- [ ] tsconfig.json 경로 옵션 테스트
