# 02. 아키텍처 (Architecture)

> ⚠️ **이 폴더의 성격**: typia v12 (2026-04 현재)의 **현재 구현** 아키텍처를 기술한다. **2027~2029 사이 Go 포팅**으로 많은 부분이 바뀐다 — 그 미래 아키텍처는 [08-tsgo-master-plan/](../08-tsgo-master-plan/) 참조.
>
> 또한 typia는 혼자가 아니라 nestia·agentica·autobe와 **4층 피라미드 세트**로 존재한다. [10-ecosystem/04-philosophy-pyramid.md](../10-ecosystem/04-philosophy-pyramid.md) 참조.

## 읽기 순서

1. [01-overview.md](01-overview.md) — 한 장의 그림 (typia 내부)
2. [02-data-flow.md](02-data-flow.md) — 한 호출이 코드가 되기까지 (9단계)
3. [03-package-graph.md](03-package-graph.md) — 9개 패키지 의존 그래프
4. [04-transformation-pipeline.md](04-transformation-pipeline.md) — ts-patch vs unplugin 두 경로 (현재)

**관련 문서**:
- [10-ecosystem/04-philosophy-pyramid.md](../10-ecosystem/04-philosophy-pyramid.md) — typia가 속한 4층 피라미드
- [08-tsgo-master-plan/06-ttsc-specification.md](../08-tsgo-master-plan/06-ttsc-specification.md) — 미래 아키텍처 (ttsc + typia-go)

## 핵심 한 줄

> 4개 박스(빌드 통합 / AST 어댑터 / 메타데이터 분석 / 코드 생성)로 깨끗히 분리. 가운데에 자체 IR(MetadataSchema). TypeScript 호환성 표면이 한 박스에 격리.

## 현재 vs 미래 (요약)

| | 현재 (v12) | 미래 (v14, 2029 Q2) |
|---|---|---|
| 빌드 도구 | tsc + ts-patch | ttsc (Go 바이너리) |
| 엔진 | @typia/core TS 30,307 LOC (transform 포함 시 34,613) | Go 100~150K LOC (ttsc 내장) |
| 사용자 API | `typia.is<T>(input)` | **동일** |
| tsconfig plugins | `typia/lib/transform` | **동일** |
| 설치 | `npm i typia ts-patch` + prepare | `npm i typia` 끝 |

상세 로드맵: [08-tsgo-master-plan/08-implementation-timeline.md](../08-tsgo-master-plan/08-implementation-timeline.md).
