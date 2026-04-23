# Audit 6 — 저장소 실측 대조표

> typia와 관련 reference repository를 대조 측정한 결과.

## 측정 표 (2026-04-18 기준)

| 저장소 | 항목 | Wiki 주장 | 실측 | 오차 |
|---|---|---|---|---|
| **tsgonest** | Go LOC | ~72,200 | **72,190** | ≈정확 ✓ |
| | Go 파일 수 | - | 140 | - |
| | shim 패키지 | 10 | 11 (replace 10 + shim 디렉토리 11) | +1 |
| | patches 파일 | 최소 | **3** | 새 정보 |
| | 최신 커밋 | - | 67e0faf (2026-04-15) | - |
| **tsgolint** | `//go:linkname` 개수 | **896** | **910** | **+14 (+1.6%)** |
| | shim 디렉토리 | **15** | **12** | **−3 (−20%)** |
| | rules 디렉토리 | 59 | 59 + | 유효 |
| **effect-tsgo** | `_patches` 파일 | **24** | **23** | **−1 (−4.2%)** |
| | patch LOC 합계 | ~1,200 | **1,312** | ≈정확 |
| | 주요 Go 모듈 (etscore 등) | 존재 | 확인됨 | ✓ |
| | flake.nix / go.work | 존재 | 확인됨 | ✓ |
| **typical** | Go LOC | - | **14,566** | 새 정보 |
| **typescript-go** | `_packages` npm | - | 3개 | - |
| **typia (메인)** | core/src TS LOC | - | **30,307** | - |
| | transform/src TS LOC | - | **4,306** | - |
| | interface/src TS LOC | - | **8,508** | - |
| | typia/src TS LOC | - | **7,544** | - |
| | **합계** | **34,613 (과소)** | **50,665 (core+transform+interface+typia)** | **+46%** |
| | CheckerProgrammer.ts | 1,614 | **1,614** | ✓ 정확 |
| | RandomProgrammer.ts | ~1,200 | **1,200** | ✓ 정확 |
| | JsonStringifyProgrammer.ts | 1,129 | **1,129** | ✓ 정확 |
| | 버전 | 12.0.2 | **12.0.2** | ✓ |
| | 커밋 | - | 26681f4e08 (2026-04-18) | - |
| | 컨트리뷰터 | - | **104명** | 새 정보 |
| **ttypescript** | 버전 | - | **1.4.1** | - |
| | 최신 커밋 | - | 0c36bbf (2023-06-23) | - |
| **ts-patch** | 버전 | - | **3.3.0** | - |
| | 컨트리뷰터 | - | **13명** | - |
| **unplugin-typia** | 최신 커밋 | - | c7cbc58 (2025-06-14, archiving) | - |

## 결론

- **정확**: typia 주요 파일 LOC (CheckerProgrammer, Random, JsonStringify)
- **경미 오차**: tsgolint linkname (+1.6%), Effect patch (−4.2%), tsgonest shim (+1)
- **중대 오차**:
  - **tsgolint shim 디렉토리 15→12 (−20%)**
  - **typia 전체 LOC 34,613→50,665 (+46%)** — 범위 정의가 흐려 core+transform만 센 오류
- **새 정보**: 컨트리뷰터 수 104명 (typia), ts-patch 13명, tsgonest 3개 patch
