# 10. Success & Failure Criteria

## Year 1 — `@typia/ttsc` 가 typia의 실제 빌드 도구가 되는가

### 성공 지표
- [ ] `build/check/transform/version` surface 고정
- [ ] typia 핵심 validator 경로가 `@typia/ttsc` 로 동작
- [ ] `npx typia setup` 마이그레이션 경로 성립
- [ ] 빌드 속도 tsc+ts-patch 대비 **2× 이상**
- [ ] 7플랫폼 바이너리 배포 자동화

### 실패 신호
- [ ] rewrite 경로가 반복 빌드에서 안정화되지 않음
- [ ] typia 자체 dogfooding을 시작하지 못함
- [ ] 2분기 연속 일정이 크게 미끄러짐

## Year 2 — typia Go engine이 충분한 범위를 커버하는가

### 성공 지표
- [ ] validators + JSON 주요 경로 parity 확보
- [ ] typia 테스트셋 통과율이 실질적 preview 수준 도달
- [ ] ecosystem dogfooding 시작
- [ ] typia adapter와 공통 코어 경계가 코드로 드러남

### 실패 신호
- [ ] 기능 확장보다 기반 수리에 시간이 계속 소모됨
- [ ] second consumer 검증이 전혀 시작되지 못함

## Year 3 — generic extraction을 검토할 자격이 생겼는가

### 성공 지표
- [ ] `@typia/ttsc` surface가 장기간 안정적
- [ ] 두 번째 소비자가 공통 코어를 재사용
- [ ] typia adapter 분리가 가능하다는 증거 확보
- [ ] LLM/Protobuf/Edge 차별점 유지

### 실패 신호
- [ ] 분리 시 typia release cadence가 깨짐
- [ ] 공통 API를 정의할 근거가 여전히 부족함

## 공통 KPI

| KPI | 목표 |
|---|---|
| 빌드 속도 | tsc+ts-patch 대비 개선 유지 |
| 테스트 통과율 | 분기마다 상승 |
| 배포 안정성 | 7플랫폼 지속 배포 |
| 문서 정합성 | 계획·구현·감수 문서 상충 최소화 |

## 분기 체크리스트

1. `@typia/ttsc` 가 실제로 더 많은 경로를 커버했는가
2. typia adapter와 공통 코어 경계가 더 선명해졌는가
3. 두 번째 소비자 연결 가능성이 구체화됐는가
4. 분리를 논할 만큼 안정화됐는가

→ 다음 [11. Communication Plan](11-communication-plan.md)
