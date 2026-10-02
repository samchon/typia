# packages/vercel

Owner: packages/vercel agent. Starting HEAD `3d41b84eb564c18932f7018911cfb019c449599b`; package initially unchanged. Read AGENTS.md, project/development/contracts/common/documentation/review/multi-agent and issue #2500. Existing Node v24.18.0 workspace and repository pnpm-lock.yaml. Latest user instruction explicitly excludes unsupported reserved function names from product obligations.

## Census and factual evidence

`pnpm exec evidence list --config packages/vercel/evidence.config.json` exit 0: 7 selected declarations and 6 reference nodes (reported Targets: 13). Single TS common claim and `src/**/*.ts` unchanged. `git ls-files packages/vercel` covers 3 source files, README, manifest, Evidence config, tsconfig and shared rolldown forwarding config. No authored script entry. Review-only declarations: 10 private types/helpers and 3 execution callbacks; total denominator 20.

Initial and subsequent package Evidence exit 0: 1 claim, all 4 common chapter units, no diagnostic. Initial package build exit 0. Actual installed SDK provider-utils `schema.ts` preserves jsonSchema and optional validate callback; `types/tool.ts` returns supplied Tool. LlmJson.validateArguments coerces then invokes supplied validator; LlmJson.validate inverts output with generating config. ILlmFunction documents application-local unique names. Read history da1cc81719, 77ed2cdd7c and b810e7b20c. These source and dependency facts, rather than checker success alone, establish the following dispositions.

All targets below apply common chapters Principled Implementation, Clear and Simple Design, Prohibited Implementation Shortcuts and Meaningful documentation. Public native documentation and all answers were compared against actual source and private helpers. Private declarations are reviewed through their owning operation rather than falsely counted as selected. No SDK mutation, fixture-only logic or unsupported compensation exists in the user's supported-name scope. Algorithms and Evidence answers remain unchanged; lead added only an ordinary context comment in VercelToolsRegistrar.convert and that comment was also inspected. Agent action files: this report only. Each row's validation is package Evidence/build exit 0 plus the final full adapter suite below; no remaining declaration issue.

| Target | Specific facts and grounds | Disposition |
| --- | --- | --- |
| `src/internal/VercelParameterConverter.ts#VercelParameterConverter.convert` | Public jsonSchema preserves input without validate callback; cast affects typings only. Native comment distinguishes advertisement from typia validation. | PASS_UNCHANGED |
| `src/internal/VercelParameterConverter.ts#VercelParameterConverter.convertToolOutput` | Disjoint success/data and failure/error object shapes match declared-output execution; root $defs retains local references. Native comment explains definition ownership. | PASS_UNCHANGED |
| `src/internal/VercelParameterConverter.ts#VercelParameterConverter` | Two members separate parameter carrier and result envelope; registrar alone owns validation. Namespace and function docs state that difference. | PASS_UNCHANGED |
| `src/index.ts#toVercelSchema` | Direct converter delegation; JSDoc example explicitly coerces and validates generated output. No duplicated validation policy. | PASS_UNCHANGED |
| `src/index.ts#toVercelTools` | Single/array/props normalization uses one owner; props prefix wins. Docs describe producers, options and feedback. Unsupported reserved names are outside latest user contract. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#VercelToolsRegistrar.convert` | Final-name Map preflights multiple controllers; application-local uniqueness is ILlmFunction premise. Same naming helper and constructor serve both supported protocols. Docs state collisions and receiver binding. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#VercelToolsRegistrar` | Collision checking, class/HTTP registration and common result framing are distinct actual responsibilities; docs explain execution and config ownership. | PASS_UNCHANGED |
| `src/index.ts#IVercelController` | Union preserves class/HTTP discriminants and executor/connection distinctions. | PASS_UNCHANGED |
| `src/index.ts#IVercelToolsOptions` | Optional prefix has documented false default; registrar applies it. | PASS_UNCHANGED |
| `src/index.ts#IVercelToolsProps` | Extends the option with a documented controller list. | PASS_UNCHANGED |
| `src/index.ts#normalizeVercelToolsProps` | Returns props unchanged and forms array/singleton input with options prefix. Reviewed under public owner answer. | PASS_UNCHANGED |
| `src/index.ts#isVercelToolsProps` | Excludes arrays/null before controllers-property detection; supported typed protocols are distinct. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#registerClassController` | Missing callable throws; method.call retains executor receiver; shared constructor owns validation. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#registerHttpController` | Captures application/connection; supported custom callback yields body, absent callback delegates HttpLlm.execute. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#createTool` | Inverts declared output once with actual config, validates arguments before dispatch, converts output failures/throws to text; void has no output schema. Private comment states config premise. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#getToolName` | Same optional prefix operation serves preflight and registration. | PASS_UNCHANGED |
| `src/internal/VercelToolsRegistrar.ts#ITryResult` | Literal success discriminator separates optional data from required error string; actual branches match it. | PASS_UNCHANGED |
| `registerClassController#execute callback` | method.call retains receiver and Promise adopts synchronous/asynchronous return. | PASS_UNCHANGED |
| `registerHttpController#execute callback` | Response-body override and default application's connection/function/input remain separate supported branches. | PASS_UNCHANGED |
| `createTool#execute callback` | Nullish args become empty object, validator guards invocation, output verdict chooses envelope, Error/non-Error throws preserve text. | PASS_UNCHANGED |

## Withdrawal and verification status

Task-created unsupported-name product repair, related Evidence edits, unit case/registration and one website sentence were withdrawn on the user's latest instruction. Before restoration their diffs were confirmed to contain only this task's edits. Source and answers returned to task-start state; the task-created test file was removed. Scoped git diff/status exit 0 confirms no remaining changes in those product, test and website paths. No original user changes were modified. This withdrawal is not PASS_FIXED/PASS_REMOVED and does not reduce the original 20-target denominator. No unsupported-name repair or extension remains requested. Lead separately owns the user's requested ordinary context comment beside registration.

First broader package build exit 1 and test-vercel start exit 2 arose from another owner's intermediate EndpointUtil.ts unused IDENTIFIER_START (TS6133); owner removed that declaration and no foreign source was modified here. One run begun before restoration retained the deleted case import snapshot and exited 1; it was discarded and a fresh run was executed. Test-vercel Evidence exit 1 has 209 pre-existing claim-reference errors, passed to lead for its separately assigned test owner.

Final restored-source `pnpm --filter ./packages/vercel build` exit 0; `pnpm --filter ./packages/vercel evidence` exit 0; `pnpm exec evidence list --config packages/vercel/evidence.config.json` exit 0 still selects 7 declarations. `pnpm --filter ./tests/test-vercel start` exit 0: both 2 portable unit cases and all 22 native-enabled integration cases passed, covering class/HTTP execution, validation, output schemas/constraints/references, omitted arguments, void results, collision namespaces and actual AI SDK mock-model paths. Scoped `git diff --check -- packages/vercel` exit 0. Final source reconciliation finds only lead's ordinary context comment in this package; unsupported product/test/guide edits are absent.

Final clean owned-surface pass found no further supported-scope improvement. Disposition counts: 20/20 PASS_UNCHANGED (7 selected, 13 review-only), 0 PASS_FIXED, 0 PASS_REMOVED, 0 PENDING; no missing required package verification. Package assignment complete. The separate tests Evidence cleanup and final integrated CI remain lead/test-owner responsibilities.
