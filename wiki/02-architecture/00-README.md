# 02. 아키텍처 (Architecture)

## 읽기 순서

1. [01-overview.md](01-overview.md) — 한 장의 그림
2. [02-data-flow.md](02-data-flow.md) — 한 호출이 코드가 되기까지 (9단계)
3. [03-package-graph.md](03-package-graph.md) — 9개 패키지 의존 그래프
4. [04-transformation-pipeline.md](04-transformation-pipeline.md) — ts-patch vs unplugin 두 경로

## 핵심 한 줄

> 4개 박스(빌드 통합 / AST 어댑터 / 메타데이터 분석 / 코드 생성)로 깨끗히 분리. 가운데에 자체 IR(MetadataSchema). TypeScript 호환성 표면이 한 박스에 격리.
