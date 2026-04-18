# 06. 최종 의사결정 — ⚠️ 역사 문서 (Archived)

> **이 폴더는 5 사이클 분석 후 "옵션 D Hybrid B→C"를 권장한 이력이다.** 사용자가 이후 이 권장을 **폐기**하고 "ttsc+typia-go 통합"을 확정.
>
> 특히 [02-decision-matrix.md](02-decision-matrix.md)는 [09-audit/05-cycle5-decision-matrix.md](../../09-audit/05-cycle5-decision-matrix.md)가 **post-hoc rationalization으로 비판**한 매트릭스. 역사 기록으로만 의미.
>
> **최신 의사결정: [../../08-tsgo-master-plan/04-strategic-options.md](../../08-tsgo-master-plan/04-strategic-options.md) + [05-recommended-path.md](../../08-tsgo-master-plan/05-recommended-path.md)**

---

# 원본 제목: 최종 의사결정 폴더

> 사이클 2-5에 걸친 옵션 비교·의사결정·최종 권장의 모음.

## 읽기 순서

1. [01-four-options-compared.md](01-four-options-compared.md) — Cycle 2 산출물: A/B/C/D 4옵션 정교 비교
2. [02-decision-matrix.md](02-decision-matrix.md) — Cycle 4 산출물: trade-off 매트릭스
3. [03-cycle-log.md](03-cycle-log.md) — 5 사이클의 분석 진화 궤적
4. [04-final-recommendation.md](04-final-recommendation.md) — Cycle 5 산출물: 최종 권장안
5. [05-executive-briefing.md](05-executive-briefing.md) — 30초 경영 요약

## 4옵션 요약

- **A — ts-patch LTS**: TS 6.x에서만 동작, 2028 말까지. 시간 매수용.
- **B — ttsc wrapper**: tsgo Go fork + shim + 최소 patch + Node IPC bridge. 기존 typia 재사용.
- **C — typia Go port**: typia core/transform을 Go로 재구현. tsgonest 모델. 18~24 개월.
- **D — Hybrid**: 단기 B로 시간 매수, 장기 C로 이주. 비용 높음, 리스크 낮음.

## 맥락: 이 의사결정이 왜 중요한가

1. **tsgonest가 이미 v0.13.5**. typia+nestia의 NestJS 시장을 잠식 중.
2. **typical이 이미 Go 기반 typia 대안**. 옵션 C의 실현성 증명.
3. **tsgo 공식 transformer API 없음**. Microsoft 대기는 비현실.
4. **Effect-TS patch 모델 vs tsgolint shim 모델** 두 대안 존재.

→ typia 메인테이너 samchon의 **향후 5년 로드맵을 결정**하는 단일 선택.
