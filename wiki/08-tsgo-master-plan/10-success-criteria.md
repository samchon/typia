# 10. Success & Failure Criteria

## Year 1 (2026 Q2 ~ 2027 Q2): ttsc v1.0

### 성공 지표
- [ ] ttsc v1.0 2027 Q2까지 출시
- [ ] typia 기존 사용자 95%+ 이주 가능 (tests 통과)
- [ ] IPC 오버헤드 < 50ms/파일
- [ ] 성능 tsc+ts-patch 대비 3× 이상
- [ ] 매 tsgo release 1주 내 대응 (shim 재생성 자동)
- [ ] Standard Schema 어댑터 출시 (2026 Q2)
- [ ] Edge runtime 호환성 문서화 + 데모
- [ ] 커뮤니티 지표: Discord/Reddit/X 월간 긍정 언급 5+

### 실패 신호
- [ ] Phase 0 spike IPC > 200ms → C 직행 검토
- [ ] Phase 1 walking skeleton 3개월 지연 → 외부 컨설팅
- [ ] v1.0 출시 6개월 지연 → 기능 축소 출시

## Year 2 (2027 Q3 ~ 2028 Q2): typia-go alpha

### 성공 지표
- [ ] typia-go MVP (v0.5 alpha) 2028 Q2 출시
- [ ] validators + json 기능 parity
- [ ] typia v12 tests 80%+ 통과
- [ ] AutoBE/Agentica 내부 dogfooding 완료
- [ ] Go LOC 50K~70K 도달

### 실패 신호
- [ ] Go 조력자 2027 Q3까지 미확보 → C 연기
- [ ] MVP 3개월 지연 → 범위 재정의
- [ ] 테스트 통과율 60% 미만 → MetadataFactory 재설계

## Year 3 (2028 Q3 ~ 2029 Q2): typia-go v1.0

### 성공 지표
- [ ] typia-go v1.0 2029 Q2 출시
- [ ] 13 namespace 전체 커버
- [ ] 성능 tsc+ts-patch 대비 8× 이상
- [ ] LLM/Protobuf 차별 유지 (tsgonest에 없음)
- [ ] typia v14 정식 릴리스
- [ ] 7 플랫폼 바이너리 자동 배포
- [ ] nestia, AutoBE, Agentica 공식 전환

### 실패 신호
- [ ] v1.0 출시 1년 지연 → Year 4 연장
- [ ] 성능 목표 미달 (5× 미만) → 최적화 스프린트
- [ ] tsgonest가 NestJS 70%+ 장악 → 사업 모델 재검토

## 전 기간 공통 KPI

| KPI | 측정 방법 | 목표 |
|---|---|---|
| GitHub stars | 월간 증가 | +5%/월 |
| npm 주간 다운로드 | npm-stat.com | 추세 유지 또는 증가 |
| Discord 활성 | 월간 메시지 | +20% |
| Issue 응답 시간 | GitHub | 평균 72시간 내 |
| PR merge 시간 | GitHub | 평균 2주 내 |
| AutoBE 사용 기업 | 내부 집계 | 공개 가능한 범위 증가 |

## 감사 지점 (Audit Points)

매 분기 samchon이 체크:

### 기술 건전성
- [ ] 모든 Audit 결과가 plan에 반영되었나?
- [ ] 미검증 수치가 plan에 남아있지 않나?
- [ ] 모든 "추정"이 "실측"으로 전환되었나?

### 시장 건전성
- [ ] tsgonest 실측 (stars, downloads, 프로덕션 사용)
- [ ] typia 커뮤니티 활성도 (Discord, Reddit, X)
- [ ] 경쟁 라이브러리(Zod v4, Valibot, ArkType) 변화

### 자원 건전성
- [ ] samchon 개인 지속 가능성 (번아웃 신호)
- [ ] 재정 (서명, CI 비용 대비 후원 수입)
- [ ] Go 조력자 유지

## 분기별 go/no-go 체크리스트

매 분기 종료 시 5분 회의 (혼자라도 문서화):

1. Phase 진도 %
2. 다음 분기 최우선 순위 3개
3. Kill trigger 발동 여부
4. 자원 변화 (조력자, 재정, 시간)
5. 외부 변수 (MS 발표, 경쟁자 성장)

→ 다음 [11. 대외 커뮤니케이션](11-communication-plan.md)
