# typia wiki — 읽기 가이드 (v4)

> 작성: 2026-04-18 (Claude Opus 4.7 + samchon 협업)
> 범위: typia 전수 분석, 사상, 피드백, **tsgo 마스터 플랜**, **생태계 전환 계획** (nestia·agentica·autobe)
> 규모: 113 파일

## 현재 단일 진실원

| 주제 | 위치 |
|---|---|
| **tsgo 마스터 플랜** | [08-tsgo-master-plan/](08-tsgo-master-plan/) — 17편 |
| **세트 생태계** (nestia·agentica·autobe) | [10-ecosystem/](10-ecosystem/) — 6편 |
| **독립 감수 기록** | [09-audit/](09-audit/) — 8편 |
| **작업 이력** (구식화된 옵션 비교 시절) | [07-strategy/](07-strategy/) — 역사 보존, **현재 진실 아님** |

→ **충돌 시 08 + 10이 우선**.

## 폴더 전체 지도

```
00-INDEX.md                   (이 문서)

── 기초 지식 ──
01-philosophy/                사상 (AI 재구성임을 상단에 명시)
  00-README
  01-introduction             한 줄 정의
  02-pure-typescript          "4중 의미" (AI 해석)
  03-design-principles        "8 패턴" (AI 귀납, 공식 아님)
  04-positioning              좌표축 위 typia

02-architecture/              현재 v12 구조 (미래는 08 참조)
  00-README  01-overview  02-data-flow  03-package-graph  04-transformation-pipeline

03-packages/                  9 패키지 깊은 분석
  00-README  01-interface  02-core  03-transform
  04-typia-utils-unplugin  05-llm-integrations  06-website

04-features/                  기능별 (사용자 관점)
  00-README  01-validators  02-json  03-llm
  04-protobuf  05-random  06-misc

05-research/                  외부 리서치 (사실 자료)
  00-README  01-tests-and-benchmark  02-competitors  03-tsgo-status

── 평가·피드백 ──
06-feedback/                  감수 반영 표시됨
  00-README  01-strengths  02-weaknesses
  03-improvement-proposals  04-philosophy-critique

── 의사결정 ──
08-tsgo-master-plan/          ★★★ tsgo 마스터 플랜 (단일 진실원)
  00-README  01-preface  02-threat-landscape  03-technical-foundations
  04-strategic-options        v2: "옵션 비교" 폐기, ttsc+typia-go 통합
  05-recommended-path         단일 경로 실행
  06-ttsc-specification       ttsc 상세 (일부 v2 초기 잔재 마킹됨)
  07-typia-go-specification   typia-go 상세
  08-implementation-timeline  Phase 0~6
  09-risk-register            15 리스크
  10-success-criteria         KPI / Red flag
  11-communication-plan       공식 입장·컨퍼런스
  12-governance               의사결정 체계
  13-appendix-facts           모든 수치 출처 (v2 재실측 반영)
  14-appendix-glossary        용어집
  15-executive-summary        ★ 1 페이지
  16-package-port-boundary    ⭐ 9 패키지 Go/TS 결정
  17-phase0-kickoff           ⭐ v2 신규: 첫 4주 실행 가이드 + cycle 2 재실측

10-ecosystem/                 ⭐ typia + nestia + agentica + autobe 세트
  00-README
  01-nestia-and-tsgo          nestia 8 패키지 + Go 전환 (~55K Go 추가)
  02-agentica                 LLM function calling (typia.llm 소비)
  03-autobe                   vibe coding 실증 (94K TS, 40+ agents, 65+ events)
  04-philosophy-pyramid       5층 피라미드 (tsgo→typia→nestia→agentica→autobe)
  05-integrated-tsgo-transition  4 프로젝트 동시 전환 일정

── 감수·메타 ──
09-audit/                     ★ 독립 감수 (wiki 공격적 비판)
  00-README  01~07 cycle reports

07-strategy/                  ⚠️ 역사 문서 (Archived). 39 파일, 구식
  00-README 등에 "역사" 표식 추가됨

memo/                         리뷰·개선 사이클 기록
  00-README  01~07 cycle logs  round-01
```

## 가장 빠른 길 — 역할별

### 🎯 결정자 (30분)
1. [08/15 — Executive Summary 1 페이지](08-tsgo-master-plan/15-executive-summary.md)
2. [08/16 — 패키지 Go/TS 결정](08-tsgo-master-plan/16-package-port-boundary.md)
3. [10/00 — 세트 생태계 지도](10-ecosystem/00-README.md)
4. [10/04 — 사상 피라미드](10-ecosystem/04-philosophy-pyramid.md)
5. [08/09 — 15 리스크](08-tsgo-master-plan/09-risk-register.md)

### 🏗️ 실행자 (2시간)
위 + 아래:
- [08/04 — Strategic Options v2](08-tsgo-master-plan/04-strategic-options.md)
- [08/05 — Recommended Path](08-tsgo-master-plan/05-recommended-path.md)
- [08/08 — Implementation Timeline (Phase 0~6)](08-tsgo-master-plan/08-implementation-timeline.md)
- [10/01 — nestia tsgo 통합](10-ecosystem/01-nestia-and-tsgo.md)
- [10/05 — 4 프로젝트 동시 전환](10-ecosystem/05-integrated-tsgo-transition.md)

### 🔍 감수자 (3시간)
위 전부 + 아래:
- [09/00 — 감수 결과 요약](09-audit/00-README.md)
- [09/06 — 저장소 실측 대조](09-audit/06-cycle6-repository-measurements.md)
- [09/07 — 누락된 14 관점](09-audit/07-cycle7-missing-perspectives.md)
- [08/13 — 사실 수치 출처](08-tsgo-master-plan/13-appendix-facts.md)
- [07-strategy/04-ttsc-design/02-prior-art/](07-strategy/04-ttsc-design/02-prior-art/) — 8 prior art (역사 폴더지만 **사실 자료는 유효**)

### 🧭 신규 탐색자 (typia 처음인 사람)
1. [01/01 — Introduction](01-philosophy/01-introduction.md)
2. [01/02 — Pure TypeScript 해석](01-philosophy/02-pure-typescript.md)
3. [02/01 — Architecture Overview](02-architecture/01-overview.md)
4. [04/01 — Validators](04-features/01-validators.md)
5. [10/04 — 사상 피라미드](10-ecosystem/04-philosophy-pyramid.md)

## 핵심 요약 (TL;DR, v4)

### tsgo 대응
**유일한 길**: ttsc (Go driver) + typia-go (Go engine) **통합 개발**. "옵션 중 선택" 프레임은 폐기됨. 2029 Q2 **typia v14 = Go native**.

### 패키지 경계
- **TS 유지**: `@typia/interface`, `@typia/typia` (얇게), `@typia/utils` (런타임부), `@typia/mcp/langchain/vercel`, `@typia/unplugin` (얇게)
- **Go 포팅**: `@typia/core` (30K TS; core+transform 34K) → Go engine 100~150K (tsgonest 72K/4 namespace 비례 추정). `@typia/transform`은 ttsc driver에 흡수
- **신규**: `@typia/ttsc` (Go 바이너리 + Node launcher, 7 플랫폼 배포)

### 세트 전환
typia (v14) + nestia (v12, Go transformer) + agentica (next) + autobe (next) **2029 Q2 동시 출시**.

### 즉시 착수 5 (2026 Q2)
1. 공식 입장문
2. Standard Schema 어댑터 (2~3주)
3. ttsc Phase 0 Spike (4주)
4. Edge runtime / AI-native DX 홍보
5. Go 조력자 모집

### 사용자 약속 (불변)
- `typia.is<T>(input)` 한 자도 바뀌지 않음
- `tsconfig.json plugins` 스키마 호환
- 빌드 명령 `tsc` → `ttsc` (자동화로 한 번에)
- 13 namespace 전부 유지
- LLM / Protobuf / Edge runtime 차별점 유지

## 이 wiki의 한계 (정직)

- **사상 해석** (01-philosophy)은 AI 재구성이며 samchon 공식 분류가 아님 (상단 ⚠️ 참조)
- **설계 원칙 P1~P8**은 AI 귀납이며 공식 규칙서가 아님
- **수치**는 2026-04 실측 / 감수 정정 기록. [08/13 appendix-facts](08-tsgo-master-plan/13-appendix-facts.md) 참조
- **전략 추천**은 외부 관점 제안. 최종 의사결정은 samchon 판단
- **미래 예측** (tsgo GA 시점, tsgonest 시장 점유 등)은 불확실. [08/09 risk-register](08-tsgo-master-plan/09-risk-register.md) 참조

## 변경 이력

| 버전 | 주요 변경 |
|---|---|
| v1 (초기) | 4 옵션 비교 + "Hybrid B→C" 권장 |
| v2 | "옵션 비교" 폐기, ttsc+typia-go 통합 |
| v3 | 09-audit 7편 반영 |
| v4 | 10-ecosystem 세트 전환 추가, 07 역사화, memo 사이클 반영 |
| v5 (cycle 2) | 재실측: 9 패키지 64,678 LOC, Standard Schema 부분 구현 발견, tsgonest patches 3, FUNCTORS 147, Phase 0 Kickoff 신설 |
| **v5.1 (현재, cycle 3)** | **Phase 0 비판 리뷰 후 17번 재작성**: (1) 4주→**6주 스파이크** + Week 0 사전 준비, (2) **자기 빌드 전략** 명시, (3) **pnpm workspace + Go binary** 통합 설계, (4) **sourcemap 결정 포인트**, (5) **Setup wizard v2 스펙**, (6) **Week-level abort gate**, (7) IPC 용어 분리 (spawn latency vs 공식 IPC), (8) `bin/ttsc.js` 템플릿, (9) shim 타겟 API 목록, (10) 측정 가능한 Success 기준. 09/09 audit 참조 |

---

질문·추가 분석은 메인 대화로.
