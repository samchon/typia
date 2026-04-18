# 04. Final Recommendation — 최종 권장안 (Cycle 5)

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 5 사이클 분석의 종합 결론. samchon이 즉시 실행 가능한 단일 권장 + 조건별 분기.

## 한 줄 권장

> **"지금부터 옵션 D(Hybrid)를 기본 경로로 가되, Phase 0의 처음 6개월은 옵션 B(ttsc) 집중. Go 조력자 확보 시점부터 옵션 C(typia-go) 병행 착수."**

즉:
- 즉시 B 착수 (빠른 방어선)
- Go 조력자 확보 후 C 병행
- 마지막 단계에서 C로 완전 이주
- A(TS 6.x LTS)는 전 기간 자동 병행

이유: Cycle 2-4의 수학적 점수와 현실 리스크의 타협점. **"사상은 지키되, 자원 한계 안에서 단계적 전진"**.

## 12-24-36 개월 실행 계획

### Year 1 (2026 Q2 ~ 2027 Q2) — ttsc 집중

**핵심 목표**: 2027년 TS 7 stable 이전에 ttsc v1.0 출시로 사상 방어선 구축.

#### 즉시 (2026 Q2)
- [ ] 공식 입장문 발표 ([07-strategy/03-positioning-actions.md](../03-positioning-actions.md)): "typia는 TS 7 대응 준비 중, ttsc와 typia-go 동시 검토"
- [ ] ttsc Phase 0 spike 2주 실행 ([04-ttsc-design/05-ttsc-implementation-plan.md](../04-ttsc-design/05-ttsc-implementation-plan.md))
- [ ] Go 조력자 모집 공고 (커뮤니티 / 후원사)
- [ ] Standard Schema 어댑터 1주 작업 ([06-feedback/03-improvement-proposals.md](../../06-feedback/03-improvement-proposals.md) A1)

#### 2026 Q2-Q4 (ttsc Phase 1-2)
- [ ] ttsc walking skeleton 완성
- [ ] typia test suite 절반 통과
- [ ] early alpha 공개 (Q4)

#### 2027 Q1-Q2 (ttsc Phase 3-4)
- [ ] watch / cache / diagnostics
- [ ] 7 플랫폼 바이너리 배포
- [ ] **ttsc v1.0 출시 (2027 Q2)**
- [ ] typia v13 = ttsc 1급 지원

### Year 2 (2027 Q3 ~ 2028 Q2) — typia-go 병행 착수

**조건부 실행**: Go 조력자 확보 또는 Year 1 말 평가 후 진행.

#### 2027 Q3 (typia-go M1)
- [ ] typia-go 저장소 초기화
- [ ] metadata schema + analyzer + is
- [ ] gen_shims 자동화

#### 2027 Q4 ~ 2028 Q1 (M2-M3)
- [ ] validators 완성
- [ ] json (schema/stringify/parse)

#### 2028 Q1-Q2 (M4)
- [ ] LLM MVP (application, schema, parameters)
- [ ] **typia-go MVP alpha**
- [ ] AutoBE / Agentica 내부 dogfooding

### Year 3 (2028 Q3 ~ 2029 Q2) — typia-go v1.0 + ttsc deprecation

#### 2028 Q3-Q4 (M5-M7)
- [ ] misc / notations / http / functional
- [ ] random / protobuf (일부는 v1.1로 미룸)
- [ ] hardening + CI

#### 2029 Q1-Q2 (launch)
- [ ] typia-go v1.0 출시 (2029 Q2)
- [ ] typia v14 = Go 네이티브
- [ ] ttsc deprecation 공지
- [ ] TS 6.x LTS 종료 마무리 (2028 말에 이미 종료 예정)
- [ ] 컨퍼런스 발표 (TSConf 2029 유력)

## 조건부 분기

### 분기 1. Go 조력자 확보 시점
- **2026 말까지 확보** → Year 2부터 C 공격적 착수 (D 완전판)
- **2027 중반 확보** → C를 축소 범위로 (MVP만 먼저, protobuf/random은 v1.1)
- **미확보** → B 유지 + C 착수 연기. typia의 LLM 차별점으로 방어

### 분기 2. tsgonest 장악도
- **2027 Q2까지 NestJS 시장 50%+ 잠식** → C 가속 (AutoBE 수익 투입)
- **2027 Q2까지 20% 이하** → B 유지 가능, C 여유

### 분기 3. Microsoft 공식 API
- **2028 중 출시** → ttsc 내부 교체 (사용자 불변)
- **2028 미출시** → 원안 유지

## 즉시 착수 체크리스트 (2026 Q2)

### Week 1-2 (2026-04 ~ 2026-05 초)
- [ ] 이 wiki 전체 재검토 + samchon 의견 반영
- [ ] 공식 입장문 draft 작성
- [ ] ttsc vs typia-go 네이밍 최종 결정 (npm 사용 가능 여부 확인)
- [ ] Standard Schema 어댑터 PoC

### Week 3-4 (2026-05)
- [ ] 공식 입장문 발표 (typia.io 블로그 + GitHub)
- [ ] Standard Schema 어댑터 출시
- [ ] ttsc 저장소 개설
- [ ] Go 조력자 모집 공고

### Week 5-8 (2026-06)
- [ ] ttsc Phase 0 spike 시작
- [ ] Effect-TS/tsgo 빌드 시스템 복제 실험
- [ ] tsgolint gen_shims 복제
- [ ] 10-line patch로 hello world 증명

### Q2 2026 종료 (2026-06-30)
- [ ] Phase 0 go/no-go 결정
- [ ] Phase 1 착수 여부 확정

## 성공 지표 (KPI)

### Year 1 (ttsc v1.0)
- ✅ 2027 Q2까지 ttsc v1.0 출시
- ✅ typia 기존 사용자 95%+ 이주 가능 (테스트 통과)
- ✅ 성능: tsc+ts-patch 대비 3× 이상
- ✅ 매 tsgo release 1주 내 대응

### Year 2 (typia-go alpha)
- ✅ 2028 Q2까지 typia-go MVP (validators+json+llm)
- ✅ AutoBE/Agentica 내부 전환 완료
- ✅ typia v12 테스트의 80%+ 통과

### Year 3 (typia-go v1.0)
- ✅ 2029 Q2까지 typia-go v1.0
- ✅ 13 namespace 전체 커버
- ✅ 성능: tsc+ts-patch 대비 8× 이상
- ✅ tsgonest 대비 기능 우위 유지 (LLM, Protobuf, 13 namespace)

## 실패 지표 (지금 감지해야 할 신호)

### Red flag 1: Go 조력자 6개월 내 미확보
- 조치: C 포기, B+A 유지. LLM 차별화로 방어.

### Red flag 2: ttsc IPC 오버헤드가 3× 이하 (Phase 2 측정 시)
- 조치: C 착수 가속 (IPC 없는 단일 프로세스가 해답)

### Red flag 3: tsgonest가 Q3 2027까지 NestJS 60%+ 점유
- 조치: 긴급 C 가속 (AutoBE 수익 전부 투입)

### Red flag 4: samchon 번아웃 조짐
- 조치: 모든 일정 -50% 리셋, Phase 0~1만 집중. 나머지는 커뮤니티에 이양.

## 사상 일관성 최종 확인

| 사상 공리 | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| 표현의 단일성 | ✅ | ✅ | ✅ |
| TS 컴파일러 = 진실 | ✅ | ✅ | ✅ |
| 컴파일 시점 = 검증 생성 시점 | ✅ | ✅ | ✅ |
| 자체 IR (MetadataSchema) | ✅ | ✅ (Go 재구현) | ✅ (Go 완성) |
| 사용자 API | **불변** | **불변** | **불변** |

## 메시징 라인

2026: "typia is ready for TypeScript 7. ttsc is coming."
2027: "ttsc v1.0 shipped. typia-go preview."
2028: "typia-go alpha: native speed, same typia."
2029: "typia v14: Go-native, zero setup, 10× faster."

## 기회비용 (이 권장을 따르지 않으면)

### 만약 B만 하고 끝내면
- 2029년 typia는 Node 기반 유물. tsgonest가 NestJS 장악.
- LLM 영역은 지키나 광범위 채택 힘들음.

### 만약 C로 바로 점프하면 (B 없이)
- 2027년 1년 동안 TS 7 사용자를 잃음.
- tsgonest가 그 공백을 채움.

### 만약 A만 하면
- 2028년 typia 사실상 deprecated.

→ **B → C의 순차 이행이 유일한 안전한 길**.

## 한 줄 결론

> **Year 1은 B (ttsc)로 방어선 구축, Year 2-3는 C (typia-go)로 공격 전환. Go 조력자 확보가 전체 속도를 결정. 사상은 3년 내내 불변.**

→ 다음 [05. 30초 경영 요약](05-executive-briefing.md)
