# 01. Four Options Compared (Cycle 2)

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 사이클 2의 산출물. 4옵션 각각을 같은 깊이로 정직하게 평가.
> 입력 자료: [02-prior-art/](../04-ttsc-design/02-prior-art/) 8편 + [05-research/](../../05-research/) 3편.

## 옵션 요약표

| 옵션 | 한 줄 정의 | 대표 선례 |
|---|---|---|
| **A** | TS 6.x LTS + ts-patch(samchon fork)로 2028 말까지 잔존 | samchon의 `ts-patch-typescript-6.0` |
| **B** | ttsc = tsgo Go submodule + shim + 최소 patch + Node bridge | Effect-TS/tsgo + tsgolint 하이브리드 |
| **C** | typia core/transform을 Go로 재구현 = typia-go | tsgonest, typical |
| **D** | 단기 B로 시간 매수, 장기 C로 이주 | — (신규) |

## 공통 전제 조건

모든 옵션에 공통:
- 사용자 코드 변경 0 (사상 양보 0)
- `tsconfig.json plugins[]` 스키마 호환
- `typia.is<T>(input)` 등 사용자 API 불변
- Standard Schema 어댑터 병행 (옵션 무관)

## 옵션 A. TS 6.x LTS + ts-patch fork

### 범위
- TS 6.x 유지 (2028 말까지)
- samchon이 ts-patch fork를 직접 유지 (보안 패치, TS 6.0 호환, 버그 수정)
- typia 내부 코드 변경 0
- 신규 기능 추가 0

### 비용
- **개발**: 0 person-month (유지보수만)
- **유지보수**: 연 20~40시간
- **기회비용**: 매우 큼 — 신규 사용자 0

### 이득
- 투자 비용 최소
- 기존 사용자 안정
- Go 스킬 불필요
- typia 다른 기능(LLM 등) 개발 시간 확보

### 리스크
- **가장 심각**: TS 7이 주류 되면 (2027 H1~) typia는 신규 사용자 0
- tsgonest/typical이 생태계 장악
- **2028 이후 typia 퇴장 시나리오**

### 사상 일관성
- 100% — 기존 그대로

### 실행 가능성
- 매우 쉬움, 이미 fork 존재

### 평가
> **단독으로는 답이 아님**. B 또는 C와 함께 있어야만 의미 있음.

## 옵션 B. ttsc Wrapper (하이브리드)

### 범위 (수정판, tsgolint 발견 반영)
```
ttsc-go 바이너리:
  typescript-go (git submodule, fork 아님)
  + shim/ 15개 (go:linkname, gen_shims 자동생성)
  + patches/ 1~3개 (transform chain hook만)
  + ttsccore/ (plugins 파싱, config)
  + ttschooks/ (transform 주입 지점)
  + ttscbridge/ (MessagePack IPC to Node)

@ttsc/node-bridge (Node):
  typia transformer 그대로 재사용
  MessagePack IPC 수신
  ts.factory로 AST 재구성 / 다시 직렬화

@ttsc/cli (Node):
  CLI entry, tsconfig 파싱, spawn 제어
```

### 비용
- **개발**: 12 person-months (Phase 0~4)
- **유지보수**: 매 tsgo release당 5~15분 (shim 자동생성 + 최소 patch rebase)
- 7 플랫폼 바이너리 배포 인프라

### 이득
- **기존 typia Node 코드 100% 재사용** (30K LOC)
- 사상 양보 0
- 사용자 setup 마찰 감소 (npx typia setup 자동)
- 생태계 확장 (3rd party transformer도 지원)

### 리스크
- **IPC 오버헤드**: TypeChecker 호출마다 Go→Node 왕복. batch API로 완화 가능하나 완전 해결은 측정 필요
- Go 스킬 필요 (~3K LOC Go)
- 매 tsgo release 추적
- Microsoft가 공식 API 내놓으면 일부 재작업 (그러나 facade이므로 사용자 불변)

### 사상 일관성
- 100% (모든 8원칙 유지)

### 성능 (추정)
- tsc + ts-patch 대비 3~5× 빠름 (tsgo 속도 상당 보존)
- tsgo 단독 대비 1.5~2× 느림 (IPC 비용)

### 실행 가능성
- 중~높 (prior art 결합으로 바로 시작 가능)

### 평가
> **보수적 답**. 기존 자산 보존. tsgonest 공세에 대한 수비.

## 옵션 C. typia Go Port (typia-go)

### 범위 (tsgonest 모델 차용)
```
typia-go 단일 Go 바이너리:
  typescript-go (git submodule)
  + shim/ (13개 shim, tsgolint/tsgonest 합집합)
  + patches/ (0~2개, emit rewrite hook만)
  + internal/metadata/      (MetadataSchema Go 재구현)
  + internal/analyzer/      (MetadataFactory Go 재구현)
  + internal/codegen/       (Programmers 13개 Go 재구현)
  + internal/openapi/       (OpenAPI 변환)
  + internal/llm/           (LLM 스키마·function calling)
  + internal/protobuf/      (Protobuf encode/decode)
  + internal/random/        (랜덤 생성)
  + internal/http/          (HTTP 디코딩)
  + internal/rewrite/       (controller 자동 주입, 선택)
  + internal/cli/           (CLI 진입)

npm 패키지:
  @typia/typia (CLI 런처, Node wrapper 얇음)
  @typia/typia-{platform}-{arch} (바이너리 7개)
  @typia/interface (기존 유지, 타입만)
  @typia/runtime (기존 utils 유지)
```

### 비용
- **개발**: **18~24 person-months** (typia 13 namespace 전체 포팅)
- **유지보수**: 매 tsgo release당 ~10분 (shim 재생성 + patch rebase)
- Go 스킬 필수
- 기존 TS core 폐기 (30K LOC 버림)

### LOC 예산 계산
- tsgonest 72K LOC로 4/13 namespace 구현
- typia 13 namespace 전체면 산술적 200K+
- 실제로는 metadata schema 공유로 100~150K LOC 예상
- **Go는 TS보다 LOC 2~3배 많이 씀**

### 이득
- **tsgo 네이티브 속도** (tsgonest 실측 10× tsc)
- IPC 오버헤드 0
- Node 의존 사라짐 — 단일 Go 바이너리
- 설치 마찰 최소 (`npm i typia`로 끝)
- tsgonest와 동등 이상 포지션 확보
- 장기 유지보수 언어 통합

### 리스크
- **개발 기간 2년**: 그 동안 tsgonest가 NestJS 시장 확정 장악
- **Go 스킬 부담**: samchon이 Go 학습 + 커뮤니티도
- **기존 TS 코드 폐기**: 심리적 저항 있음
- **버그 재도입**: typia v12의 수년간 검증된 버그픽스가 재현될 필요
- **LLM / Protobuf 같은 특수 기능 이식 비용 큼**

### 사상 일관성
- 사용자 측: 100% (API 동일, tsconfig 동일)
- 내부: 개발자 사상 충돌 (TS-first 철학 ↔ Go 구현)

### 성능 (tsgonest 실측 기반)
- tsc + ts-patch 대비 **~10×**
- tsgo 단독 대비 동일 또는 1.1× (emit 단계만 추가)

### 실행 가능성
- 중 — 증명됐지만 비용 큼

### 평가
> **공격적 답**. tsgonest와 정면 경쟁. 미래 5년에 대한 투자.

## 옵션 D. Hybrid — 단기 B, 장기 C

### 범위
```
Year 1 (2026): Phase 0~4 of ttsc (옵션 B)
  → ttsc v1.0 출시, 사용자 TS 7 전환 경로 확보

Year 2 (2027): typia-go Phase 0~3 병행 착수
  → Go 포팅의 분석기·metadata schema 완성
  → ttsc 유지 + typia-go alpha

Year 3 (2028): typia-go v1.0 + ttsc deprecation
  → 사용자에게는 무관 (API 동일)
  → 내부적으로 완전 Go 이주
```

### 비용
- **개발**: 30+ person-months (B 12 + C 18~24, 일부 중복 가능)
- **유지보수**: 일정 기간 둘 다 유지

### 이득
- 시간 매수 ✅ (단기 사용자 보호)
- 장기 정답 도달 ✅ (Go 네이티브)
- 중간에 시장 관찰 후 C 결정 가능 (옵션성)

### 리스크
- **개발 피로**: 30개월 연속 작업
- **전환 혼란**: ttsc → typia-go 전환 시 기존 사용자 대응
- **이중 지출**: B와 C의 중복 투자
- **경쟁자 선점**: 3년이면 tsgonest가 완전 장악 가능

### 사상 일관성
- 100% — 사용자 경험 불변

### 실행 가능성
- 자원 충분하면 최고, 혼자면 매우 어려움

### 평가
> **자원 많을 때 최적**. samchon 혼자면 부담 큼.

## 직접 비교 표

| 차원 | A (ts-patch LTS) | B (ttsc) | C (typia-go) | D (Hybrid) |
|---|---|---|---|---|
| **개발 기간** | 0 | 12m | 18~24m | 30+m |
| **Go 스킬** | ❌ | 약간 | 필수 | 필수 |
| **기존 TS 자산 재사용** | 100% | 100% | 0~20% | 100% → 0 |
| **사용자 setup** | 기존 그대로 | 한 글자(`tsc`→`ttsc`) | 거의 기존 그대로 | 순차 전환 |
| **성능 vs tsc** | 기존 | ~3× | **~10×** | 3× → 10× |
| **성능 vs tsgo 단독** | — | 0.5× | 0.95× | 0.5× → 0.95× |
| **tsgonest 대응** | ❌ | 보수 | 공격 | 모두 |
| **유지보수 비용** | 20h/yr | ~40h/yr | ~40h/yr | 60h/yr |
| **장기 생존 (2030+)** | 불가 | 가능 | 유리 | 유리 |
| **초기 리스크** | 낮 | 중 | 높 | 중→높 |

## 사상 양보 점검

| 원칙 (P1~P8) | A | B | C | D |
|---|---|---|---|---|
| P1 MetadataSchema IR | ✅ | ✅ | ✅ (Go 재구현) | ✅ |
| P2 Programmer 패턴 | ✅ | ✅ | ✅ | ✅ |
| P3 public API only | ✅ | ✅ | shim/linkname (Go 관례) | ✅ |
| P4 모듈 식별 | ✅ | ✅ | 경로 기반 (Go) | ✅ |
| P5 얇은 어댑터 | ✅ | ✅ | 어댑터 불필요 | ✅ |
| P6 캐시 | ✅ | ✅ | ✅ | ✅ |
| P7 path 합성 | ✅ | ✅ | ✅ | ✅ |
| P8 N표준 동시 | ✅ | ✅ | ✅ | ✅ |

→ 4 옵션 모두 **사용자 관점 사상 일관성 100%**. 내부 구현 언어만 다름.

## 시장 시뮬레이션 (2027-2029)

### 시나리오 A만 실행
- 2028년: typia 사용자 -70% (TS 7 전환 못 함)
- tsgonest가 NestJS 시장 장악
- typical이 범용 검증 시장 잠식
- 2030 typia 실질 deprecated

### 시나리오 B만 실행
- 2027년: typia 기능 유지. 사용자 전환 완료.
- 2028년: tsgonest와 공존 (typia는 LLM/Protobuf 차별화)
- 2030년: typia 유지되나 tsgonest가 NestJS만큼은 주도

### 시나리오 C만 실행
- 2026년: typia 사용자 불안 (개발 가시성 없음)
- 2027년: tsgonest 선점 가속
- 2028년: typia-go v1.0 출시 — 시장 회복 가능하나 시간 잃음

### 시나리오 D (B → C)
- 2027년: typia 방어선 구축
- 2028년: typia-go alpha, 시장 재점령
- 2029년: typia-go v1.0, LLM/Protobuf 해자로 tsgonest 차별화

## 잠정 결론 (Cycle 2 시점)

> **옵션 D (Hybrid)가 이상적이나 자원 집중 필요. samchon 혼자면 B+강화된 A, 자원 확보되면 C 병행.**

다음 사이클에서 구체 비용·일정·의사결정 기준을 더 정교화.

→ [02-decision-matrix.md](02-decision-matrix.md) (Cycle 4 산출물)으로 발전
