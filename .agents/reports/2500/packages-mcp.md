# packages/mcp — #2500 진실성 판정

Owner: `/root/mcp`. 시작 HEAD `3d41b84eb564c18932f7018911cfb019c449599b`; 시작과 종료 `git diff -- packages/mcp`는 비어 있었다. AGENTS, project, development, contracts/common, documentation, review, multi-agent 및 #2500 전문을 실제 읽었다. 단일 `src/**/*.ts` TS claim과 common 4개 chapter를 유지했다. 소스는 두 TS 파일이며 생성 lib는 census에서 제외한다.

공식 `pnpm exec evidence list --config packages/mcp/evidence.config.json` exit 0: 출력 10개 중 reference ancestor/chapter 6개, 선정 선언 4개. 미선정 구현 9개(private helper 3개, private type 1개, anonymous callback 5개)와 빌드 entry 1개를 추가해 판정 분모는 14개다. 필드는 소유 type과 함께 검토했다. 아래 같은 파일은 `packages/mcp/src/internal/McpControllerRegistrar.ts`를 뜻한다.

적용 chapter C는 `contracts/common.md`의 principled-implementation, clear-and-simple-design, prohibited-implementation-shortcuts, meaningful-documentation 전부다. 미선정 대상도 owning register의 답변 및 native 문서와 함께 이 네 질문을 검토했다. 모든 행의 조치 파일은 없음, source 상태는 시작 그대로, 남은 문제는 없음이다.

## 개별 처분

| 대상 경로 / symbol | Chapter | 확인한 사실과 근거 | 처분 | 검증 |
| --- | --- | --- | --- | --- |
| `packages/mcp/src/index.ts#IMcpServerOptions` | C | 독립 optional version/textFallback이다. createMcpServer의 `??` 우선순위와 `=== true`, handleToolCall의 structured/error/void 분기가 두 속성의 기본값·효과에 일치한다. 속성 JSDoc는 배포 소유자, HTTP/class 기본 버전, 중복 payload 비용 및 비정형 결과를 설명한다. 검증 우회 옵션이 없다. | PASS_UNCHANGED | evidence/inspect/build/start exit 0 |
| `packages/mcp/src/index.ts#createMcpServer` | C | class description만 trim하고 explicit→HTTP→1.0.0으로 version을 정한다. SDK mcp.d.ts는 public server에서 custom handler 설치를 허용한다. caller가 transport를 연결한다. controller discriminator/실제 registrar 호출과 대조했고 native 문서에 class/HTTP, validation feedback, transport 예제가 있다. | PASS_UNCHANGED | evidence/inspect/build/start exit 0 |
| 같은 파일 `#McpControllerRegistrar` | C | namespace는 register 하나를 노출하고 Map/execute/schema/result 정책은 private helper에 둔다. 답변의 registry 공유, receiver 유지, HTTP 실행, input/output 검사, public SDK API는 실제 구현이다. namespace/register 문서와 helper inline 설명이 해당 비자명한 사실을 기록한다. | PASS_UNCHANGED | evidence/inspect/build/start exit 0 |
| 같은 파일 `#McpControllerRegistrar.register` | C | duplicate 검사 후 동일 Map을 list/call closure에 넘긴다. output validator는 실제 application.config로 구성하며 없는 name은 InvalidParams다. native runtime finalizer의 config 생산과 LlmJson.validate inversion/required/equals를 대조했다. lifetime/duplicate/text JSDoc와 일치한다. | PASS_UNCHANGED | evidence/inspect/build/start exit 0 |
| 같은 파일 `composeExecute` (private) | C | protocol로 HTTP/class를 분리한다. HTTP override의 IHttpResponse.body와 기본 HttpLlm.execute의 body 계약을 대조했다. class 함수 여부를 확인하고 `.call(execute,args)`로 receiver를 보존한다. supported executor injection이며 foreign mutation이 없다. register 문서/답변에 포함된다. | PASS_UNCHANGED | build/start exit 0 |
| 같은 파일 `handleToolCall` (private) | C | `args ?? {}` 후 coerce→function validator로 이어진다. failure는 실행 전 종료한다. execute/output validation/serialization 예외는 isError다. 선언 output은 exact validator 통과 뒤 structuredContent로 전달하고 fallback=true일 때만 text를 더한다. void/error 설명과 일치한다. input coerce/validator 예외는 try 밖이며 성공으로 숨기지 않는다. | PASS_UNCHANGED | build/start exit 0 |
| 같은 파일 `composeObjectSchema` (private) | C | IParameters의 object/false root에 properties/required/$defs를 전달한다. 내부 `$ref`를 변환하지 않아 pointer 의미를 보존한다. SDK object contract와 ILlmSchema.IParameters를 대조했다. 단순 adapter mapping이며 fixture별 하드코딩이 없다. register 답변에 포함된다. | PASS_UNCHANGED | build/start exit 0; canonical pointer case 성공 |
| 같은 파일 `IToolEntry` (private) | C | reflected function, executable closure, optional reusable output validator를 함께 유지한다. validateOutput 부재는 func.output 부재다. private type의 registry 역할은 register native 문서/답변에서 설명한다. | PASS_UNCHANGED | build/start exit 0 |
| 같은 파일 register의 tools/list anonymous callback | C | 동일 Map.values로 목록을 만들고 output이 있을 때만 outputSchema를 노출한다. 등록과 호출 lookup이 같은 owner이며 list마다 새 배열을 반환한다. owning register 설명과 일치한다. | PASS_UNCHANGED | build/start exit 0; list/lazy case 성공 |
| 같은 파일 tools/list 내부 map anonymous callback | C | reflected name/description/parameters/output을 직접 가져온다. input/output이 같은 composer를 쓰며 없는 output을 만들어내지 않는다. owning register 설명과 일치한다. | PASS_UNCHANGED | build/start exit 0; output-schema case 성공 |
| 같은 파일 register의 tools/call anonymous callback | C | request.params.name으로 동일 Map을 찾아 없으면 SDK McpError(-32602), 있으면 handleToolCall이다. public handler를 쓰며 foreign mutation이 없다. inline 문서가 unknown tool과 validation failure의 recovery 차이를 설명한다. | PASS_UNCHANGED | build/start exit 0; unknown-tool case 성공 |
| 같은 파일 composeExecute의 HTTP anonymous closure | C | 매 호출 실제 execute/connection/application을 사용해 override response.body 또는 HttpLlm.execute body를 반환한다. IHttpLlmController 주입 계약, HttpLlmFunctionFetcher→HttpMigrateRouteFetcher 및 unit arithmetic body를 대조했다. owning register 설명과 일치한다. | PASS_UNCHANGED | build/start exit 0; plugin-free HTTP unit 1/1 성공 |
| 같은 파일 composeExecute의 class anonymous closure | C | registry 구성 때 읽은 method를 실제 controller instance에 `.call`하고 async closure로 Promise/non-Promise를 통일한다. capture는 registry lifetime에 묶이고 별도 global retention이 없다. owning register 설명과 일치한다. | PASS_UNCHANGED | build/start exit 0; class execute/lazy case 성공 |
| `packages/mcp/rolldown.config.mjs` build entry와 package/tsconfig wiring | C (review-only) | shared rolldown 설정으로 authored src를 preserveModules ESM으로 생성한다. ttsc→conditional declaration→rolldown 순서, publishConfig CJS/ESM/types 경로와 실제 출력에 일치한다. 자체 native transform이 없고 adapter 경계를 유지한다. | PASS_UNCHANGED | package build exit 0 |

## 검증과 외부 근거

- `pnpm --filter ./packages/mcp evidence`: exit 0, 4/4 units, diagnostics 0. 답변 존재 검사를 구현 진실성 판단으로 대신하지 않았다.
- 공식 evidence list를 시작과 종료에 실행해 같은 선정 4개를 확인했다. 네 선정 symbol 각각 공식 inspect exit 0이며 owner/속성 scope가 실제 선언과 일치한다.
- `pnpm --filter ./packages/mcp build`: exit 0, ttsc/conditional declarations/rolldown 완료.
- `pnpm --filter ./tests/test-mcp start`: exit 0, plugin-free unit 1/1 및 integration 21/21 성공. coercion/invalid input/unknown tool/exception, instructions/version 우선순위/lazy registry, HTTP output, canonical reference, omitted arguments/void, strict/non-strict constraints, outputSchema/malformed output, textFallback을 실행했다.
- `44e34ea8ee` (#2091)는 output 검사 owner를 수리했고 `d4e4e0648d` (#2294/#2293)는 config 생산자를 수리했다. 현재 `_llmApplicationFinalize`는 app.config를 보존하며 registrar는 그대로 전달한다. 과거 strict config 보정은 없다. `f57db4e347`의 structured 단일 배송·HTTP 버전 계약도 현재 구현과 일치한다.
- [MCP tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)의 object structured results, output schema 검증, protocol/execution 오류 구분을 직접 읽었다. text 복제 권고와 명시 opt-in의 비용 설명은 package JSDoc/README에 있다. 설치 SDK CallToolResultSchema의 content는 min 없이 array/default([])다.

소유 경계 밖의 `tests/test-mcp/src/features/test_mcp_tool_void_result.ts` native JSDoc가 empty content를 spec-invalid라 단정하는 설명은 실제 SDK schema와 맞지 않아 lead에 전달했다. Success text assertion은 adapter 의미를 검증하므로 보존하고 설명만 해당 test owner가 바로잡아야 한다. packages/mcp의 답변은 해당 단정을 포함하지 않으며 이 외부 문구 수리는 package PASS의 전제가 아니다.

현재 census와 처분 14행을 대조했다. 선정 4/4와 미선정 구현·entry 10/10 완료: PASS_UNCHANGED 14, PASS_FIXED 0, PASS_REMOVED 0, PENDING 0; 필수 검증 누락 0. packages/mcp source/config/README 변경 없이 이 보고서만 추가했다.
