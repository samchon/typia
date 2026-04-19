# Session 8 — 통합 감수 (09-audit 스타일 공격)

> 2026-04-19, 17:45. 의장: **E (QA/Test Lead)**. 기록: A.
> 목적: 여태 합의된 내용이 서로 모순 없이, 공백 없이, 실행 가능한지 공격적으로 검증.
> 자료: S1~S7 회의록 7편 + 각 역할 cycle-03-*.md 개정안 6편.

## 의장 개회

**E (의장)**: 이 세션은 09-audit 스타일 공격입니다. 제가 감수관 역할. 남은 역할은 피고. 쟁점별로 질의, 반박 안 들어오면 합의 확정. 들어오면 현장 재논의.

첫째. **자기모순이 있는가?**

## 공격 1 — A 의 P1 vs F 의 bin 단일화

**E**: A 는 P1 "`typia.is<T>(input)` 한 자도 바뀌지 않는다" 를 말합니다. F 는 v14 에 `typia` bin 명령 완전 제거합니다. 둘 다 본 회의에서 승인. 모순입니까?

**A**: P1 은 사용자 소스 코드 내 **API 호출** 불변. bin 명령은 터미널 커맨드로 별개 축. 제 초안 §4 (BND-API-04) 의 "사용자 관측 동치" 도 호출 결과 동치이지 커맨드 이름 동치 아님.

**E**: 이 분리 원칙이 규약 문서에 명시되어야 모호함이 없습니다.

**A**: 규약 BND-API-04-DEF 를 새로 둡니다. "API 불변 = 소스 코드 내 `typia.*` 호출 시 입출력 동치. bin 명령, 빌드 명령, import 경로는 별개 축."

**E**: 접수. 모순 해소.

## 공격 2 — 검증 공백 잔존

**E**: S5 에서 공백을 메운다 했는데 완전히 메워졌습니까? 각 합의 항목에 verifier 가 있는지 확인합니다.

| 합의 ID | Verifier |
|---------|----------|
| C2-01 TS 정본 | C2-04 parity fixture ✓ |
| C2-02 Go emit 축소 | C2-04 parity fixture ✓ |
| C3-01 폴더 이동 | 위치 lint ? (공백) |
| C3-02/03 pointer key | ? (공백) |
| C3-04 Recursive 플래그 | ? (공백) |
| C3-05 hoisting 재귀 한정 | R-1.3-B-0001~0002 ? (부분) |
| C4-01 submodule | CI green ? (공백) |
| C4-02 replace 제거 | 조건부 → 자동 검증 어려움 |

공백 6 건. 각 verifier 를 제안해 주세요.

**C**: C3-01 폴더 이동은 Phase 1 작업이라 fixture 대신 PR 체크리스트. "이 PR 이 emitter 를 engine 폴더에 넣었는가" 를 CODEOWNERS 로 경고.

**B**: C3-02/03 pointer key 는 lint 로. `metadata/analyzer/` 에서 `*shimchecker.Type` 을 map key 로 쓰는 패턴을 Go AST parser 로 감지. CI fail.

**C**: C3-04 Recursive 플래그는 IR 단위 테스트. B 가 작성.

**B**: 동의. `metadata_recursive_test.go` 신설.

**C**: C4-01 submodule 은 CI 가 `git submodule status` 결과를 확인해 clean 상태인지 체크.

**F**: C4-02 replace 제거는 자동 검증이 어렵습니다. `go.work` 의 `replace` 행이 있는지 grep 으로 ? 하지만 **조건부**라서 tsgo 가 tagged release 시작하지 않았으면 false positive. 타이머 기반 경고 — 마지막 replace 수정일로부터 90 일 지나면 리뷰 요청 Action.

**E**: 부분 해소. 다만 "타이머 경고" 는 약한 verifier. 일단 접수.

## 공격 3 — 누락 쟁점

**E**: wiki/08 에 명시됐지만 본 회의에서 언급 안 된 쟁점?

**A**: 두 가지 있습니다.
- **edge runtime 호환** (P5). S4 에서 Setup wizard 가 자동 설정한다고만 했지, 실제 "emit 결과가 `eval`/`new Function` 포함하지 않음" 을 CI 로 감지하는지 미합의.
- **13 기능 그룹 전부 유지** (P3). Phase 0 에서 구현된 건 일부 (Is/Assert/Validate/Json 등). 나머지 9 그룹 (Protobuf/Random/LLM 등) 의 v13 로드맵 명확한가.

**C**: 첫 번째 — emit 결과에 `eval` 없는지 grep 으로. `R-1.8-A-0001` 신설. 매 fixture 빌드 후 결과 JS 에 `eval` / `new Function` 금지 grep.

**B**: 두 번째 — 저와 C 의 Phase 1~2 로드맵. Phase 1 에 Tags 완성 + 32 format, Phase 2 에 LLM + Protobuf. Random + Misc 는 Phase 2~3. 명시적 로드맵 문서 별도.

**E**: 접수. `R-1.8-A-0001` + 로드맵 문서 의무화.

## 공격 4 — "samchon 혼자" 가정

**E**: wiki/08/09 의 R8 (samchon 번아웃) 은 큰 리스크입니다. 본 회의 모든 합의가 samchon 혼자라도 유지 가능한가?

**F**: 솔직 답변. 불가능합니다. 여기 규약 합의의 실현은 **최소 2 명 풀타임 개발자** 가정. 현 상태 (samchon 혼자) 로는 Phase 0 종료도 어렵습니다.

**A**: 우리는 규약을 합의할 뿐이고 실현은 samchon 책임. 규약이 혼자서 구현 불가능하다고 낮춰 쓸 이유는 없음. 다만 규약 **중 어느 것이 Phase 별 필수, 어느 것이 nice-to-have** 인지 우선순위를 명시.

**E**: 좋은 판단. 각 규약에 `priority: P0 | P1 | P2` 를 표기. P0 = Phase 0 필수. P1 = Phase 1 필수. P2 = nice-to-have.

**모든 역할**: 동의.

## 공격 5 — Mega-2 로 이월하는 미결

**E**: 남은 미결은?

- `@typia/runtime` 의 v14 분리 일정이 전략 변경 시 유동.
- AI-native DX 확장 범위.
- 4 프로젝트 동시 launch 오케스트레이션 세부.
- tsgo Go 1.27+ linkname 제한 대응.
- linux-arm 32-bit 실측 결과.
- `@typia/unplugin` 500 LOC 이하 실측.

모두 Mega-2 의 "허점 공격" 으로 이월.

## 감수 결과 — 피해자 목록

**E**: 이번 감수에서 **새로 드러난 공백 / 교정**:
- BND-API-04-DEF 분리 원칙 신설.
- 검증 공백 6 건 중 5 건 verifier 추가, 1 건 (C4-02) 약한 verifier.
- `R-1.8-A-0001` 신설 (eval/new Function grep).
- Phase 별 로드맵 문서 의무화.
- 규약 priority (P0/P1/P2) 전면 표기.

**E (의장)**: 이로써 통합 감수 종료. Session 9 에서 최종 의결합니다.

**Session 8 종료**.

---

## Session 8 결산

### 새로 추가된 규약·verifier

| ID | 내용 | 담당 |
|----|------|------|
| BND-API-04-DEF | API 불변 정의 명시 (3 축 분리) | A |
| Pointer key lint | AST parser 기반 | B + C |
| metadata_recursive_test | IR 재귀 플래그 검증 | B |
| submodule clean CI | git submodule status | F |
| replace 타이머 경고 | 90 일 경고 Action | F |
| R-1.8-A-0001 eval/new Function grep | 매 fixture 후 | E |
| Phase 별 로드맵 문서 | namespace 완성 계획 | A + B + C + D |
| 규약 priority P0/P1/P2 | 전 규약 | 전원 |

### 이월

Mega-2 로: 6 건 (위 참조).

다음 세션: **S9 — 최종 의결**. 의장 A.
