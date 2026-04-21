# 04. 변환 파이프라인 — 두 가지 빌드 경로

typia transformer는 현재 두 가지 진입 경로가 있다. 하나는 기본 `ttsc` 경로, 다른 하나는 번들러용 `@typia/unplugin` 경로다. 두 경로가 같은 typia core에 도달한다는 점은 유지되지만, 기본 설치 계약은 더 이상 `ts-patch` 가 아니다.

## 경로 A. `ttsc` (기본 / 표준)

```
[사용자] typia setup / ttsc build
   ↓
[ttsc] tsconfig.json의 plugins[].transform 읽음
   ↓ "typia/lib/ttsc/plugin" resolve
[ttsc host] built-in typia plugin 로드
   ↓ native rewrite + JS plugin host 조합
[ttsc] 각 SourceFile에 rewrite / transform 적용
   ↓
[ttsc] 변환된 코드를 emit
```

### 설치 절차 (typia setup이 자동화)

1. `npm i typia`
2. `npm i -D @typescript/native-preview @typia/ttsc`
3. `tsconfig.json.compilerOptions.plugins += [{ transform: "typia/lib/ttsc/plugin" }]`
4. `strict` / `strictNullChecks` / `skipLibCheck` 정리
5. `ttsc build --emit --tsconfig tsconfig.json`

참고:
- `typia/lib/transform` 는 아직 compatibility alias 로 남아 있어 기존 경로를 즉시 깨뜨리지는 않는다.
- 하지만 현재 문서와 setup wizard 기준의 **기본 경로**는 `typia/lib/ttsc/plugin` 이다.

### 장점
- `ts-patch install` / `prepare` 없이 기본 경로가 동작한다
- `build` / `transform` / `check` 를 같은 host 표면에서 검증할 수 있다
- typia의 Go-backed rewrite path 를 직접 태운다

### 단점
- 오늘 시점에는 preview compiler 패키지에 의존한다
- `ttsc` 를 직접 호출하지 않는 기존 도구는 별도 적응이 필요할 수 있다
- `ts-node` / `tsx` 류 실행은 별도 sibling package `@typia/ttsx` 를 추가해야 한다

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
- 기본 `ttsc` 경로와 독립적으로 번들러에 통합 가능
- 빌드 캐시로 재빌드 빠름
- vite/webpack/rspack/esbuild/rolldown/bun/farm/next 다 지원

### 단점
- `ttsc` 직접 빌드는 변환 안 함 (번들러 통과해야만)
- 캐시 무효화 버그 가능성
- esbuild의 빠른 트랜스파일러를 그대로 쓰지 못함 (typia는 type info 필요 → tsc 의존)

## 두 경로의 비교 결정 트리

```
프로젝트가 표준 compiler 경로로 직접 빌드?
├─ Yes → ttsc (경로 A)
└─ No (vite/webpack/...)
   ├─ 라이브러리 빌드도 별도로 필요한가?
   │  ├─ Yes → ttsc + unplugin 둘 다
   │  └─ No → unplugin만 (경로 B)
   └─ 타입 체크는 하고 emit은 번들러에 맡기는가?
      ├─ Yes → unplugin
      └─ No → ttsc
```

대부분의 프로젝트:
- 라이브러리 (NestJS 백엔드, npm 패키지) → ttsc
- 앱 (Next.js, Vite SPA) → unplugin
- 라이브러리 + 앱 모노레포 → ttsc + unplugin 둘 다

## 양쪽 다 거치는 공통 핵심: typia transformer factory

두 경로 모두 결국 `@typia/transform.transform(program, options, extras)`를 부른다. 그 후 흐름은 같다 → [02. 데이터 플로우](02-data-flow.md) 참조.

## tsgo 시대의 이 그림 (현재 방향)

[05-research/03-tsgo-status.md](../05-research/03-tsgo-status.md)에 따르면 tsgo는 in-process plugin을 지원하지 않는다 (IPC만). 이 변화가 두 경로에 미치는 영향:

| 경로 | tsgo 영향 |
|---|---|
| ttsc | **현재 기본 경로** — preview compiler + typia plugin host 를 직접 검증 |
| unplugin | **상대적으로 안전** — 번들러 훅에서 자체적으로 typescript 모듈을 부르므로, TS 7과 TS 6를 별도로 부를 수 있음 |

→ 전략적 함의: **`ttsc` 를 기본 경로로, `unplugin` 을 bundler-native 대체 경로로** 운영한다. `typia/lib/transform` + ts-patch 조합은 compatibility layer 로만 남기고, 새 계약의 중심에는 두지 않는다.

## 한 줄 요약

> 두 진입 경로가 같은 core를 부른다. `ttsc` 는 현재 기본 host 경로이고, `unplugin` 은 번들러 유연성에 충실한 대체 경로다. legacy `ts-patch` 경로는 호환성 표면으로만 남는다.

→ 패키지별 깊은 구조는 [03-packages/](../03-packages/) 참조.
