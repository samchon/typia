# 12. Governance — 의사결정 체계

## 의사결정 권한

| 결정 종류 | 권한자 |
|---|---|
| 전략 방향 변경 (옵션 A/B/C/D 전환) | samchon 단독 |
| Phase 착수 / 중단 | samchon |
| 아키텍처 주요 변경 | samchon + 조력자 협의 |
| API 호환성 변경 | samchon + 커뮤니티 RFC |
| 일상 PR merge | maintainer (samchon 포함) |
| 버전 릴리스 | samchon |

## 재검토 주기

### 분기별 (3개월)
- Phase 진도 점검
- Kill trigger 체크
- 리스크 대장 업데이트
- 시장 변화 (tsgonest, typical, MS)

### 반기별 (6개월)
- 전체 plan 재검토
- 메시지·사상 일관성 점검
- 자원 (조력자, 재정, 시간) 재평가

### 연간 (12개월)
- 계획 대 실적
- 외부 감수 (이 wiki와 같은 독립 감수)
- 다음 해 로드맵 확정

## 변경 프로세스

### Master plan 수정 시
1. 이 폴더(`08-tsgo-master-plan/`)가 **단일 진실원**
2. 수정할 때 **`CHANGELOG` 섹션 추가** (어느 파일, 어느 부분, 왜)
3. 07-strategy의 해당 상세 문서도 동시 업데이트
4. INDEX 반영

### 기존 07-strategy / 09-audit 관계
- **07-strategy**: 작업 이력·상세 설계. 보존.
- **09-audit**: 독립 감수 결과. 수정 금지 (역사 기록).
- **08-tsgo-master-plan**: 현재 진실. 유일 수정 대상.

## RFC 프로세스 (큰 결정)

### 트리거
- 옵션 A/B/C/D 전환
- ttsc/typia-go 아키텍처 재설계
- 공식 출시 일정 변경
- Kill trigger 발동

### 절차
1. GitHub Discussion에 RFC 공개
2. 2주 피드백 수렴
3. samchon 최종 결정 + plan 반영
4. 공식 입장문 (필요시)

## Review Board (선택)

2027 이후 고려:
- 핵심 파트너(nestia, AutoBE 대표)
- 주요 컨트리뷰터 2-3명
- 분기 회의로 plan 검토

## 자료 관리

### 공개
- wiki 전체 (`/mnt/d/github/samchon/typia/wiki/`)
- GitHub Discussions (RFC)
- 블로그 (progress update)

### 내부
- OpenCollective 재정 현황
- AutoBE 상업 현황 (최소한의 공개)
- 조력자 계약 (비공개)

## 투명성 원칙

1. **계획 변경** — 즉시 공개
2. **지연 발생** — 숨기지 말고 이유 공개
3. **리스크 발동** — 영향 범위 솔직히
4. **성과 주장** — 증거 동반

## Kill Switch (최악 시나리오)

다음 중 하나 발생 시 **plan 전면 파기 + 재작성**:
- samchon 건강/경제 위기
- Microsoft가 typia에 적대적 정책 공식화
- tsgo 프로젝트 Microsoft 공식 취소 (극단적)
- 법적 이슈 (바이너리 배포 등)

→ 다음 [13. 부록 — 사실 수치 출처](13-appendix-facts.md)
