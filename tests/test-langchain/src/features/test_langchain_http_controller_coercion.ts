import { DynamicStructuredTool } from "@langchain/core/tools";
import { IHttpLlmController, IHttpResponse, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { TestEquality } from "@typia/template/equality";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies an HTTP tool dispatches typia's coerced arguments, not the raw ones.
 *
 * The class and HTTP controllers share one `createTool`, which dispatches the
 * `data` of `LlmJson.validateArguments` — the coerced arguments — rather than
 * what the model sent. Registering a schema LangChain validates itself defeats
 * that for both protocols at once: `@cfworker/json-schema` rejects a
 * stringified `"42"` before the tool body, so the request is never issued at
 * all. Injecting the controller's own `execute` observes the dispatched
 * arguments without a live server.
 *
 * 1. Build an OpenAPI document whose request body needs two numbers.
 * 2. Inject an `execute` that records the arguments it receives.
 * 3. Invoke the operation with a stringified operand.
 * 4. Assert the recorded body is coerced to numbers and the call succeeds.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 3 assertions (the request body is dispatched with coerced numbers; the coerced call returns the sum). The case documents its purpose as: Verifies an HTTP tool dispatches typia's coerced arguments, not the raw ones.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The class and HTTP controllers share one `createTool`, which dispatches the `data` of `LlmJson.validateArguments` — the coerced arguments — rather than what the model sent. Registering a schema LangChain validates itself defeats that for both protocols at once: `@cfworker/json-schema` rejects a stringified `"42"` before the tool body, so the request is never issued at all. Injecting the controller's own `execute` observes the dispatched arguments without a live server. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (the request body is dispatched with coerced numbers; the coerced call returns the sum) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_http_controller_coercion is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
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
    TestEquality.equals(
      "the request body is dispatched with coerced numbers",
      dispatched,
      { body: { x: 42, y: 5 } },
    );
    TestEquality.equals("the coerced call returns the sum", result, {
      success: true,
      data: { value: 47 },
    });
  };
