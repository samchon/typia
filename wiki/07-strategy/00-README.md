# 07. 전략기획서 — ⚠️ 역사 문서 (Archived)

> **이 폴더는 2026-04-18 세션의 작업 이력(5 사이클 분석)이다. 현재 진실이 아니다.**
>
> - 사용자가 이후 "옵션 중 선택"을 **폐기**하고 "ttsc와 typia-go 통합"을 확정 (세션 7)
> - 사용자가 이후 "typia·nestia·agentica·autobe 세트 전환"을 확정 (세션 9)
>
> **최신 진실은 [08-tsgo-master-plan/](../08-tsgo-master-plan/) + [10-ecosystem/](../10-ecosystem/)**.
> 이 07 폴더는 **분석 궤적을 기록**하기 위해 보존. 내용이 현재 결정과 충돌하면 **08과 10이 우선**.

---

# 원본 제목: 전략기획서 (★ tsgo 대응 + 24개월 로드맵 + ttsc 설계)

> 사상을 양보하지 않으면서 사상의 적용 범위를 넓히는 길

## 읽기 순서

1. [01-tsgo-strategy.md](01-tsgo-strategy.md) — **v2 재작성**. tsgo 대응의 중심축은 ttsc
2. [02-roadmap.md](02-roadmap.md) — **v2 재작성**. Q2 2026 ~ 2028 24개월 시간축
3. [03-positioning-actions.md](03-positioning-actions.md) — 메시징·홈페이지·발표·블로그 액션
4. **[04-ttsc-design/](04-ttsc-design/)** — ★ ttsc 설계서 (폴더 내 문서 10개)

## 핵심 한 줄

> **즉시 착수: ttsc Phase 0 spike (2주).** 이 한 결정이 typia의 다음 5년을 결정한다.

## 3-Track 요약

- **Track 1**: TS 6.x LTS 유지 (ts-patch 또는 samchon의 fork, ~2028 말)
- **Track 2**: **ttsc 직접 개발** (Phase 0~4, 12개월) — 사용자 API 불변
- **Track 3**: Microsoft 공식 transformer API 기회 대응 (2028+)

## 사상 양보 0

P1~P8 원칙 모두 유지. [04-ttsc-design/03-ttsc-vision.md](04-ttsc-design/03-ttsc-vision.md) 공리 A 참조.

## v1 대비 변경

v1 초안의 "Track 2 = Generate 모드 1급 시민화" 제안은 **철회**. Generate 모드는 사용자 API 변화를 수반하는 사상 양보였음. v2에서는 **ttsc 직접 개발**로 사상 양보 0의 길 선택. 상세 근거: [04-ttsc-design/01-problem-statement.md](04-ttsc-design/01-problem-statement.md) 및 [04-ttsc-design/07-risks-and-alternatives.md](04-ttsc-design/07-risks-and-alternatives.md).
