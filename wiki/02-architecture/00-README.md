# 02. 아키텍처 (Architecture)

현재 typia 구현 구조를 설명한다. `@typia/core` / `@typia/transform` TypeScript 패키지는 제거되었고, 현재 변환 엔진은 Go native backend가 담당한다.

## 읽기 순서

1. [01-overview.md](01-overview.md) — 한 장의 그림
2. [02-data-flow.md](02-data-flow.md) — 한 호출이 코드가 되기까지
3. [03-package-graph.md](03-package-graph.md) — 패키지군과 toolchain 의존 구조
4. [04-transformation-pipeline.md](04-transformation-pipeline.md) — `ttsc` / `@typia/unplugin` 경로

## 핵심 한 줄

> 사용자는 `typia.is<T>()` 같은 기존 API를 그대로 호출하고, `typia/lib/ttsc/plugin` 이 Go native analyzer/emitter를 통해 호출 위치를 rewrite한다.

## 현재 구조

| 영역         | 현재                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| 빌드 도구    | `@typescript/native-preview` + `@typia/ttsc`, 또는 `@typia/unplugin`        |
| plugin entry | `typia/lib/ttsc/plugin`                                                     |
| 엔진         | `packages/core/native/*`, `packages/transform/native/*`                     |
| 사용자 API   | `typia.is<T>(input)` 등 기존 public API                                     |
| 제거된 표면  | `@typia/core`, `@typia/transform`, `typia/lib/transform`, `TypiaProgrammer` |
