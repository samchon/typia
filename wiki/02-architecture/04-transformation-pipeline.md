# 04. 변환 파이프라인 — 두 가지 빌드 경로

typia transformer는 두 가지 진입 경로가 있다. 하나는 표준(tsc), 다른 하나는 번들러용(unplugin). 두 경로가 같은 core에 도달한다는 점이 우아함.

## 경로 A. ts-patch (표준)

```
[사용자] tsc 빌드
   ↓
[ts-patch] tsconfig.json의 plugins[].transform 읽음
   ↓ "typia/lib/transform" 경로 resolve
[ts-patch] @typia/transform.transform(program, options, extras) 호출
   ↓ TransformerFactory 반환
[tsc] 각 SourceFile마다 TransformerFactory 적용
   ↓
[FileTransformer] visitEachChild로 깊이 우선 순회
[CallExpressionTransformer] typia.* 식별 → 라우팅 → 변환
   ↓
[tsc] 변환된 AST를 emit
```

### 설치 절차 (typia setup이 자동화)

1. `npm i -D typescript ts-patch`
2. `package.json.scripts.prepare = "ts-patch install"`
3. `tsconfig.json.compilerOptions.plugins += [{ transform: "typia/lib/transform" }]`
4. `npm run prepare` (ts-patch가 typescript 모듈에 패치 적용)

### 장점
- 가장 표준적인 경로 — `tsc`가 그냥 동작한다
- `tsc --watch`, `tsc --build`, project references 모두 지원

### 단점
- ts-patch가 typescript 모듈을 patch한다 — 매번 `npm i` 후 prepare 필요
- IDE 파서(VSCode TypeScript Service)는 patch를 모름 → 타입 에러는 정상이지만 변환 결과는 빌드 시에만 보임
- monorepo에서 tsc reference 빌드 시 모든 패키지에 적용됨 (의도일 수도, 부담일 수도)

## 경로 B. unplugin (번들러)

```
[사용자] vite/webpack/rspack/esbuild build
   ↓
[unplugin-typia] 각 .ts 파일을 transform 훅에서 가로챔
   ↓
[unplugin core/typia.ts:31-62]
   - ts.createProgram() 또는 캐시된 program
   - ts.transform()으로 typia transformer 적용
   - ts.createPrinter()로 변환된 코드 print
   - diff-match-patch-es로 sourcemap 생성
   ↓
[번들러] 변환된 코드를 받아 다음 단계 진행
```

### 사용 예 (vite)
```ts
// vite.config.ts
import typia from "@typia/unplugin/vite";
export default {
  plugins: [typia({ tsconfig: "tsconfig.json" })],
};
```

### 옵션 (`packages/unplugin/src/core/options.ts:7-78`)
- `include` / `exclude` — 파일 필터
- `tsconfig` — auto/path
- `typia` — ITransformOptions 패스스루
- `cache` — 빌드 캐시
- `enforce` — 플러그인 순서 (pre/post)

### 장점
- ts-patch 우회 → typescript 모듈 patch 안 함
- 빌드 캐시로 재빌드 빠름
- vite/webpack/rspack/esbuild/rolldown/bun/farm/next 다 지원

### 단점
- `tsc` 직접 빌드는 변환 안 함 (번들러 통과해야만)
- 캐시 무효화 버그 가능성
- esbuild의 빠른 트랜스파일러를 그대로 쓰지 못함 (typia는 type info 필요 → tsc 의존)

## 두 경로의 비교 결정 트리

```
프로젝트가 tsc 직접 빌드?
├─ Yes → ts-patch (경로 A)
└─ No (vite/webpack/...)
   ├─ ts-patch도 같이 사용? (라이브러리 빌드 등)
   │  ├─ Yes → ts-patch + unplugin 둘 다
   │  └─ No → unplugin만 (경로 B)
   └─ tsc check만 하고 emit은 다른 도구?
      ├─ Yes → unplugin
      └─ No → ts-patch
```

대부분의 프로젝트:
- 라이브러리 (NestJS 백엔드, npm 패키지) → ts-patch
- 앱 (Next.js, Vite SPA) → unplugin
- 라이브러리 + 앱 모노레포 → 둘 다

## 양쪽 다 거치는 공통 핵심: typia transformer factory

두 경로 모두 결국 `@typia/transform.transform(program, options, extras)`를 부른다. 그 후 흐름은 같다 → [02. 데이터 플로우](02-data-flow.md) 참조.

## tsgo 시대의 이 그림 (예측)

[05-research/03-tsgo-status.md](../05-research/03-tsgo-status.md)에 따르면 tsgo는 in-process plugin을 지원하지 않는다 (IPC만). 이 변화가 두 경로에 미치는 영향:

| 경로 | tsgo 영향 |
|---|---|
| ts-patch | **소멸 가능성 높음** — ts-patch가 in-process patching 기반이라 tsgo와 호환 안 됨 |
| unplugin | **상대적으로 안전** — 번들러 훅에서 자체적으로 typescript 모듈을 부르므로, TS 7과 TS 6를 별도로 부를 수 있음 |

→ 전략적 함의: **unplugin 경로를 1급 시민으로 격상**하고 ts-patch 경로는 "TS 6.x LTS 호환 모드"로 운영. tsc-direct 사용자는 점진적으로 unplugin 또는 별도 codegen 단계로 안내.

## 한 줄 요약

> 두 진입 경로가 같은 core를 부른다. ts-patch는 tsc 표준에 충실하고, unplugin은 번들러 유연성에 충실하다. tsgo 시대에는 unplugin이 살아남고 ts-patch는 LTS 잔여물이 될 가능성이 높다.

→ 패키지별 깊은 구조는 [03-packages/](../03-packages/) 참조.
