# 04. ttsc Design — ⚠️ 역사 문서 (Archived)

> **이 폴더는 초기(v1) 설계 이력이다.** 당시에는 "ttsc를 만들고 typia core는 TS 유지" 관점이었으나, 이후 사용자가 "ttsc와 typia-go를 **한 시스템**으로 통합"으로 확정.
>
> **최신 ttsc 설계: [../../08-tsgo-master-plan/06-ttsc-specification.md](../../08-tsgo-master-plan/06-ttsc-specification.md)**
> **패키지 포팅 경계: [../../08-tsgo-master-plan/16-package-port-boundary.md](../../08-tsgo-master-plan/16-package-port-boundary.md)**
>
> 이 폴더의 **Prior Art 분석(02-prior-art/) 8편은 사실 자료로 여전히 유효**. 아키텍처·일정 문서는 **구식**.

---

# 원본: ttsc Design — typia 저자가 직접 유지할 tsgo transformer wrapper

> 이 폴더는 typia 저자(samchon)가 TypeScript 7.0 (Corsa, Go port) 시대에도 typia의 핵심 사상("Pure TypeScript + transformer-based codegen")을 지키기 위해 **직접 개발하고 유지할 tsgo wrapper 패키지의 설계 문서** 입니다. 이름은 관례에 따라 **ttsc** (transformer TypeScript 계승).

## 왜 Generate 모드가 답이 아니었는가

이전 `01-tsgo-strategy.md` (초안)에서는 "Generate 모드를 1급 시민화"를 제안했지만, 이 접근은 두 가지 이유로 **사상 양보**입니다:

1. **사용자 API가 바뀐다**. `typia.is<T>(input)` 한 줄이 `import { isMember } from "./member.generated"`로 바뀌면 "Pure TypeScript"의 핵심("타입 한 번, 어디서나 호출")이 깨진다.
2. **IDE/watch 경험이 악화**. 생성 파일과 원본 간 동기화는 ts-patch의 transparent emit보다 열등하다.

→ **typia의 정체성을 지키려면 tsgo 위에 직접 transformer 주입 경로를 만들어야 한다**. 그 경로가 ttsc.

## 이 폴더의 읽기 순서 (v2 업데이트, 8 prior art)

```
00-README.md  (지금 문서)
01-problem-statement.md      # 왜 ttsc가 필요한가
02-prior-art/                # 선행 연구 8건 line-by-line
  00-README.md
  01-ttypescript.md          # 네이밍과 철학의 원류
  02-ts-patch.md             # 현재 typia가 쓰는 것
  03-typescript-go-internals.md  # tsgo 내부 지도
  04-effect-tsgo.md          # patch 방식 wrapper
  05-unplugin-typia.md       # 번들러 통합 사례
  06-tsgolint.md             # ★ go:linkname shim (patch 0개) — v2 핵심 발견
  07-typical.md              # Go 기반 typia 프로토타입 (이미 존재)
  08-tsgonest.md             # ★★ typia+nestia의 Go 구현 (직접 경쟁자)
03-ttsc-vision.md            # 사상과 목표
04-ttsc-architecture.md      # ★ v2 재작성: shim + 최소 patch 하이브리드
05-ttsc-implementation-plan.md  # 12개월 구현 로드맵
06-ttsc-interaction-with-typia.md  # typia 쪽 변경점
07-risks-and-alternatives.md
08-open-questions.md
09-appendix/                 # 배경 기술 보충
  00-README.md
  01-ipc-api-details.md      # PR #711 IPC 프로토콜 상세
  02-libsyncrpc.md           # Microsoft sync IPC 라이브러리
  03-effect-tsgo-patch-list.md # Effect-TS 24 patch 목록 (ttsc 예산 비교)
```

## v2 핵심 변경 요약

- **아키텍처 v2**: Effect-TS의 patch 24개 대신 tsgolint의 shim 13개 + 최소 patch 1~3개 (shim 자동생성)
- **prior art 확장**: 5 → 8 저장소 분석 추가 (tsgolint, typical, tsgonest)
- **옵션 C (typia-go) 별도 설계**: [05-go-port-design/](../05-go-port-design/)로 분리
- **최종 권장**: [06-final-decision/](../06-final-decision/) 참조 (Hybrid B→C 권장)

## 한 줄 결론 (미리)

> **ttsc = tsgo Go 소스의 minimal fork + Go 레벨 transformer hook + JS 클라이언트 라이브러리.** Effect-TS/tsgo가 이미 증명한 모델을 typia 생태계에 맞춰 축소·최적화한다. 유지보수 비용은 크지만, 사상 양보는 0이다.
