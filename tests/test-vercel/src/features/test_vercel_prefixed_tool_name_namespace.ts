import { IHttpLlmController, ILlmController, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

class CollisionController {
  /** Echo an input value. */
  run_post(input: { value: string }): { value: string } {
    return input;
  }
}

/**
 * Verifies Vercel validates the final prefixed tool-name namespace.
 *
 * Prefixing normally separates controllers, but controllers with the same name
 * can still emit the same record key. This regression pins both protocol orders
 * so a later registration cannot silently replace an earlier tool.
 *
 * 1. Create class and HTTP controllers that both expose `run_post`.
 * 2. Reject every colliding class/HTTP combination in deterministic order.
 * 3. Accept mixed controllers when their prefixes make the final names unique.
 *
 * @evidence contracts/testing.md#behavioral-verification Checks the HTTP run_post name, all four ordered class/HTTP collision combinations with exact origin text, and the distinct prefixed class_run_post/http_run_post keys.
 * @evidence contracts/testing.md#independent-expectations Declared class run_post and OpenAPI POST /run identify the same function; literal origin strings and distinct renamed controller names establish collision and success expectations.
 * @evidence contracts/testing.md#distinguishing-cases Class/class, HTTP/HTTP and both mixed orders retain provenance-specific diagnostics; changing controller names to class/http supplies the adjacent noncolliding twin.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_prefixed_tool_name_namespace in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Native class metadata and authored HTTP composition both produce run_post; the adapter must reject all protocol orders after final prefixing and accept renamed distinct controllers. This owns final prefixed namespace assembly, unlike the unprefixed duplicate case.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
 */
export const test_vercel_prefixed_tool_name_namespace = (): void => {
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

  const tools: Record<string, Tool> = toVercelTools(
    [
      { ...classController, name: "class" },
      { ...httpController, name: "http" },
    ],
    { prefix: true },
  );
  TestEquality.equals("unique prefixed names", Object.keys(tools).sort(), [
    "class_run_post",
    "http_run_post",
  ]);
};

const captureDuplicate = (
  controllers: Array<ILlmController | IHttpLlmController>,
): string => {
  try {
    toVercelTools(controllers, { prefix: true });
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
