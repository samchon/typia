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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 4 assertions (HTTP function name; unique prefixed names). The case documents its purpose as: Verifies Vercel validates the final prefixed tool-name namespace.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Prefixing normally separates controllers, but controllers with the same name can still emit the same record key. This regression pins both protocol orders so a later registration cannot silently replace an earlier tool. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (HTTP function name; unique prefixed names) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_prefixed_tool_name_namespace is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
