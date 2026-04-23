# Prior Art (선행 연구)

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/).


ttsc 설계에 앞서 line-by-line 정밀 분석한 결과.

분석 대상 저장소:

- `ts-patch`
- `tsgolint`
- `tsgonest`
- `typescript-go`
- `typical`

- `tsgolint/typescript-go/`, `tsgonest/typescript-go/`처럼 **repo 내부에 vendored/pinned `typescript-go` 트리**가 포함된 사례도 있다.
- 따라서 prior art는 top-level repo와 embedded `typescript-go` tree를 함께 읽어야 한다.

## 읽기 순서 (8편)

1. [01-ttypescript.md](01-ttypescript.md) — 이름의 원류
2. [02-ts-patch.md](02-ts-patch.md) — 현재 typia 의존
3. [03-typescript-go-internals.md](03-typescript-go-internals.md) — tsgo 내부 지도
4. [04-effect-tsgo.md](04-effect-tsgo.md) — tsgo **patch 방식** wrapper
5. [05-unplugin-typia.md](05-unplugin-typia.md) — 번들러 통합
6. [06-tsgolint.md](06-tsgolint.md) — ★ tsgo **go:linkname shim** 방식 (patch 0개)
7. [07-typical.md](07-typical.md) — typia의 **Go 포팅 프로토타입** (실증 완료)
8. [08-tsgonest.md](08-tsgonest.md) — ★★ **typia+nestia의 Go 포팅 실제 구현** (72K LOC Go, v0.13.5)

## 메타 관찰 (8편 종합)

| 프로젝트 | 시대 | 기법 | tsgo 호환 | ttsc 참고도 |
|---|---|---|---|---|
| ttypescript | ~2024 | VM.runInThisContext | ❌ | ★★★ (이름·스키마) |
| ts-patch | 2022~ | node_modules 변조 | ❌ | ★★★★ (스키마·extras 인터페이스) |
| typescript-go | 2025~ | Go 바이너리 + IPC | — | ★★★★★ (분석 대상) |
| Effect-TS/tsgo | 2025~ | **24 patch + Go hook 모듈** | ✅ | ★★★★★ (빌드 파이프라인) |
| unplugin-typia | 2024~ | ts.createProgram | ❌ | ★★★ (번들러 통합) |
| **tsgolint** | 2025~ | **0 patch + 15 shim + 896 linkname** | ✅ | ★★★★★★ (shim 모델) |
| **typical** | 2026~ | Go binary + MessagePack IPC | ✅ | ★★★★★ (Go 포팅 증명) |
| **tsgonest** | 2026~ | **Go binary + 10 shim + minimal patch + emit-time rewrite** | ✅ | ★★★★★★★ (직접 경쟁자·교과서) |

## 3가지 근본적 접근 모델

prior art 8편을 기법으로 분류하면 **3가지 근본 모델**로 수렴:

### 모델 1. Monkey-patch (JS 모듈 변조)
- ttypescript, ts-patch
- **tsgo 시대에 불가능**

### 모델 2. Upstream patch (Go 소스 수정 + hook)
- Effect-TS/tsgo
- **가능하나 유지보수 비용 중**

### 모델 3. Shim (go:linkname으로 internal API 대리)
- tsgolint, typical, tsgonest
- **최신 패턴. 유지보수 비용 낮음**
- typia-go도 여기로 가야 함

## ttsc vs typia-go (옵션 B vs 옵션 C)

| 차원 | ttsc (옵션 B) | typia-go (옵션 C) |
|---|---|---|
| Transform 실행 주체 | Node (typia 기존 코드) | Go (재작성) |
| 기존 typia 재사용 | 100% | 0~20% (metadata schema만) |
| 초기 비용 | 12 person-months | 18~24 person-months |
| 장기 유지보수 | Node+Go 병행 | Go 단독 |
| 성능 (vs tsc) | ~3× | **~10×** (tsgonest 실측) |
| 사상 양보 | 0 | 0 (사용자 API 동일) |
| IPC 오버헤드 | 있음 | 없음 |
| tsgonest 대비 위치 | 보조적 | **정면 대응** |

→ 이후 결정 문서는 08 폴더에서 읽는다.
