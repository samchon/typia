import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, IHttpResponse, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies an HTTP tool dispatches typia's coerced arguments, not the raw ones.
 *
 * The class and HTTP controllers share one `createTool`, which dispatches the
 * `data` of `LlmJson.validateArguments` — the coerced arguments — rather than
 * what the model sent. Registering a schema LangChain validates itself defeats
 * that for both protocols at once: `@cfworker/json-schema` rejects a stringified
 * `"42"` before the tool body, so the request is never issued at all. Injecting
 * the controller's own `execute` observes the dispatched arguments without a
 * live server.
 *
 * 1. Build an OpenAPI document whose request body needs two numbers.
 * 2. Inject an `execute` that records the arguments it receives.
 * 3. Invoke the operation with a stringified operand.
 * 4. Assert the recorded body is coerced to numbers and the call succeeds.
 */
export const test_langchain_http_controller_coercion =
  async (): Promise<void> => {
    const document: OpenApi.IDocument = {
      openapi: "3.2.0",
      "x-typia-emended-v12": true,
      components: {},
      paths: {
        "/calculate/add": {
          post: {
            operationId: "calculate_add",
            summary: "Add two numbers",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      x: { type: "number", description: "First operand" },
                      y: { type: "number", description: "Second operand" },
                    },
                    required: ["x", "y"],
                  } satisfies OpenApi.IJsonSchema.IObject,
                },
              },
            },
            responses: {
              "200": {
                description: "Sum result",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: { value: { type: "number" } },
                      required: ["value"],
                    } satisfies OpenApi.IJsonSchema.IObject,
                  },
                },
              },
            },
          },
        },
      },
    };

    let dispatched: unknown = undefined;
    const controller: IHttpLlmController = {
      ...HttpLlm.controller({
        name: "calculator",
        document,
        connection: { host: "http://localhost:3000" },
      }),
      execute: async (props): Promise<IHttpResponse> => {
        dispatched = props.arguments;
        const { body } = props.arguments as {
          body: { x: number; y: number };
        };
        return {
          status: 200,
          headers: {},
          body: { value: body.x + body.y },
        };
      },
    };

    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });
    const addTool: DynamicStructuredTool | undefined = tools.find(
      (t) => t.name === "calculate_add_post",
    );
    if (addTool === undefined)
      throw new Error("Missing calculate_add_post tool");

    const result: unknown = await addTool.invoke({
      body: { x: "42", y: 5 },
    });
    TestValidator.equals(
      "the request body is dispatched with coerced numbers",
      dispatched,
      { body: { x: 42, y: 5 } },
    );
    TestValidator.equals("the coerced call returns the sum", result, {
      success: true,
      data: { value: 47 },
    });
  };
