# 02. Architecture

현재 typia 변환 구조만 설명한다.

## 한 줄

`typia/lib/transform` 이 `ttsc` plugin 으로 로드되고, Go native backend 가 `typia.*` 호출을 emitted JS 로 rewrite 한다.

## 현재 구조

| 영역 | 현재 |
| --- | --- |
| compiler host | `ttsc` |
| runner | `ttsc` |
| TypeScript compiler | `@typescript/native-preview` |
| typia plugin entry | `typia/lib/transform` |
| typia native adapter | `packages/transform/native` |
| analyzer / emitter | `packages/core/native` |
| bundler adapter | `@typia/unplugin` |

## 읽기 순서

1. [01-overview.md](01-overview.md)
2. [02-data-flow.md](02-data-flow.md)
3. [03-package-graph.md](03-package-graph.md)
4. [04-transformation-pipeline.md](04-transformation-pipeline.md)
