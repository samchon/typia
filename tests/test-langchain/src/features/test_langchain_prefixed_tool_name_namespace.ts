import { DynamicStructuredTool } from "@langchain/core/tools";
import { IHttpLlmController, ILlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import typia from "typia";

class CollisionController {
  /** Echo an input value. */
  run_post(input: { value: string }): { value: string } {
    return input;
  }
}

/**
 * Verifies LangChain validates the final prefixed tool-name namespace.
 *
 * Prefixing normally separates controllers, but controllers with the same name
 * can still emit the same tool name. This regression pins both protocol orders
 * so registration cannot depend on which controller type is visited first.
 *
 * 1. Create class and HTTP controllers that both expose `run_post`.
 * 2. Reject every colliding class/HTTP combination in deterministic order.
 * 3. Accept mixed controllers when their prefixes make the final names unique.
 *
 * @evidence contracts/testing.md#behavioral-verification Four class/HTTP registration orders reject the exact same prefixed duplicate and report both owners; renamed controllers produce distinct class_run_post/http_run_post tools.
 * @evidence contracts/testing.md#independent-expectations Authored owner kinds, names and registration order define the duplicate messages and successful literal namespace.
 * @evidence contracts/testing.md#distinguishing-cases Class/class, HTTP/HTTP and both mixed orders cover collision provenance; unique owner names provide the positive control.
 * @evidence contracts/testing.md#execution-ownership test-langchain test:integration discovers test_langchain_prefixed_tool_name_namespace through DynamicExecutor after native rewriting of its typia call sites. No live model endpoint is used.
 * @evidence contracts/e2e.md#necessary-boundary Four class/HTTP registration orders reject the exact same prefixed duplicate and report both owners; renamed controllers produce distinct class_run_post/http_run_post tools. The native-produced controller is registered as an actual DynamicStructuredTool and its public SDK surface is exercised; authored metadata alone cannot establish producer-to-SDK assembly.
 * @evidence contracts/e2e.md#shared-execution All native calls share one suite project, installed content-keyed plugin artifact and runtime process. Tool conversions and scenario inputs need no separate compiler, installation or model host; strict/ordinary options, where present, are emitted in that same project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its controller/tool or structured-output object and authored input. No endpoint connection, transport, timer or native process is acquired by the case. Local state and returned promises live through the awaited scenario; the suite/compiler own native artifact lifecycle.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Class/class, HTTP/HTTP and both mixed orders cover collision provenance; unique owner names provide the positive control. Portable authored-OpenAPI HTTP tool cases retain their original names and assertions in the plugin-free test:unit population.
 */
export const test_langchain_prefixed_tool_name_namespace = (): void => {
  const classController: ILlmController<CollisionController> =
    typia.llm.controller<CollisionController>(
      "same",
      new CollisionController(),
    );
  const httpController: IHttpLlmController = createHttpController("same");
  TestEquality.equals(
    "HTTP function name",
    httpController.application.functions.map((func) => func.name),
    ["run_post"],
  );

  const cases: Array<{
    name: string;
    controllers: Array<ILlmController | IHttpLlmController>;
    duplicate: string;
  }> = [
    {
      name: "class then class",
      controllers: [classController, classController],
      duplicate:
        '"same_run_post" from class controller "same" function "run_post" (conflicts with class controller "same" function "run_post")',
    },
    {
      name: "HTTP then HTTP",
      controllers: [httpController, httpController],
      duplicate:
        '"same_run_post" from http controller "same" function "run_post" (conflicts with http controller "same" function "run_post")',
    },
    {
      name: "class then HTTP",
      controllers: [classController, httpController],
      duplicate:
        '"same_run_post" from http controller "same" function "run_post" (conflicts with class controller "same" function "run_post")',
    },
    {
      name: "HTTP then class",
      controllers: [httpController, classController],
      duplicate:
        '"same_run_post" from class controller "same" function "run_post" (conflicts with http controller "same" function "run_post")',
    },
  ];
  for (const testCase of cases)
    TestEquality.equals(
      testCase.name,
      captureDuplicate([...testCase.controllers]),
      `Duplicate tool names found:\n  - ${testCase.duplicate}`,
    );

  const tools: DynamicStructuredTool[] = toLangChainTools(
    [
      { ...classController, name: "class" },
      { ...httpController, name: "http" },
    ],
    { prefix: true },
  );
  TestEquality.equals(
    "unique prefixed names",
    tools.map((tool) => tool.name).sort(),
    ["class_run_post", "http_run_post"],
  );
};

const captureDuplicate = (
  controllers: Array<ILlmController | IHttpLlmController>,
): string => {
  try {
    toLangChainTools(controllers, { prefix: true });
  } catch (error) {
    return error instanceof Error ? error.message : String(error);
  }
  throw new Error("Expected duplicate tool-name error");
};

const createHttpController = (name: string): IHttpLlmController =>
  HttpLlm.controller({
    name,
    document: {
      openapi: "3.2.0",
      "x-typia-emended-v12": true,
      components: {},
      paths: {
        "/run": {
          post: {
            operationId: "run",
            responses: {
              "200": {
                description: "Echo response",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: { value: { type: "string" } },
                      required: ["value"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    } satisfies OpenApi.IDocument,
    connection: { host: "http://localhost:3000" },
  });
