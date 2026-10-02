# packages/jev Evidence 판정

Owner: packages/jev 담당. 시작 HEAD `3d41b84eb564c18932f7018911cfb019c449599b`; 패키지 시작 diff 없음. `.agents/skills/{project,development,contracts,documentation,review,multi-agent}/SKILL.md`, `contracts/common.md`, AGENTS.md 및 #2500 전문을 실제 읽었다. 단일 TS claim `src/**/*.ts`와 common 4개 chapter를 유지한다.

## Census와 실행 경로

`pnpm exec evidence list --config packages/jev/evidence.config.json` exit 0: 제품 선언 3개와 reference 6개, 총 Targets 9. 선정된 제품 선언은 아래 3개이며 reference는 처분 분모에 넣지 않는다. `src/index.ts` 이외의 maintained TS source, private helper, anonymous callback, script entry 또는 미선정 공개 선언은 없다. `IJevNoulQuestion.type`와 `.instructions`는 type 소유의 native documentation으로 확인했다. `rolldown.config.mjs`는 공통 설정을 재수출하며 package build/exports 경로를 확인했다.

## 개별 처분

| 경로와 symbol | 적용 chapter | 사실과 근거 | 처분 | 조치 파일 | 검증 및 source 상태 | 남은 문제 |
| --- | --- | --- | --- | --- | --- | --- |
| `packages/jev/src/index.ts#IJevQuestion` | common 4개 전체 | `ILlmEvaluation.IChoice`, `.IScore`, local `IJevNoulQuestion` union이며 중립 boolean만 noul로 바뀐다. 직접 interface owner의 choice/score/boolean 정의와 설치된 TypeSafe SDK 0.6.0 `dist/index.d.cts:46-81`의 세 variant를 비교했다. SDK의 더 넓은 optional instructions/criteria를 전부 표현한다는 계약이 아니라 typia가 생성하는 질문의 wire representation이다. Native doc가 이 차이를 설명하며 답변 4개에 허위 사실/보상 로직이 없다. 도입 history `1c05a538b5`, acknowledgment `da1cc81719`, 문단 정리 `77ed2cdd7c` 확인. | PASS_UNCHANGED | 없음 | evidence list/inspect exit 0; package evidence exit 0 (4/4 units, diagnostics 0); `pnpm --filter ./packages/jev build` exit 0. Source unchanged. | 없음 |
| `packages/jev/src/index.ts#IJevNoulQuestion` | common 4개 전체 | required string instructions와 noul literal은 neutral boolean의 text 의미를 그대로 SDK에 전달한다. SDK `NoulQuestion`의 optional instructions는 string을 포함하므로 representation이 assignable하다. 원래 clear-design 답변의 entire wire variant는 SDK optional outcome criteria까지 표현한다는 과장이었다. 실제 생성-question 범위를 명시하도록 고쳤고, 두 member doc도 Jev variant/neutral instructions 원천을 설명하도록 보강했다. 같은 도입 및 acknowledgment history 확인. | PASS_FIXED | `packages/jev/src/index.ts` | 수리 후 package evidence exit 0 (4/4 units, diagnostics 0), package build exit 0. Prettier 개별 파일 exit 0. Portable unit 최초 2/2 exit 0; 변경은 doc와 답변뿐이며 선언 shape와 실행 bytecode는 유지. Source comments changed. | 없음 |
| `packages/jev/src/index.ts#toJevQuestions` | common 4개 전체 | Object.entries가 own enumerable string keys만 방문하고 output의 defineProperty가 __proto__를 own data로 정의하며 output prototype를 변경하지 않는다. boolean만 fresh noul record로 변환하고 choice/score는 같은 객체를 전달한다. input을 쓰는 경로와 helper/callback은 없다. Empty/세 variant/own __proto__/비변이 portable assertions와 SDK static assignability를 직접 확인했다. Native `LlmEvaluationProgrammer.go:20-26`가 `_createLlmEvaluation`로 연결되고 그 helper `booleanProbability`가 boolean.probability와 noul.noul을 각각 읽는다. SDK 0.6.0 request/result와 source Example을 대조했으며 도입 `1c05a538b5`의 conversion-only 구조는 현재와 같다. | PASS_UNCHANGED | 없음 | evidence inspect/package evidence exit 0; package build exit 0; `pnpm --filter ./tests/test-jev test:unit` 최초 exit 0 (2 tests passed). Source unchanged. | 없음 |

진행률 3/3: PASS_UNCHANGED 2, PASS_FIXED 1, PASS_REMOVED 0, PENDING 0. 빌드 산출물은 ignored이며 commit 대상이 아니다.

## 최종 대조

선정 declaration 3개와 report 3개, 미선정 maintained TS 선언 0개를 현행 list와 `git ls-files packages/jev`로 대조했다. 전 소유 파일과 source diff를 다시 읽었고 새 문제는 없었다. 최종 `pnpm --filter ./tests/test-jev test:unit` exit 0 (2/2), `pnpm --filter ./tests/test-jev test:integration` exit 0 (3/3), `pnpm exec prettier --check packages/jev/src/index.ts` exit 0, 소유 경로 `git diff --check` exit 0. Integration은 공유 native-plugin cache lock을 기다린 뒤 실제 세 SDK case를 모두 실행했다. 필수 검증 누락과 타 모듈 수리 대기는 없다. 전 저장소 CI와 머지는 lead 소유다.
