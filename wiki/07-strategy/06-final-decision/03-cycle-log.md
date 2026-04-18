# 03. 5 Cycles 분석 진화 로그

> 사용자의 요구 — "이 싸이클을 약 5회 반복하여 정말 완벽하게 이해" — 에 따른 사이클별 발견과 관점 변화.

## Cycle 0 (초기 분석, 이전 세션)

### 산출물
- wiki 01~07 기본 구조
- "Generate 모드 1급 시민화" 제안 (옵션 C의 유사품)

### 한계
- tsgo prior art 5개만 분석 (ttypescript, ts-patch, typescript-go, Effect-TS, unplugin-typia)
- ttsc 설계 초안
- **사용자가 Generate 모드 제안을 철회 요구**

## Cycle 1 (본 세션 시작)

### 입력
- 사용자 제안: "ttsc wrapper 직접 개발이 현실적. tsgolint / typical / tsgonest 세 저장소를 더 분석하라"

### 작업
- 3 저장소 clone (tsgolint, typical, tsgonest)
- 병렬 line-by-line 정독 (3 Agent)
- 기존 5개 + 신규 3개 = **8개 prior art 완성**

### 발견
1. **tsgolint**: `go:linkname` shim 896개로 tsgo 접근, patch 0개 — Effect-TS의 patch 모델 대안 확인
2. **typical**: **이미 typia의 Go 포팅 프로토타입이 존재** (Elliot Shepherd). v0.3.1, 자동 주입 방식
3. **tsgonest**: **typia+nestia의 Go 포팅 실제 구현**. 72K LOC Go, v0.13.5, 49 releases. **직접 경쟁자**

### 관점 변화
- 기존: "Go 포팅은 typia 규모 때문에 비현실적"
- 수정: "이미 두 프로젝트가 하고 있음. 기술 위험 해소. 경쟁 위협 증가."
- 기존: "ttsc는 Effect-TS patch 모델 기반"
- 수정: "shim + 최소 patch 하이브리드가 더 유지보수 쉬움 (tsgolint 입증)"

## Cycle 2 (옵션 비교 매트릭스)

### 작업
- 4 옵션 (A ts-patch LTS / B ttsc / C typia-go / D hybrid) 정교 비교
- 각 옵션의 비용/이득/사상/리스크 같은 깊이로 평가
- 시장 시뮬레이션 4가지

### 발견
- **옵션 C(typia-go)가 수학적 점수 최고** (8.40)
- 그러나 현실 리스크(번아웃) 반영하면 순위 달라짐
- **옵션 D(Hybrid)가 자원 있을 때 최선**
- 옵션 A 단독은 패배, 항상 B/C/D와 병행해야 함

### 관점 변화
- 기존: "ttsc 단독으로 충분"
- 수정: "ttsc는 수비. typia-go가 공격. 자원 상황에 따라 둘 중 하나 또는 둘 다"

## Cycle 3 (typia-go 상세 설계)

### 작업
- 옵션 C의 완전한 설계서 8편 (05-go-port-design/)
- TS 코드 → Go 코드 1:1 매핑 표
- 13 namespace 이식 우선순위
- 18개월 로드맵
- 10가지 리스크

### 발견
- **LOC 예산**: 70~100K Go (vs typia TS 34K, tsgonest Go 72K)
- **최대 단일 난관**: CheckerProgrammer.ts 1614 LOC → Go 분리 필요
- **MVP 범위**: validators + json + llm (M4까지 8개월) 이면 조기 출시 가능
- **핵심 차별**: LLM function calling (tsgonest에 없음) + Protobuf + 13 namespace

### 관점 변화
- 기존: "18~24 개월"
- 수정: "MVP는 12~14개월. 나머지는 v1.1+. 조기 출시가 경쟁 유리"
- 기존: "protobuf/random 필수"
- 수정: "우선순위 최하. v1.1로 미뤄도 됨"

## Cycle 4 (의사결정 매트릭스)

### 작업
- 8개 기준 × 4 옵션 = 32 셀 가중 평가
- 시나리오 3종 (혼자/조력자1인/자원충분) 별 권장
- 시간별 재점검 지점 설정

### 발견
- **시나리오 S1 (혼자)**: B가 현실적 답
- **시나리오 S2 (조력자 1인)**: C가 답
- **시나리오 S3 (자원 충분)**: D가 답
- samchon 현재 상황은 **S1~S2 중간** — 결정 필요

### 관점 변화
- 기존: "옵션 하나 선택"
- 수정: "현실은 시나리오 기반. 자원 변화에 따라 동적 조정"

## Cycle 5 (최종 종합)

### 작업
- [04-final-recommendation.md](04-final-recommendation.md) 작성
- [05-executive-briefing.md](05-executive-briefing.md) 30초 요약
- 실행 단계 + 성공/실패 지표

### 종합 관점
1. **옵션 A는 항상 병행** (TS 6.x LTS)
2. **옵션 B를 즉시 착수** (사상 방어선, 8~12개월 내 출시)
3. **옵션 C를 병행 준비** (조력자 확보 시 가속, MVP 14개월)
4. **옵션 D가 이상적** (자원 있다면)

### 사상 불변 확인
- 모든 옵션에서 P1~P8 원칙 유지 ✓
- 사용자 경험 변경 없음 ✓
- "Pure TypeScript" 명제 보존 ✓

## 5 사이클 동안 바뀐 것 / 바뀌지 않은 것

### 바뀐 것
- "Generate 모드 밀기" → 철회
- "Effect-TS patch 모델" → "shim + 최소 patch 하이브리드"
- "Go 포팅 비현실" → "이미 두 번 구현됨"
- "ttsc 단독" → "B + 병행 C 준비"

### 바뀌지 않은 것 (사상의 중심)
- **Pure TypeScript 한 명제로 모든 결정 연역**
- **사용자 API `typia.is<T>(input)` 불변**
- **P1~P8 원칙**
- **LLM function calling이 typia 해자**

## 이 분석의 한계

1. **측정 근거 부족**: tsgonest 실제 성능 벤치, IPC 오버헤드 실측 없음
2. **시장 데이터 부족**: typia / tsgonest / typical의 실사용자 수·비중 정확치 없음
3. **인력 가정**: samchon 개인 상태·동반자 관계 모름
4. **외부 변수**: Microsoft의 향후 결정(공식 transformer API 등) 예측 불가

이 한계들을 인지한 상태에서, **가능한 최선의 정보 기반 권장**이 다음 문서.

## 한 줄 요약

> **5 사이클의 분석은 "Go 포팅이 생각보다 가능하고, 위협도 생각보다 크다"로 수렴.** 권장안은 자원 상황에 따라 B→D로 동적 조정. 사상은 어느 경우에도 불변.

→ [04. 최종 권장안](04-final-recommendation.md)
