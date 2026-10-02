# Evidence 진실성 검증·조치 인수인계

## 목표와 최신 지시

기존 이슈 #2471·인수인계 #2499 및 Draft PR #2472의 Evidence 작업을 이어간다. 저장소는 `D:/github/samchon/typia`, 브랜치는 `feat/evidence-contracts`, 작성 시 HEAD는 `6d6d0997b89313bc8d61299dde7ea7fa6ff15959`다. 현재 작업 트리는 변경 중이다. 시작할 때 실제 HEAD와 diff를 확인하고 사용자 수정까지 포함한 현재 상태를 기준으로 삼는다.

이번 실행은 아래 모듈별 배정과 개별 순차 조치 절차를 따른다. 스킬 파일은 수정하지 않는다. 관련 스킬을 읽되 최신 사용자 지시가 우선한다.

**작업의 단위는 개별 선언·테스트다. 대상 하나마다 진실성 판정과 필요한 조치·검증을 끝내고 다음 대상으로 넘어간다.** 전체 저장소 또는 담당 모듈 전체의 정독 완료를 조치의 선행 조건으로 두지 않는다. 아키텍처, 실행 경로, 전체 대상 목록, 의존성과 영향 범위를 파악하는 일은 필요하며 허용한다. 개별 대상의 결론을 내리는 데 필요한 다른 코드도 충분히 확인한다. 같은 원인의 수리는 영향을 받는 대상과 함께 처리하되 무관한 대상들의 조치를 기다리지 않는다.

## 현재 상태

- 개별 진실성 판정·수리·말소 완료 기록은 아직 없다. 모든 배정 대상에 완료 처분이 필요하다.
- `.tmp-ttsc-typia-tests` 생성 코드·환경변수·ignore 참조는 제거됐고 실물 폴더도 없다. ttsc 일반 동작만 검사하던 6개 파일은 삭제했고 typia 진단 포맷 검증은 독립 case로 유지한다. 남은 typia fixture는 Go 테스트 수명에 속한 OS temp 입력을 사용한다.
- `.wiki`를 재생성하지 않는다. 보조 스크립트 파일 작성·실행을 하지 않는다. 공식 명령과 직접 도구 호출을 사용한다. 필요한 제품 회귀 테스트는 정규 테스트 위치·runner에 작성한다.
- 사용자가 `tests/test-typia-automated/src/internal/_check_invalidate_json_value.ts`를 직접 수정했다. 덮어쓰거나 되돌리지 않는다. 다른 사용자 변경에도 같은 원칙을 적용한다.
- 설정·말소 변경이 반영된 실제 HEAD와 diff를 확인해 이어간다. 전체 Evidence 검사는 답변 및 참조 오류가 남아 성공하지 못했다. 이 미완료 사항을 개별 조치한다.

## 유지할 Evidence 설정

| 범위 | 선택과 계약 |
| --- | --- |
| packages 7개 TS | 각각 단일 TS claim, `src/**/*.ts`, `contracts/common.md`만 |
| packages/typia Go 제품 | `native/**/*.go`, `!native/**/*_test.go`, `contracts/common.md` |
| packages/typia Go 테스트 | `native/**/*_test.go`, `test/**/*.go`, `contracts/testing.md` |
| tests 일반 | `src/**/*.ts`에 `contracts/testing.md`; 실제 E2E 대상에만 별도 `contracts/e2e.md` claim |
| tests/template | 예외 없이 단일 claim, `src/**/*.ts`, `contracts/testing.md`만. Go claim 없음 |
| 두 automated | `src/**/*.ts`, `!src/features/**`; 생성 폴더는 어떤 claim에서도 선택하지 않음 |
| tests/test-error | Evidence 등록 철폐: config와 package evidence script 삭제, 두 fixture의 Evidence 태그 제거. 기존 진단 테스트는 유지 |
| root Node tooling | 기존 JavaScript 설정은 유지. TS 설정과 혼동하지 않음 |

TS에 performance claim을 다시 넣지 않는다. tests에 common claim을 다시 넣지 않는다. automated의 생성 폴더를 제외하는 것은 사용자 승인 예외이며 테스트 실행을 삭제한다는 뜻이 아니다. 그 밖의 대상 축소·severity 약화·전체 문서 제외로 오류를 숨기지 않는다. `test-typia-exact-optional`은 사용자 지시로 삭제됐으므로 복구하지 않는다.

## 담당 배정

다음 실행에서 패키지 7개와 Evidence를 유지하는 tests 모듈 10개에 각각 담당자 한 명을 배정한다. 지금 이 문서를 작성하는 단계에서는 그 팀을 개설하지 않는다. 다음 lead는 실제 동시 실행 한도에 맞춰 즉시 작업할 담당자만 실행하고 나머지는 다음 빈 슬롯에 배정한다. 사용자 승인한 모듈 분할을 일반 전체 독립 팀 리뷰로 바꾸지 않는다. 자식 에이전트의 재위임은 금지한다. clone/worktree를 만들지 않고 현재 checkout에서 명시된 파일 소유권을 지킨다.

| 담당 | 소유 범위 |
| --- | --- |
| packages/interface | 해당 package TS 선언·private helper |
| packages/jev | 해당 package TS 선언·private helper |
| packages/langchain | 해당 package TS 선언·private helper |
| packages/mcp | 해당 package TS 선언·private helper |
| packages/typia | TS·native Go 제품 및 선정된 `native/**/*_test.go`, `test/**/*.go`. 제품과 테스트 계약·처분 기록을 분리 |
| packages/utils | 해당 package TS 선언·private helper |
| packages/vercel | 해당 package TS 선언·private helper |
| tests/template | template 선정 대상과 지원 코드 |
| tests/test-interface | compile-only 테스트 |
| tests/test-jev | 해당 모듈 테스트 |
| tests/test-langchain | 해당 모듈 테스트 |
| tests/test-mcp | 해당 모듈 테스트 |
| tests/test-typia-automated | authored source·composite·helper·generator. 생성 features 제외 |
| tests/test-typia-schema | 해당 모듈 테스트 |
| tests/test-utils | 해당 모듈 테스트 |
| tests/test-utils-automated | authored helper·generator·runner. 생성 features 제외 |
| tests/test-vercel | 해당 모듈 테스트 |

Go 테스트는 누락하지 않는다. packages/typia 담당자가 선정된 Go 테스트까지 책임지되 제품과 테스트의 계약을 분리한다. 다른 tests 담당자가 Go 회귀 수정에 협력할 때 lead가 해당 파일의 writer를 명시적으로 넘긴다. 현재 `.tmp` 말소 담당자의 파일은 인계 전 다른 담당자가 수정하지 않는다. root Evidence tooling은 lead가 진실성 판정·조치를 책임진다. tests/config·debug·test-error는 별도 Evidence owner가 아니며, 필요한 의존성·runner 연결은 담당자가 추적한다.

lead는 모듈 간 원인과 소유권 충돌을 해결하고 결과를 독립 확인한다. 한 담당자가 다른 모듈 수리가 필요하다는 이유로 몰래 그 파일을 수정하지 않는다. 담당자에게 구체적인 원인·필요 조치·관련 대상을 전달하고 영향을 받는 PASS를 재검증한다. 서로 무관한 모듈의 진행까지 멈추는 전역 barrier를 만들지 않는다.

## 모든 담당자에게 전달할 절차

1. `AGENTS.md`, project·development·contracts·documentation·review 스킬을 실제 읽는다. production의 common, 테스트의 testing, 실제 E2E의 e2e, native 경계의 portability 및 적용되는 Go 책임의 performance 문서를 읽는다. 병렬 운영은 multi-agent를 읽되 이번 사용자 승인 모듈 분할과 개별 순차 조치가 우선이다. Git 작업 전 pull-request, benchmark 작업 전 benchmark 스킬을 읽는다. issue-campaign은 이 단일 정의된 과업에 적용하지 않는다.
2. 담당 모듈의 아키텍처와 실제 runner를 파악하고 공식 `evidence list --config <경로>`로 대상을 확인한다. private helper·anonymous callback·script entry·compile-only·adapter가 선택하지 못하는 공개 선언도 소유자별로 기록한다. 읽기 수와 선택 수를 PASS 수로 보고하지 않는다.
3. **대상 하나를 고른다.** 실제 구현·native doc·모든 적용 chapter의 답변·private helper·실행 owner·필요한 의존성과 history를 함께 대조한다. 문구의 존재, Evidence exit 0, 기존 suite 성공만으로 진실성을 확정하지 않는다.
4. 문제가 없으면 근거를 남겨 `PASS_UNCHANGED`로 확정한다. 거짓 답변·구현 결함·잘못된 oracle이면 실제 소유자를 먼저 수리하고 답변을 고친다. 좁은 적절한 검증과 영향받는 검증을 완료한 뒤 `PASS_FIXED`로 확정한다. 의미 없는 테스트나 중복 시나리오를 말소할 때는 근거 및 보존할 assertion의 실행 owner를 확인하고 관련 검증 후 `PASS_REMOVED`로 확정한다. 필요한 호출부·등록 정리까지 완료한다.
5. 미해결 원인·미실행 필수 검증·의존성 수리 대기가 있으면 `PENDING`으로 남긴다. 그 대상을 PASS로 세지 않는다. 독립적으로 처리 가능한 다음 대상으로 진행한다. 필요한 조사나 실행의 증상 수집은 끝까지 수행하되 이를 모듈 전체 정독 후 대량 조치라는 절차로 확장하지 않는다.
6. 개별 조치가 완료되면 바로 기록한다. 하나의 완성된 coherent 변경 묶음을 소유 파일만 포맷·검증해 lead에 제출한다. Git writer를 순차로 확보하고 기존 topic branch에 명시 경로로 commit/push하며 원격 SHA 및 해당 CI 결과를 확인한다. 사용자 수정은 명시적으로 구분해 임의로 커밋하지 않는다. 미완료 변경을 완성 묶음에 섞지 않는다.
7. 관련 코드가 바뀌면 영향을 받은 기존 PASS를 무효화하고 다시 확인한다. 모듈 전체 완료 시 현행 선정 대상·미선정 리뷰 대상·처분 기록·실행 결과를 대조하여 누락을 확인한다. 모든 대상에 완료 처분이 있고 미해결이 없을 때만 모듈 완료다.

각 처분 기록에는 `owner / 대상 경로와 symbol / 적용 chapter / 확인한 사실과 근거 / 처분 / 조치 파일 / 검증 명령과 실제 exit·결과 / source 상태 / 남은 문제`를 넣는다. 별도 스크립트나 거대한 자동 ledger를 만들지 않고 간결한 Markdown 기록 및 공식 도구 출력으로 남긴다. 새 담당자는 기록의 결론을 증거 없이 상속하지 않는다.

진행률은 **완료 처분 수 ÷ 배정한 전체 대상 수**다. 전체 대상에는 승인된 의미 없는 대상 말소도 포함해 분모를 줄여 완료율을 부풀리지 않는다. `PASS_UNCHANGED`, `PASS_FIXED`, `PASS_REMOVED`를 따로 보고하고 PENDING과 필수 검증 누락도 함께 보고한다. 기록이 없거나 원본 근거가 없어 재확인해야 하는 과거 분석은 완료 처분이 아니다.

## 보존 및 금지

- master의 의미 있는 입력·assertion·negative·failure identity·canonical 등록과 실행을 보존한다. 테스트를 줄이거나 옮길 때 남은 실행 owner를 확인한다.
- Go unit은 실제 metadata/AST/options/emission을 in-process로 검사한다. Node/subprocess runtime을 Go unit에 넣지 않는다. 필요한 실제 JavaScript 의미는 정규 TS E2E에서 확인한다.
- 공개 API·visibility·옵션 의미를 Evidence 선택을 위해 변경하지 않는다. `@internal`을 제거하지 않는다. alias·wrapper·재export로 실제 소유자를 숨겨 체크를 우회하지 않는다. 잘못된 답변을 일반 준수 문구로 바꾸지 않는다.
- master 복원 대상인 template 기존 파일은 의미를 보존하고 새 공유 검증 helper는 유지한다. 사용자의 최신 명시적 수정은 되돌리지 않는다.
- native/cache·generator·packing·Git index writer는 각각 순차로 조정한다. source 소비 실행을 formatter·generator와 경합시키지 않는다. 남의 프로세스·lock을 종료하거나 wholesale cache 삭제로 문제를 가리지 않는다.
- `.tmp-ttsc-typia-tests` 고정 폴더·생성 경로·ignore·설정 참조는 완전 말소한다. 이름만 바꾼 repo scratch로 되살리지 않는다. 현재 전담자 결과를 확인해 실제 typia 회귀 assertion을 보존했는지 검증한다.
- 최신 사용자 지시에 따라 목적 없는 fixture와 ttsc 자체를 검증하는 테스트는 삭제한다. typia 결과를 검사하지 않는 일반 TypeScript assignability·compiler reporting 검증 등을 다른 임시 디렉터리에 옮겨 존속시키지 않는다. 유지하는 테스트는 실제 typia metadata/AST/emission/diagnostic 책임을 근거로 구분한다. 이 명시적 삭제는 과거의 일괄 보존 지시보다 우선한다.
- release·package version 변경·merge는 이번 작업에 포함하지 않는다. 완료 조건 전 Draft 해제나 작업 완료 선언을 하지 않는다.

## 이어서 확인할 기존 후보

아래 후보는 현행 source에서 지원 계약과 실제 결과를 확인하고 개별 처분한다. 목록에 없는 대상도 빠짐없이 처리한다.

| 후보 원인 | 확인할 소유자·결과 |
| --- | --- |
| bigint tag 정밀도 | Maximum/Minimum/ExclusiveMaximum/ExclusiveMinimum/MultipleOf의 `BigInt(number literal)` 반올림. 지원되는 ±1152921504606847000n 경계와 random 등 소비자까지 확인 |
| required 배열 hole 누락 | portable validator와 native is/assert/validate 및 equals의 map/every traversal. required string 배열 hole 거절, optional/any/unknown 및 정상 입력 보존 |
| 공개 mixed schema 타입 | interface의 IMixed가 불필요한 required composition/ref 필드와 제한된 default를 요구. 실제 typed converter 입력으로 검사, cast로 숨기지 않음 |
| strict LLM description 왕복 | whitespace default·newline pattern·authored tag 충돌의 데이터 손실. TS converter/inverter와 native description producer, legacy tag 의미 확인 |
| nullable 공유 입력 손실 | OpenApiV3Upgrader의 borrowed schema attribute 삭제. 반복 호출·공유 참조·순서별 결과 확인 |
| nullable 이름 충돌 | OpenAPI/Swagger downgrader의 기존 `X.Nullable` component 재사용. 전체 기존 이름·순서·재귀·native Go port까지 확인 |
| LLM 배열 covers uniqueItems | `covers`가 중복 허용 여부를 놓치는 경우. equal/reverse/bounds 및 기존 directional coverage 계약 보존 |
| functional 입력 중복 평가 | direct/create 및 async에서 factory·getter·mutable function을 wrapper 생성 시 한 번 평가. errorFactory 평가 순서와 throw timing 확인 |
| functional helper 이름 충돌 | 생성 binding과 parameter/default free identifier 충돌. this/rest/destructure/기존 optional 의미 보존 |

기존 테스트 수리 후보는 Go reflect non-literal fixture의 정의되지 않은 `Empty` alias(진짜 never provenance 필요), protobuf lowercase decode 입력 역할, `_test_validateEquals`가 실패 결과의 success/error 구분 없이 통과시키는 oracle이다. 각 입력·case identity·원래 assertion을 보존해 확인한다.

추가 확인 대상은 notation optional 존재성, JSON stringify 정상 optional tuple 길이, shallow array/tuple depth budget, HTTP summary-only prose, pure alias cycle, typed-array 비교, protobuf scalar 처리, recursive random이다. 실제 지원 계약·history·양성/음성·경계 재현 후 개별 처분한다.

## 전체 완료 게이트

모듈별 조치 완료 후 lead가 통합 상태에서 실행한다. 필요한 모듈 검증을 마지막까지 미루라는 뜻이 아니다. 최종 증거는 실제 source SHA·변경 상태·환경·명령·exit·실행 수·실패·누락을 포함한다. 과거 성공을 최신 HEAD 전체 성공으로 확대하지 않는다.

```text
pnpm install --frozen-lockfile
pnpm format
pnpm evidence
pnpm build
pnpm test
go -C packages/typia/test test -tags typia_native_internal ../native/...
pnpm --filter ./benchmark --fail-if-no-match build
pnpm package:tgz
```

전체 TS 실패 수집의 보완 명령은 `pnpm --filter=./tests/test-* --fail-if-no-match -r --no-bail start`이며 canonical 성공을 대신하지 않는다. Evidence의 generate preparation을 generated selection으로 오해하지 않는다. 불필요해진 preparation wiring의 조정은 원래 생성·테스트 실행 owner와 영향을 확인하여 판단한다.

fresh TGZ 7개로 repository와 상위 node_modules에서 격리한 esm/declaration/smoke/mcp consumer를 원래 manifests·dependency ranges·overrides로 검증한다. ESM AI6/AI7, declaration build/test, smoke, MCP build/test와 interop를 포함한다. website는 정확히 설치된 ttsc/@ttsc/wasm 및 shim을 사용하는 GOWORK로 compiler tests와 강제 WASM build를 검증한다. 설치 버전과 다른 sibling checkout을 사용해 결과를 섞지 않는다. packed consumer를 통과시키려고 직접 dependency를 추가하거나 pin/hoist로 계약을 약화하지 않는다.

일반 push마다 해당 SHA의 CI를 끝까지 확인한다. 모든 수리와 전체 게이트가 완료된 고정 상태에서 lead가 base→HEAD 및 미커밋 변경 전체를 **마지막 단독 Self-Review**한다. 수정이 나오면 필요한 게이트를 재실행하고 fresh 전체 라운드를 반복한다. 모듈 담당자들의 결과는 이 전체 Self-Review를 대신하지 않는다.

PR #2472의 기록은 GitHub REVIEW event `COMMENT`를 사용한다. ordinary issue comment, own PR approve/request-changes로 대체하지 않는다. Evidence adapter가 선택하지 못하는 @internal 공개 overload 등의 한계와 실제 수동 검증 owner도 기록한다. 최종 완료 조건은 전 대상 처분 완료, 수리·말소 검증 완료, 전체 게이트·CI 완료, 마지막 solo 전체 Self-Review 완료이며 하나라도 미완료이면 과업 미완료다.
