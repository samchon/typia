# 05. 세트 tsgo 전환 통합 계획 (typia + nestia + agentica + autobe)

> 4 프로젝트의 동시 전환 일정. master plan의 Phase 0~6을 ecosystem 전체로 확장.

## 원칙

1. **typia가 선행** — 모든 상위 층이 typia를 소비하므로 기반 완성 필수
2. **nestia 동기** — typia Phase와 보조 맞춰 nestia transformer 이식
3. **agentica 표면 불변** — typia.llm.application 표면 API 불변이면 agentica 내부 변경 최소
4. **autobe 표면 불변** — typia/nestia/agentica 표면 API 불변이면 autobe는 변경 없음
5. **한 릴리스, 네 프로젝트** — typia v14·nestia v12·agentica·autobe 동시 출시 (2029 Q2)

## Phase 매트릭스

| Phase | 시점 | typia | nestia | agentica | autobe |
|---|---|---|---|---|---|
| 0 Spike | 2026 Q2 | ttsc spike | (관찰) | (관찰) | (관찰) |
| 1 Walking | 2026 Q3-Q4 | engine 기초 | (관찰) | (관찰) | (관찰) |
| 2 Validators | 2027 Q1-Q2 | **validators Go** | typed* 분석 시작 | (영향 없음) | (영향 없음) |
| 3 JSON | 2027 Q3-Q4 | JSON Go | `@TypedRoute` 포팅 시작 | (영향 없음) | (영향 없음) |
| 4 LLM | 2028 Q1-Q2 | **llm Go + typia v13** | `@TypedBody`, `@TypedQuery` Go | **agentica 내부 전환** | (영향 없음) |
| 5 Misc + SDK | 2028 Q3-Q4 | misc Go | **@nestia/sdk Swagger 포팅** | (안정화) | autobe 내부 검증 |
| 6 v1.0 | 2029 Q1-Q2 | **typia v14** | **nestia v12** | **agentica next** | **autobe next** |

## 의존 순서 (토폴로지)

```
Phase 2 typia validators
  ↓ (소비)
Phase 3 nestia @TypedRoute (typia.assert 사용)
  ↓
Phase 4 typia LLM + nestia @TypedBody
  ↓
Phase 4 agentica (typia.llm.application Go 엔진 사용)
  ↓
Phase 5 @nestia/sdk Swagger generator (typia.json.schema Go)
  ↓
Phase 6 autobe (agentica + nestia + typia 전체 Go 엔진 소비)
```

## 각 프로젝트의 Phase별 변화

### typia
상세: [08-tsgo-master-plan/](../08-tsgo-master-plan/)

### nestia
상세: [01-nestia-and-tsgo.md](01-nestia-and-tsgo.md)

주요 일정:
- 2027 Q3: `@TypedRoute` Go 포팅
- 2028 Q1-Q2: `@TypedBody`, `@TypedQuery`, `@TypedParam`, `@TypedHeaders` Go
- 2028 Q3-Q4: `@nestia/sdk` Swagger/SDK/E2E generator Go
- 2029 Q2: nestia v12 = Go native

### agentica
- 전환 기간 내 **표면 API 불변** (typia.llm.application 소비만)
- 내부: typia.llm.application의 반환값이 Go 엔진이 생성한 것으로 바뀌지만, 소비자인 agentica에서는 구분 불가
- 2028 Q1-Q2: dogfooding 시점 (typia v13 LLM 출시와 동기)
- 2029 Q2: agentica next 릴리스 (안정성 검증 완료)

### autobe
- 가장 상위 레이어 — 타 프로젝트 완성에 종속
- **표면 API 전혀 변화 없음** (사용자 자연어 입력 / 생성 코드 불변)
- 내부 Waterfall+Spiral 파이프라인은 유지
- 2028 Q3-Q4: 내부 검증 (typia + nestia Go 엔진 사용)
- 2029 Q2: autobe next 릴리스

## 동시 릴리스 전략 (2029 Q2)

4 프로젝트를 **한 번의 launch event**로:

### Launch Day (2029 Q2 예정)
- typia v14 (Go native)
- nestia v12 (Go native)
- agentica next (LLM native Go)
- autobe next (vibe coding, full Go backend)
- 블로그 시리즈 "The ecosystem goes native"
- 컨퍼런스 발표 (TSConf / Korea JS Conference)

### 메시지
> "타입 하나에서 백엔드 전체까지. 4 프로젝트가 하나의 Go 바이너리와 하나의 사상을 공유한다."

## 리스크 (세트 공통)

| 리스크 | 영향 | 완화 |
|---|---|---|
| samchon 번아웃 | 매우 큼 | 조력자 + AutoBE 상업화로 유지비 조달 |
| typia Phase 지연 | 세트 전체 지연 | typia 범위 축소 우선, nestia/agentica/autobe 동시 축소 |
| tsgonest 세트 전체 잠식 | 큼 | AutoBE·Agentica 차별화로 방어 (tsgonest는 autobe 레벨 부재) |
| 사용자 이주 혼란 | 중 | typia setup은 typia toolchain만 정렬하고, 나머지 프로젝트는 별도 migration guide로 단계 이행 |

## tsgonest 경쟁 대응의 층위

| 층 | tsgonest | typia 세트 |
|---|---|---|
| 타입 검증 | ✅ | ✅ (typia) |
| JSON | ✅ | ✅ (typia) |
| OpenAPI 3.2 | ✅ | ✅ (typia + nestia — 3.0/3.1/3.2 모두) |
| SDK 생성 | ✅ | ✅ (nestia @sdk) |
| Swagger UI + Editor | ❌ | ✅ (@nestia/editor) |
| E2E 테스트 자동 | ❌ | ✅ (@nestia/e2e + @nestia/sdk) |
| LLM function calling | ❌ | ✅ (typia.llm + agentica) |
| Protobuf | ❌ | ✅ (typia) |
| vibe coding (자연어→백엔드) | ❌ | ✅ (autobe) |
| 프레임워크 | NestJS only | NestJS (nestia) + 그 외 (typia 범용) |

→ **tsgonest가 영원히 따라오지 못할 3층 (agentica, autobe, 범용 typia)이 결정적 해자**.

## Go 조력자 관점

4 프로젝트 동시 Go 포팅은 혼자 불가. 권장 구성:
- samchon: 전체 아키텍처 + typia engine + autobe 연결
- Go 조력자 1: ttsc driver + nestia transformer 포팅
- Go 조력자 2: @nestia/sdk generator 포팅 + CI/빌드
- (선택) 프론트엔드 조력자: @nestia/editor 유지

연간 비용 추정 (이상적): $100~200K (2인 시니어 Go 개발자 + 인프라).

**조달**: AutoBE 상업화 수익 + OpenCollective + 엔터프라이즈 스폰서.

## 이 통합 계획이 가진 구조적 장점

1. **중복 투자 제거**: typia 엔진과 nestia 엔진이 **같은 ttsc 바이너리** 안 — 공유 shim, 공유 metadata
2. **동시 릴리스 파급효과**: 4 프로젝트 **한 번의 뉴스 사이클**에 집중
3. **사상 일관성**: 4 층 모두 동시 이주 → "일부는 TS, 일부는 Go" 혼란 없음
4. **사용자 학습 비용 단일**: typia toolchain을 중심으로 4 프로젝트 migration guide를 같은 방향으로 정렬

## 한 줄 결론

> **typia + nestia + agentica + autobe 네 프로젝트가 **한 Go 바이너리** 안에서, **한 사상**으로, **한 번의 릴리스**에 Go native로 이주한다. 2029 Q2, "Pure TypeScript" 피라미드의 완성.**

→ 네트워크 복귀: [08-tsgo-master-plan/](../08-tsgo-master-plan/)
