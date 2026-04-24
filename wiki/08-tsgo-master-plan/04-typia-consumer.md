# 04. typia Consumer

typia는 `ttsc` / `ttsx` 의 첫 consumer 다.

## 현재 경로

1. 사용자는 `typia.is<T>()`, `typia.json.stringify<T>()` 같은 public API 를 호출한다.
2. `typia setup` 이 `tsconfig.json` 에 `{ "transform": "typia/lib/transform" }` 를 넣는다.
3. `typia/lib/transform` 은 `@typia/ttsc.definePlugin()` 으로 native backend 를 선언한다.
4. `@typia/ttsc` 가 `packages/typia/lib/executable/generate/ttsc.js` 또는 source checkout 의 `src/executable/generate/ttsc.ts` 를 실행한다.
5. 그 launcher 가 `packages/transform/native/cmd/ttsc-typia` 를 실행한다.
6. `packages/transform/native` 가 call site 를 찾고, `packages/core/native` 가 타입 분석과 JS emit 을 수행한다.

## setup wizard

현재 동작:

- 없으면 `tsconfig.json` 생성
- `compilerOptions` 가 없으면 생성
- `compilerOptions.plugins` 가 없으면 배열 생성
- `plugins` 가 배열이 아니면 실패
- `typia/lib/transform` 중복 제거 후 하나만 추가
- `strictNullChecks: true`, `skipLibCheck: true` 보정
- legacy `prepare` 의 `typia patch` / `ts-patch install` 제거
- `dependencies.ts-patch`, `devDependencies.ts-patch` 제거
- `@typescript/native-preview`, `@typia/ttsc`, `@typia/ttsx` 설치

## legacy 경계

`@typia/core` / `@typia/transform` TypeScript transformer 패키지는 현재 코드베이스에 없다. legacy transformer 가 필요한 사용자는 해당 기능이 남아 있는 구버전 typia lane 을 사용한다.
