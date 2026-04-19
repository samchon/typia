# Session 5 — 검증 공백과 R-ID 체계

> 2026-04-19, 15:55. 의장: **E (QA/Test Lead)**. 기록: A.
> 쟁점: (1) 선언만 있고 검증 수단 없는 규약, (2) "PASS 되게 만든 무의미 테스트", (3) regression ID 체계, (4) parity fixture 전면 도입.
> 자료: `cycle-01-E-testing.md §1~§6`, `cycle-02-E-review.md §7.7` (검증 공백 표), 각 초안의 "검증 체크리스트" 섹션.

## 의장 개회

**E (의장)**: 저는 규약 품질을 검증 가능성 하나로 평가합니다. 선언만 있고 CI 게이트 없으면 **공허** 합니다. 지금까지 S1~S4 에서 나온 합의를 되짚어 보면 40+ 규약인데, 이중 CI 감지 수단이 명확한 건 절반 정도입니다. 이 세션은 공백을 메우는 데 씁니다.

첫째 쟁점. A 의 BND-API-04 "사용자 관측 동치" 는 어떻게 CI 에서 감지합니까?

## 검증 수단 없는 규약 — 공개 문책

**E**: A 의 BND-API-04 는 "사용자가 `typia.is<T>(input)` 호출 시 v12 와 v13 이 외부 관측 동치" 를 요구합니다. 검증 수단?

**A**: 제 초안엔 명시 안 했습니다. 솔직히. 제안이 있습니다.

- **parity test suite**: 기존 `tests/` 아래 모든 테스트 fixture 를 v12 typia 로도, v13 ttsc 로도 컴파일·실행해 결과 비교. 이미 15 개 fixture 가 있으니 확장.
- **snapshot diff**: 각 fixture 의 `~standard` JSON.stringify, 에러 메시지, 에러 path 를 스냅샷 저장. v12 와 v13 비교.

이걸 **BND-API-04-VER** (verifier) 로 CI 게이트 추가.

**E**: 좋습니다. `R-1.5-A-0001` 부여. parity suite 가 RED 일 때 PR 머지 금지.

## B 의 "가정 (측정 없음)" 3 곳

**E**: B 의 §6 성능·캐싱 규약에 "가정 (측정 없음)" 이 3 곳 있습니다. 이건 skip 의 사전 단계입니다.

**B**: 인정합니다. 그 세 가지는:
1. "Collection 에 의한 dedup 이 allocation 감소 기여" — 측정 안 됨.
2. "Name 캐시가 큰 IR 에서 유효" — 실측 안 됨.
3. "pointer identity 가 Collection 이 보장해야 hit" — 수치 없음.

**E**: 세 가정 전부 벤치마크로 측정 가능합니다.
- B1: Collection 있을 때/없을 때 allocation 비교 (`go test -benchmem`).
- B2: Name 캐시 hit/miss 카운트.
- B3: Collection 누락 시 `panic(typeKey mismatch)` 로 전환.

**B**: B3 는 즉시 가능. B1/B2 는 Phase 0 종료 전 bench 추가.

**E**: `R-1.5-B-0001`, `R-1.5-B-0002`, `R-1.5-B-0003` 부여.

## C 의 driver rewrite 규약 — fixture 공백

**E**: C 의 §8 JS rewrite 규약은 "IIFE 치환, unused import 제거, sentinel" 을 말합니다. fixture 가 있습니까?

**C**: `tests/test-typia-ttsc/features/test_rewrite_idempotent.ts` 가 있습니다. 같은 ttsc 를 두 번 돌려도 두 번째 실행이 no-op 이어야 한다는 idempotence 검증. 하지만 **sentinel** 검증은 없어요. sentinel 은 emit 이 만든 identifier 가 unused import 제거 로직에 걸리지 않도록 마크하는 건데, 이게 깨지면 emit 된 JS 가 `ReferenceError` 로 죽습니다.

**E**: fixture 추가. `R-1.5-C-0001` sentinel drop 테스트: 일부러 sentinel 없는 identifier 를 만들면 rewrite 가 이를 제거해 버리는지.

**C**: OK.

## D 의 deprecation 메시지 — semver 분류

**E**: D §3.5 에서 v13.3 에 `typia` bin deprecation warning 메시지 + dry-run. 이 메시지 변경이 semver 어느 축?

**D**: 메이저? 마이너? 패치? 논란 가능.

**F**: 제 주장은 **minor**. 메시지 변경은 breaking 이 아님. deprecation notice 는 semver 에서 minor 에 포함되는 게 관례.

**A**: 동의. minor.

**E**: 그럼 fixture 는 "deprecation 메시지가 stdout 에 나오는지" 만 체크. `R-1.5-D-0001`.

## "PASS 되게 만든 무의미 테스트" 패턴

**E**: 이건 별도 감시입니다. 저는 **테스트 안티패턴 lint** 를 제안합니다.

금지 패턴:
- `if (err) throw err` 만 있고 실제 결과 검증 없음.
- `expect(result).toBeDefined()` 정도만 있음.
- `.skip()` / `.only()` / `.todo()` 태그가 main branch 에 merge.
- Go `go test` 의 `t.SkipNow()` / `t.Skip(...)` main branch.

이를 grep + ESLint custom rule + Go lint 조합으로 감지.

**B**: 동의. 저 Go 쪽은 `t.Skip` 을 grep 으로 잡으면 됩니다. 단 generated code 는 제외.

**E**: `R-1.5-E-0001` (no-skip-on-main) + `R-1.5-E-0002` (no-meaningless-assert).

## R-ID 체계 공식화

**E**: regression ID 형식을 공식화합니다.

```
R-{M}.{S}-{R}-{N}
```

- `M` = Mega cycle 번호 (1~6)
- `S` = Sub cycle 번호 (1~5)
- `R` = 제기 역할 (A~F)
- `N` = 4-digit 시퀀스 (해당 Mega-Sub-Role 내)

예: `R-1.5-E-0001` = Mega 1, Sub 5, 역할 E 가 제기한 첫 번째.

또 `R-{4-digit}` 단순형 (예: `R-0001`, `R-0002`) 은 Phase 0 실구현에서 발견된 치명 버그 전용 (Cycle 4 의 포인터 재귀 + goroutine 스택오버). legacy 보존.

**A**: ID 체계 OK. 규약 문서 내 `regressions.md` 에 레지스터 만들고, 각 fixture 파일에 `// R-1.5-E-0001` 주석으로 연결.

**E**: 그렇게.

## parity fixture 전면 도입

**E**: 이번 세션 제안 중 가장 큰 것. **모든 기존 fixture 를 parity fixture 로 업그레이드**. 즉 현 14 개 fixture 를 v12 typia + v13 ttsc 로 **둘 다** 돌려 동치 검증.

**A**: 필요한 규모?

**E**: 현 14 fixture × (v12 + v13) = 28 build. CI 시간 영향은 5~10 분 추가 추정. 제가 Phase 0 종료 전에 infra 만들고 Phase 1 에 fixture 점진 업그레이드.

**F**: CI 비용 증가 $50 예산 안에 들어옵니까?

**E**: 네. 아직 여유 있습니다.

**F**: OK.

## CI 9 job matrix 확정

**E**: 앞서 F 와 합의한 3/6/9 조합을 세부 지정합니다.

**PR (3 job)**:
- `linux-x64 Node 22 Go 1.26`
- `macos-arm64 Node 22 Go 1.26`
- `windows-x64 Node 22 Go 1.26`

**Release (+3 = 6 job)**:
- PR 3 +
- `macos-x64 Node 22 Go 1.26`
- `linux-arm64 Node 22 Go 1.26`
- `windows-arm64 Node 22 Go 1.26`

**Nightly (+3 = 9 job)**:
- Release 6 +
- `linux-arm Node 20 Go 1.26` (32-bit 스모크)
- `linux-x64 Node 18 Go 1.26` (legacy)
- `linux-x64 Bun latest Go 1.26` (alt runtime)

**F**: 합의.

**C**: linux-arm 32-bit 에서 unsafe.Pointer lint 결과 중점 검증. `R-1.5-C-0002`.

## 의장 요약

**E (의장)**: 합의.

1. **BND-API-04 → BND-API-04-VER** parity suite.
2. **B 가정 3 곳** 측정 또는 panic 전환.
3. **sentinel fixture** 추가.
4. **deprecation 메시지 semver = minor**.
5. **no-skip-on-main lint**.
6. **R-ID 체계 공식**.
7. **parity fixture 전면 도입** (14 → 28 build).
8. **CI 9 job matrix 확정**.
9. **regressions.md 레지스터** 신설.

전체 **R 목록 이 세션**: A-0001, B-0001~0003, C-0001~0002, D-0001, E-0001~0002 = 9 건.

이의 없음? 없음. **Session 5 종료**.

---

## Session 5 결산

### 합의

| ID | 내용 | 담당 | 데드라인 |
|----|------|------|----------|
| C5-01 | BND-API-04-VER parity suite | A + E | Phase 0 종료 전 infra, Phase 1 fixture |
| C5-02 | B 성능 가정 측정 또는 panic 전환 | B | Phase 0 종료 전 |
| C5-03 | sentinel fixture | C + E | 이번 주 |
| C5-04 | deprecation 메시지 minor | D + F | v13.3 |
| C5-05 | no-skip-on-main lint | E + CI | Phase 0 종료 전 |
| C5-06 | R-ID 체계 공식 `R-{M}.{S}-{R}-{N}` | E | 이번 세션 |
| C5-07 | parity fixture 전면 | E | Phase 1 |
| C5-08 | CI 9 job matrix 지정 | E + F | 이번 주 |
| C5-09 | regressions.md 레지스터 신설 | E | 이번 세션 |

### 규약 문서 변경

- A §4 BND-API-04 → BND-API-04-VER.
- B §6 가정 → 측정 결과 또는 panic.
- C §8 sentinel.
- D §3.5 deprecation = minor.
- E 전반 — R-ID, parity, no-skip, 9 job.

다음 세션: **S6 — 13 namespace 용어 4 중 충돌 중재**. 의장 A.
