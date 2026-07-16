import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, ILlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
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
 */
export const test_langchain_prefixed_tool_name_namespace = (): void => {
  const classController: ILlmController<CollisionController> =
    typia.llm.controller<CollisionController>(
      "same",
      new CollisionController(),
    );
  const httpController: IHttpLlmController = createHttpController("same");
  TestValidator.equals(
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
    TestValidator.equals(
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
  TestValidator.equals(
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
