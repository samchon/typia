# 05. Executive Briefing — 30초 경영 요약

## 위기

**tsgonest** (Go 기반 "typia+nestia" 클론) 이 이미 v0.13.5, 49 releases까지 개발됨. typia migrate 명령으로 사용자 흡수 중. 2년 내 NestJS 시장 잠식 가능.

**typical** (Go 기반 typia 클론) 도 v0.3.1 출시. typia의 사상을 Go로 구현 가능함을 증명.

**tsgo** (TypeScript 7 Go port) 는 2026 Q3-Q4 GA. 기존 ts-patch는 완전 불가능.

## 타이밍

- 지금 행동 안 하면 2027년 1년 공백 + 2028년부터 경쟁자에 잠식.
- 지금 행동하면 방어선 + 공격 전환 + 차별화 유지 가능.

## 권장안

### 두 트랙 병행 (옵션 D)

```
Year 1 (2026 Q2 - 2027 Q2): ttsc 집중
  → tsgo + shim + Node bridge. 기존 typia 자산 100% 재사용.
  → 12개월 내 v1.0. 사용자 방어선.

Year 2-3 (2027 Q3 - 2029 Q2): typia-go 병행
  → tsgonest 모델 + 13 namespace 전체.
  → 18개월 개발. 공격 전환. 성능 10× 달성.

전 기간: ts-patch LTS (TS 6.x) 자동 병행
```

## 3 가지 필수 조건

1. **공식 입장문** (2026 Q2) — 생태계 신뢰
2. **Standard Schema 어댑터** (1주, 즉시) — MCP/AI SDK 진입
3. **Go 조력자 1인** — typia-go 속도 결정

## 차별화 핵심 (절대 포기 불가)

- **LLM function calling** — tsgonest 미구현, typia의 해자
- **Protobuf** — 특수 영역 선점
- **13 namespace 범위** — 프레임워크 중립
- **사용자 API 불변** — `typia.is<T>(input)` 영원

## 3 가지 가장 큰 리스크

1. **번아웃** (R8) — 자원 확보, 상업화 연결
2. **tsgonest 선점** (R3) — 8개월 내 MVP 필수
3. **v12 버그픽스 재현** (R6) — 자동 테스트 100%

## 숫자

| 지표 | 값 |
|---|---|
| typia 현재 LOC (core+transform TS) | 34,613 |
| tsgonest 현재 LOC (Go) | 72,200 |
| typia-go 예상 LOC | ~80,000 Go |
| ttsc 개발 기간 | 12 개월 |
| typia-go 개발 기간 | 18 개월 (MVP 12) |
| 매 tsgo release 유지보수 | 10분 (shim 자동) |
| 목표 성능 (vs tsc) | ttsc 3×, typia-go 10× |
| 대상 플랫폼 | 7 (darwin/linux/win × arm64/x64/arm) |

## 2026 Q2 즉시 실행 (4주)

- [ ] 공식 입장문 발표
- [ ] Standard Schema 어댑터 출시
- [ ] ttsc Phase 0 spike (2주)
- [ ] Go 조력자 모집

## 재정 요구

| 항목 | 연간 |
|---|---|
| Apple Developer ID | $99 |
| Windows code signing | $300~400 |
| GitHub Actions 추가 빌드 시간 | ~$500 |
| 1인 조력자 (선택) | $50,000~80,000 |

→ 혼자면 $1,000/년, 조력자 영입 시 $50~80K/년.
→ AutoBE 상업화 수익 + OpenCollective 후원으로 조달 가능.

## 사상 메시지 (불변)

> "Pure TypeScript. Type once. Get everything."

이 한 줄이 Year 1, 2, 3 모두 동일. 내부 구현은 변해도 외부 메시지는 영원.

## 한 문장 결론

> **2026 Q2부터 ttsc 집중, Go 조력자 확보 후 typia-go 병행. 3년 뒤 Go-native typia로 완전 이주. 사상은 불변, 사용자는 `tsc`→`ttsc`→(자동) 투명 전환.**

## 다음 액션 (지금)

1. 이 wiki 전체 읽기 ([00-INDEX.md](../../00-INDEX.md))
2. 결정: B 집중 단독 vs B + C 병행 (D)
3. Go 조력자 모집 공고
4. 2026 Q2 실행 계획 확정

---

*5 사이클의 분석이 한 페이지로 수렴한 순간. 더는 분석할 것 없음. 행동할 시간.*
