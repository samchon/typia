# typia wiki — 읽기 가이드

> 작성: 2026-04-18 (Claude Opus 4.7 + samchon 협업)
> 목적: typia 코드베이스 전수 분석, 사상 정리, 피드백·개선점 도출, tsgo 대응 전략 기획

## 어떤 순서로 읽으면 되나

폴더와 파일 모두 번호 prefix(`01-`, `02-`, ...)가 매겨져 있다. **번호 순서대로 읽으면 된다**. 각 문서 끝에 다음 문서로의 링크가 있다.

```
00-INDEX.md                   ← 지금 이 문서

01-philosophy/                사상부터 시작 (★ 가장 중요)
  01-introduction.md          한 줄 정의
  02-pure-typescript.md       사상의 4중 의미
  03-design-principles.md     사상 → 코드 8원칙
  04-positioning.md           좌표축 위 typia 위치

02-architecture/              구조
  01-overview.md              한 장 그림
  02-data-flow.md             한 호출이 코드 되기까지
  03-package-graph.md         9패키지 의존 그래프
  04-transformation-pipeline.md  ts-patch vs unplugin 두 경로

03-packages/                  패키지별 깊은 분석
  01-interface.md
  02-core.md
  03-transform.md
  04-typia-utils-unplugin.md
  05-llm-integrations.md
  06-website.md

04-features/                  기능별 사용자 관점
  01-validators.md
  02-json.md
  03-llm.md
  04-protobuf.md
  05-random.md
  06-misc.md

05-research/                  외부 리서치 (사실 자료)
  01-tests-and-benchmark.md
  02-competitors.md
  03-tsgo-status.md           ← 위협의 사실 자료

06-feedback/                  피드백 (★ 사상 비판 + 개선)
  01-strengths.md             정직한 강점 11
  02-weaknesses.md            정직한 약점 13
  03-improvement-proposals.md  실행 가능한 액션 14
  04-philosophy-critique.md    사상 자체에 대한 비판 8

07-strategy/                  전략기획서
  01-tsgo-strategy.md         tsgo 대응 (★ 핵심)
  02-roadmap.md               18개월 시간축
  03-positioning-actions.md   메시징 액션
```

## 가장 빠른 길 (시간 없으면)

급할 때 이 7개만:

1. [01-philosophy/01-introduction.md](01-philosophy/01-introduction.md) — typia가 무엇인가
2. [02-architecture/01-overview.md](02-architecture/01-overview.md) — 한 장 그림
3. [06-feedback/01-strengths.md](06-feedback/01-strengths.md) — 잘하는 것 11
4. [06-feedback/02-weaknesses.md](06-feedback/02-weaknesses.md) — 약점 13
5. [06-feedback/03-improvement-proposals.md](06-feedback/03-improvement-proposals.md) — 액션 14
6. [07-strategy/01-tsgo-strategy.md](07-strategy/01-tsgo-strategy.md) — tsgo 대응
7. [07-strategy/02-roadmap.md](07-strategy/02-roadmap.md) — 18개월 로드맵

## 만든 사람과 한계

이 wiki는 Claude Opus 4.7이 typia 저장소(2026-04-18 기준 master)를 line-by-line 정독한 결과 + 9개 병렬 탐색 에이전트의 보고 + WebSearch/WebFetch 광범위 리서치를 종합한 것이다. 다음 한계가 있다:

- **사실 정확성**: 코드 인용은 file_path:line_number로 제공했으나, 빠르게 변하는 외부 사실(tsgo API, 타 라이브러리 버전, MCP 스펙)은 [05-research/](05-research/) 의 인용 URL을 다시 확인 권장.
- **사상 해석**: [01-philosophy/](01-philosophy/) 와 [06-feedback/04-philosophy-critique.md](06-feedback/04-philosophy-critique.md)는 작성자(Claude)의 해석. samchon님 의도와 다를 수 있음.
- **전략 추천**: [07-strategy/](07-strategy/) 는 외부 관점의 제안. 최종 의사결정은 메인테이너의 판단.

## 핵심 요약 (TL;DR)

| 차원 | 결론 |
|---|---|
| 사상 | "Pure TypeScript"는 4중 명제 (표현/시점/영역/IR 단일성) — 코드 전반에 일관 |
| 강점 | 자체 IR 보유, public API only, 다영역 통합, LLM tool 깊이, 객관적 속도 우위 |
| 약점 | tsgo 종속, Standard Schema 미지원, setup 마찰, 회귀 추적 부재 |
| 가장 시급 | **(a) Standard Schema 어댑터, (b) Generate 모드 1급 시민화, (c) tsgo 입장문 발표** |
| 18개월 후 | "transformer 시대" → "generate 1급 + transformer 옵션 + tsgo 호환" 시대 |

---

질문이나 추가 분석이 필요하면 메인 대화로 돌아가서 요청.
