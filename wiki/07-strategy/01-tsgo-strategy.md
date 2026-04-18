# 01. tsgo 대응 전략 — ttsc 중심축 (v2 전면 재작성)

> v1 (초안)에서 제안한 "Generate 모드 1급 시민화"는 **철회**. 해당 접근은 사상 양보(사용자 API 변화)였다.
> v2 (이 문서)는 **typia 저자 samchon이 직접 개발·유지할 tsgo transformer wrapper(ttsc)를 중심축으로** 재구성.
>
> 구체 설계는 [04-ttsc-design/](04-ttsc-design/) 참조.

## Executive Summary (1분)

| 항목 | 결론 |
|---|---|
| 위협 | TS 7.0(Corsa) GA 2026 mid~late. ts-patch는 구조적으로 tsgo와 호환 불가. Microsoft 공식 transformer API는 Post-7.0 milestone·답보 상태 |
| 핵심 자산 | typia의 P3·P4 원칙(public API only + import 경로 기반 식별), MetadataSchema 자체 IR. **core 80%가 tsgo와 무관하게 살아남음** |
| 해답 | **ttsc** — tsgo Go 소스의 minimal fork + hook-only patch + Node IPC bridge. **Effect-TS/tsgo가 증명한 패턴**을 typia용으로 축소 |
| 사상 양보 | **0**. 사용자 API, tsconfig plugins 스키마, typia 내부 코드 모두 불변 |
| 비용 | 12 person-months (Phase 0~4). 매 tsgo release당 ~10분 patch rebase |
| 병행 | TS 6.x LTS 경로는 기존 ts-patch (samchon fork)로 2028 말까지 유지 |

## 왜 "기다리기 / Generate 모드 / Zod 피벗"은 답이 아닌가

| 대안 | 결과 |
|---|---|
| Microsoft 기다리기 | 2027 1년 공백. 신규 사용자 유입 0. 생태계 침식 |
| Generate 모드 1급 | 사용자 API 변화 (`typia.is<T>()` → `import { isT } from "./x.generated"`) — 사상 양보 |
| Zod 호환 런타임 피벗 | **사상 완전 포기** — typia 존재 의의 상실 |
| ttsc 직접 개발 | 비용 크나 사상 양보 0. **유일한 정답** |

## ttsc 한 줄 요약

> **tsgo Go 소스를 pin해서 fork 하고, transform chain에 "외부 transformer plugin 실행" hook을 삽입한 뒤, Go → Node 자식 프로세스로 MessagePack IPC로 AST를 왕복시킨다. 사용자는 `tsc` → `ttsc` 한 글자만 바꾸면 tsconfig의 typia transformer가 그대로 작동한다.**

상세: [04-ttsc-design/04-ttsc-architecture.md](04-ttsc-design/04-ttsc-architecture.md).

## 3-Track 재정의

### Track 1. TS 6.x LTS 유지 (~2028 말)

**목표**: 기존 사용자 안정 운영.

- 기존 ts-patch 또는 samchon의 ts-patch fork(`/mnt/d/github/contributions/ts-patch-typescript-6.0`)로 계속 동작
- 2026~2027: 보안 패치 + 버그 수정만
- 2027 말 공지: "TS 6.x 지원 2028 말 종료"
- 2028 말 종료

**비용**: 운영 부담만, 신규 개발 0.

### Track 2. **ttsc 개발** (Phase 0~4, 12개월)

**목표**: tsgo 시대에 typia 사상을 지키는 기반 인프라.

| Phase | 기간 | 핵심 |
|---|---|---|
| 0 | 2주 | 기술적 실현 가능성 spike |
| 1 | 3개월 | Walking skeleton — 단일 파일 변환 end-to-end |
| 2 | 3개월 | typia full compatibility — test suite 통과 |
| 3 | 3개월 | Production hardening — watch/cache/diagnostics |
| 4 | 3개월 | Public beta + typia setup 자동화 + v1.0 |

상세: [04-ttsc-design/05-ttsc-implementation-plan.md](04-ttsc-design/05-ttsc-implementation-plan.md).

### Track 3. Microsoft 공식 API 대응 (기회 대응)

**시점**: Microsoft가 공식 transformer API 발표 시 (빨라야 2027 H2, 현실적으로 2028+).

- ttsc의 **Go hook layer를 Microsoft 공식 API로 교체**
- 사용자 API는 불변
- ttsc는 facade로 남음 — 외부는 그대로, 내부만 진화

## 사상 일관성 점검 — 8원칙 확인

| 원칙 | Track 1 | Track 2 (ttsc) | Track 3 |
|---|---|---|---|
| P1 MetadataSchema IR 입력 | ✅ | ✅ (완전 불변) | ✅ |
| P2 Programmer 패턴 | ✅ | ✅ | ✅ |
| P3 ts.factory only | ✅ | ✅ (Node bridge도 ts.factory) | ✅ |
| P4 import 경로 식별 | ✅ | ✅ | ✅ |
| P5 얇은 어댑터 | ✅ | ✅ (Go 훅 얇게, Node bridge 얇게) | ✅ |
| P6 캐시 | ✅ | ✅ (+ ttsc 파일 캐시) | ✅ |
| P7 path 합성 | ✅ | ✅ | ✅ |
| P8 N표준 동시 도출 | ✅ | ✅ | ✅ |

→ **사상 양보 0**. 8원칙 모두 유지.

## 리스크 매트릭스 (요약)

| 리스크 | 가능성 | 영향 | 완화 |
|---|---|---|---|
| tsgo upstream 대규모 리팩토링 | 중 | 큼 | hook-only patch, CI smoke |
| Node ↔ Go IPC 오버헤드 | 중 | 큼 | batch API, 캐시, Phase 3 최적화 |
| Microsoft 공식 API 조기 출시 | 낮 | 중 | ttsc facade라 수용 가능 |
| samchon 1인 번아웃 | 중 | 매우 큼 | Effect 자동화 재사용 + 조력자 + 재정 |
| 사용자 ttsc 채택 저조 | 낮 | 중 | typia setup 자동, ts-patch와 공존 |
| 빌드/서명 인프라 | 중 | 중 | GitHub Actions + Effect flake.nix |

상세: [04-ttsc-design/07-risks-and-alternatives.md](04-ttsc-design/07-risks-and-alternatives.md).

## 외부 커뮤니케이션

### 공식 입장문 (2026 Q2 발표 권장)

```
1. 사실 인지: "TS 7이 옵니다. typia는 준비합니다."
2. 약속:
   - TS 6.x는 2028 말까지 LTS 지원
   - tsgo 대응: @typia/ttsc 별도 프로젝트로 즉시 착수
   - ttsc는 사용자 API / tsconfig plugins 스키마 그대로 유지
3. 사상 약속: "Pure TypeScript 명제는 양보하지 않습니다."
4. 사용자 액션 가이드:
   - 기존 사용자: 변경 없음 (TS 6.x)
   - TS 7 얼리어답터: ttsc beta (Q4 2026~)
```

### Microsoft / 커뮤니티 파트너십

- Issue #516 / Discussion #455 에 typia 사용 사례 코멘트
- ts-morph dsherret, Vue language tools, Effect-TS와 공동 청원
- 향후 Microsoft가 공식 API 설계 시 ttsc 쓰는 라이브러리들의 요구사항 제출

### 컨퍼런스

- TSConf 2027: "Surviving tsgo: How typia kept its soul"
- Korea JS Conference: ttsc 발표 + AutoBE 사례 결합

## 현재 위치 (2026-04) & 즉시 실행

### 이번 주
- [ ] ttsc 이름/네임스페이스 확보 (npm `ttsc`, `@typia/ttsc` 중 결정)
- [ ] 공식 입장문 초안 작성 ([04-ttsc-design/00-README.md](04-ttsc-design/00-README.md) 기반)

### 이번 달 (Phase 0 spike)
- [ ] Effect-TS/tsgo의 `flake.nix`, `setup-repo.sh`, `gen_shims` 분석 완료 (이미 wiki에 정리됨)
- [ ] `/mnt/d/github/contributions/typescript-go`에 10-line patch로 "hello from ttsc" 주입 실험
- [ ] Node ↔ Go MessagePack echo 실험
- [ ] 기술 go/no-go 결정

### 2026 Q2
- [ ] Phase 1 착수 (저장소 개설, 최소 patch set, 바이너리 빌드)
- [ ] 공식 발표
- [ ] A1 Standard Schema 어댑터 (ttsc와 병행, [06-feedback/03-improvement-proposals.md](../06-feedback/03-improvement-proposals.md))

## 한 줄 결론

> **ttsc 개발은 typia의 생존 조건이자 사상의 방어선이다. Effect-TS/tsgo가 증명한 패턴을 typia용으로 축소·특화해 12개월 안에 v1.0. 사상 양보 0, 사용자 체감 0.**

→ 상세 설계: [04-ttsc-design/](04-ttsc-design/)
→ 18개월 로드맵: [02-roadmap.md](02-roadmap.md)
→ 메시징 전략: [03-positioning-actions.md](03-positioning-actions.md)
