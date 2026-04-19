# 05. Recommended Path (v2 — 단일 경로의 실행 전략)

> v1 초안은 "어떤 옵션을 택할 것인가"의 결정 트리였다. v2는 **이미 결정된 길(ttsc+typia-go 동시 구축)을 어떻게 실행할 것인가**의 전술서.

## 유일한 경로 요약

```
ttsc + typia-go 동시 개발 (2026 Q2 ~ 2029 Q2)
  +
TS 6.x LTS 자동 병행 (ts-patch fork, 2028 말까지)
  +
즉시 착수 5개 (2026 Q2, 6주)
```

## 분기가 아닌 "속도 조절" 결정 트리

결정 점은 "경로 변경"이 아니라 **속도/범위 조절**:

```
START (2026 Q2)
 │
 ├─ 공식 입장문 발표
 ├─ ttsc Phase 0 spike 착수 (6주)
 ├─ Standard Schema 어댑터 (2~3주)
 ├─ Edge runtime / AI-native DX 홍보
 └─ Go 조력자 모집
    │
    ├─ (2026 Q3 초) Phase 0 종료 평가
    │   │
    │   ├─ 기술 가능 확인 → Phase 1 착수 (공격 기본)
    │   ├─ 부분 가능(예: patch 많이 필요) → Phase 1 축소 범위
    │   └─ 불가능 → typescript-go 팀과 협상·재설계
    │
    ├─ (2026 Q4 초) Go 조력자 확보 여부
    │   │
    │   ├─ 확보 → Phase 2부터 병렬화, 속도 2×
    │   └─ 미확보 → Phase 2 범위 축소 (core validators + json만)
    │
    ├─ (2027 Q2) ttsc + typia-go alpha 출시
    │   피드백 수렴 후 Phase 3~4 우선순위 조정
    │
    ├─ (2027 Q4) tsgonest 시장 점유 실측
    │   │
    │   ├─ NestJS 30%↑ → LLM/Protobuf 차별화 마케팅 강화
    │   └─ 20%↓ → 계획 유지
    │
    ├─ (2028 Q2) typia v13 stable
    ├─ (2029 Q2) typia v14 = Go native 전체
    └─ (2028 말) TS 6.x LTS 종료 + ts-patch 경로 폐지
```

## 즉시 착수 5개 (2026 Q2, 6주 내)

| # | 작업 | 기간 | 효과 |
|---|---|---|---|
| 1 | **공식 입장문** 발표 | 1~2주 | 사용자 안심·생태계 신호 |
| 2 | **Standard Schema 어댑터** 출시 | 2~3주 | MCP/AI SDK/Hono/Drizzle 생태계 진입 |
| 3 | **ttsc Phase 0 spike** | **6주 (v5 개정)** | 기술 검증 · 빌드 속도 배수 실측 · 두 경로 프로토타입 · sourcemap · Setup v2. 상세: [17-phase0-kickoff.md](17-phase0-kickoff.md) |
| 4 | **Edge runtime 홍보** | 며칠 | 새 차별점 마케팅 |
| 5 | **AI-native DX 템플릿** (llms.txt, Cursor rules, MCP) | 1~2주 | 개발자 유입 |

5개 모두 **경로 무관 즉시 실행**. 병렬 가능.

## Phase 로드맵 (v2)

| Phase | 기간 | 산출물 | 사용자 노출 |
|---|---|---|---|
| **0 Spike** | 2026 Q2 (6주) | 기술 증명 prototype | 비공개 |
| **1 Walking** | 2026 Q3~Q4 | ttsc driver + engine metadata + `is<string>` | 비공개 alpha |
| **2 Validators** | 2027 Q1~Q2 | is/assert/validate/equals | **typia v13 preview (2027 Q2)** |
| **3 JSON** | 2027 Q3~Q4 | schema/stringify/parse/application | typia v13 alpha |
| **4 LLM MVP** | 2028 Q1~Q2 | llm.application/schema/controller | **typia v13 stable (2028 Q2)** |
| **5 Misc + Runtime 분리** | 2028 Q3~Q4 | notations/misc/reflect/functional/http + @typia/utils 정리 | incremental |
| **6 v1.0** | 2029 Q1~Q2 | random, protobuf, 전체 통합 | **typia v14 = Go native** |

## 현재와 전환 후 비교

| 항목 | 현재 (v12) | 전환 후 (v13+) |
|---|---|---|
| 빌드 도구 | tsc + ts-patch | ttsc (단일 Go 바이너리) |
| @typia/core | TypeScript 30,307 LOC (전체 Go 포팅) | **Go (ttsc engine 안에)** |
| @typia/transform | TypeScript (4K LOC) | **Go (ttsc driver에 흡수)** |
| @typia/typia | TS (facade + CLI) | **TS 유지, 더 얇아짐** |
| @typia/interface | TS (0-runtime-dep 타입) | **TS 유지** |
| @typia/utils | TS (런타임 헬퍼 + 변환) | **런타임만 TS, 변환 유틸은 Go로** |
| @typia/unplugin | TS (ts.createProgram 호출) | **TS 얇은 launcher로 축소, 내부는 ttsc 호출** |
| @typia/mcp/langchain/vercel | TS | **TS 유지 (SDK 의존)** |

상세: [16-package-port-boundary.md](16-package-port-boundary.md).

## 결정 재검토 지점

매 분기 5분 체크:
1. Phase 진도 %
2. Kill trigger 발동 여부
3. Go 조력자 상태
4. tsgonest 시장 지표
5. Microsoft 공개 업데이트

## Kill Criteria (계획 파기 또는 전면 재조정)

다음 중 하나 발생 시:

| 시점 | Trigger |
|---|---|
| 2026 Q3 | Phase 0 spike에서 typescript-go 접근 기술 자체 불가 |
| 2026 Q4 | Phase 1 walking skeleton 3개월 지연 |
| 2027 Q2 | typia v13 preview 기한 6개월 초과 |
| 2028 Q2 | typia v13 stable 기한 6개월 초과 |
| 2028 Q4 | tsgonest가 NestJS 50%+ 공식 채택 |
| 2029 Q2 | typia v14 기한 1년 초과 |
| 언제나 | samchon 번아웃 감지 신호 |

## 사용자 약속 (불변)

1. `typia.is<T>(input)` 한 자도 바뀌지 않는다
2. `tsconfig.json plugins` 스키마 호환 (자동 마이그레이션)
3. 13 namespace 전부 유지
4. LLM / Protobuf / Edge runtime 차별점 유지
5. `npx typia setup` 한 줄로 전환 완료

## 한 줄 결론

> **유일한 길은 이미 정해졌다. 결정할 것은 얼마나 빨리 갈 것인가, 얼마나 많은 범위를 v13에 넣을 것인가. Phase 0 spike가 6주 후 그 답을 준다.**

→ 다음 [06. ttsc Specification](06-ttsc-specification.md)
→ 패키지 경계 상세: [16. Package Port Boundary](16-package-port-boundary.md)
