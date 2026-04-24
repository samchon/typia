# 01. Overview

```
user TypeScript
  typia.is<T>(input)
        |
        v
tsconfig.json
  compilerOptions.plugins = [{ transform: "typia/lib/transform" }]
        |
        v
@typia/ttsc
  load project
  load plugin
  run TypeScript-Go
        |
        v
typia/lib/transform
  declares native.mode = "typia"
  declares native.binary = typia ttsc launcher
        |
        v
packages/transform/native
  collect typia.* call sites
  build rewrite set
        |
        v
packages/core/native
  analyze TypeScript type
  emit JavaScript expression
        |
        v
toolchain/ttsc/driver
  rewrite emitted JS
```

## 책임

| 영역 | 위치 | 책임 |
| --- | --- | --- |
| public API | `packages/typia` | 사용자가 import 하는 runtime API |
| plugin entry | `packages/typia/src/transform.ts` | native backend 선언 |
| compiler host | `toolchain/ttsc` | build/check/transform, plugin load, rewrite orchestration |
| runner | `toolchain/ttsx` | TypeScript 실행 |
| call-site adapter | `packages/transform/native` | typia 호출 수집 |
| analyzer/emitter | `packages/core/native` | type -> metadata -> JS expression |
| bundler adapter | `packages/unplugin` | `@typia/ttsc.transform()` 호출 |

## 제거된 표면

- `@typia/core` TypeScript package
- `@typia/transform` TypeScript package
- TypeScript AST factory 기반 legacy transformer implementation

`typia/lib/transform` 은 남아 있다. 다만 의미가 legacy transformer 에서 native plugin entry 로 바뀌었다.
