# 07. 리스크와 대안

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


## 8대 리스크 매트릭스

| # | 리스크 | 가능성 | 영향 | 완화 |
|---|---|---|---|---|
| R1 | tsgo upstream 대규모 리팩토링으로 patch 충돌 폭증 | 중 | 매우 큼 | hook-only patch, minimal footprint |
| R2 | Node ↔ Go IPC 오버헤드가 사용자 체감 해침 | 중 | 큼 | batch API, Type 캐시, Phase 3 측정+최적화 |
| R3 | Microsoft가 공식 transformer API를 일찍 출시 → ttsc 무용 | 낮 | 중 | ttsc는 facade. 내부를 공식 API로 교체 가능 |
| R4 | samchon 1인 유지보수 → 번아웃 | 중 | 매우 큼 | 조력자 영입, Effect-TS 자동화 도구 재사용 |
| R5 | 사용자가 ts-patch → ttsc 전환을 꺼려함 | 낮 | 중 | typia setup 자동 전환, 두 경로 공존 |
| R6 | Go 빌드/서명 인프라 운영 비용 | 중 | 중 | GitHub Actions 매트릭스, Effect flake.nix 재사용 |
| R7 | Microsoft가 tsgo 일정을 크게 미룸 | 중 | 낮 | TS 6.x LTS로 시간 매수 |
| R8 | typia `TransformerFactory`가 ts.TypeChecker에 너무 의존해 IPC 지연 심함 | 높 | 중 | MetadataFactory 레벨에서 batch query, 재귀 타입 사전 스캔 |

## 리스크 R1 상세 — upstream patch 충돌

**실제 데이터**: Effect-TS/tsgo는 24개 patch 운영 중. 매 tsgo release마다 15~60분 rebase (conflict 빈도 변동).

**ttsc 예상**: 5~10 patch만 (transformer chain hook + plugin options + shim)만 필요. **Effect의 1/3 수준**. 충돌 빈도 낮을 것.

**완화**:
- patch를 **가능한 파일 끝에만** 추가 (예: hook register 함수 추가만)
- 절대 upstream 로직 수정하지 않음
- CI에서 매 tsgo nightly에 대해 patch apply만 해보는 smoke job

## 리스크 R2 상세 — IPC 오버헤드

MessagePack stdio round-trip: 측정 자료 부족. 비교:
- Effect-TS/tsgo는 IPC 없음 (Go 내부 완결) → 오버헤드 0
- ts-patch는 in-process → 오버헤드 0
- **ttsc만 IPC** — 이것이 ttsc 고유 비용

**최악 시나리오**: typia 변환이 평균 3~5배 느려짐 → tsgo의 속도 이점 대부분 상쇄.

**대응 전략**:
1. **Prefetch**: SourceFile 전체 스캔 1회로 모든 TypeChecker 질의 선제 처리
2. **Batch**: `GetTypeOfNode([nodeId1, nodeId2, ...])` 일괄 응답
3. **Cache**: 한 파일 내 동일 Node/Type은 재요청 X
4. **Lazy**: Program proxy가 실제 호출 시점까지 delay

### Fallback 경로 (최후 수단)

IPC가 심각하게 느려서 회복 불가한 경우:
- **typia의 MetadataFactory 레벨에서 Node-side pre-analysis**
- Go는 AST 덩어리만 넘겨주고 Node가 모든 타입 추론 자체 수행 (ts.createProgram 재구성)
- IPC 호출 수 줄이는 대신 Node 메모리 증가
- `@typia/core`가 TypeChecker 대신 "pre-analyzed metadata"를 소비하도록 일부 수정 필요 (그러나 이게 오히려 typia의 자체 IR을 강화하는 방향)

## 리스크 R3 상세 — Microsoft 공식 API

**가능성은 낮음** — [05-research/03-tsgo-status.md](../../05-research/03-tsgo-status.md): Issue #516가 Post-7.0 milestone + dormant. 공식 transformer API는 빨라야 2028.

**설령 나와도**:
- ttsc의 사용자 API(`tsconfig.plugins[]`)는 이미 커뮤니티 표준
- ttsc 내부의 Go hook + Node bridge를 Microsoft 공식 API 호출로 교체
- 사용자 체감 변화 0

→ **ttsc 투자는 안전**.

## 리스크 R4 상세 — samchon 번아웃

이게 가장 현실적 위험. Go fork + patch 유지 + Node bridge + 7 플랫폼 배포 + typia + nestia + AutoBE + Agentica 동시 유지는 비정상적 부담.

**완화**:
1. **Effect-TS 자동화 전면 재사용**: `flake.nix`, `setup-repo.sh`, `gen_shims`, `release-prepare.sh` 복제·수정으로 초기 비용 대폭 절감
2. **조력자 1인**: Go 숙련자 (커뮤니티 파트너십). 초기 Phase 1 집중 돕기
3. **AI 페어링**: Claude/Copilot을 Go 생산성 도구로 적극 활용
4. **후견 재정**: OpenCollective / GitHub Sponsors로 유지보수 비용 명시
5. **상용 연결**: AutoBE/Agentica 상업화로 samchon이 typia/ttsc 유지에 시간 쓸 수 있는 구조

## 대안 1. Generate 모드만 밀기

이미 [01-problem-statement.md](01-problem-statement.md)에서 철회. 사상 양보.

## 대안 2. TypeScript 원복 API가 나올 때까지 기다리기

**결과**: 2027년 1년 공백. 신규 사용자 유입 0. 기존 사용자도 TS 7 못 감. **허용 불가**.

## 대안 3. tsgo 완전 우회 — 자체 TS 컴파일러

예: Rome / Biome처럼 Rust로 TS 컴파일러 재작성. 상상 범위 밖.

## 대안 4. ts-patch의 fork만 유지 (samchon의 ts-patch)

`/mnt/d/github/contributions/ts-patch-typescript-6.0`이 이미 존재. 이건 **TS 6.x LTS 잔존용**으로만 가치. tsgo 시대에는 쓸 수 없음.

→ **ttsc 개발과 병행** 가능. ts-patch fork로 TS 6.x 호환을 유지하면서 ttsc로 미래 대비.

## 대안 5. Volar/Vue 같은 LSP-first 접근

Vue language tools는 LSP 레이어에서만 typia 지원 (컴파일은 tsgo). 그러나 typia의 핵심 기능(emit 변환)이 LSP에서 제공되지 않아 **빌드는 여전히 깨짐**. 불완전 우회.

## 대안 6. Rolldown / swc plugin 통합

Rolldown / swc는 Rust 플러그인 시스템 있음. 그러나:
- typia transformer는 TS Compiler API (Node JS) 기반이라 Rust plugin으로 이식 불가
- tsgo가 type check, Rolldown이 transform — 두 단계 프로세스, 복잡

장기적 가능성 있으나 **ttsc보다 우선순위 낮음**.

## 최종 의사결정 표

| 기준 | ttsc | Generate 모드 | TS 7 대기 | ts-patch fork |
|---|---|---|---|---|
| 사상 양보 | 0 | 큼 | 0 | 0 (TS 6만) |
| 비용 | 높 (12m) | 중 (3m) | 0 | 중 |
| TS 7 대응 | ✅ | ✅ | ❌ (1년 공백) | ❌ |
| 생태계 확장 | ✅ (3rd party transformer) | △ | △ | △ |
| 사용자 체감 | 변화 0 | 큰 변화 | 동결 | 변화 0 |
| 장기 가치 | 매우 큼 | 작음 | 0 | 작음 |
| **종합** | **★★★★★** | ★★ | ★ | ★★ |

→ **ttsc가 유일하게 모든 기준에서 최상**.

## 한 줄 요약

> **ttsc 리스크는 높지만 각각 완화 경로가 있다. 대안들은 사상 양보 또는 시간 공백을 수반한다. 비용-편익에서 ttsc가 우월.**

→ 다음 [08. Open Questions](08-open-questions.md)
