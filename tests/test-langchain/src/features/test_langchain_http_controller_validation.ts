import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies typia — not LangChain — rejects an HTTP tool's invalid arguments.
 *
 * The class and HTTP controllers share one `createTool`, so whichever framework
 * owns argument validation owns it for both protocols. LangChain's
 * `StructuredTool.call` validates a registered JSON Schema with
 * `@cfworker/json-schema` and throws before the tool body, which would replace
 * typia's correctable feedback with its generic "Received tool input did not
 * match expected schema" here too. Asserting only that
 * `ToolInputParsingException` is thrown accepts either source and so pins
 * neither; this pins the message.
 *
 * 1. Build an OpenAPI document whose request body needs two numbers.
 * 2. Convert its HTTP controller to LangChain tools.
 * 3. Invoke the operation with a non-numeric operand.
 * 4. Assert the throw carries typia's annotated feedback for the body path and
 *    never LangChain's schema message.
 *
 * @evidence contracts/testing.md#behavioral-verification the adapter or utility under test is called directly on inputs built in this case and the result is checked by 5 assertions (invalid arguments throw ToolInputParsingException; feedback comes from typia, not LangChain's JSON Schema validation; feedback is titled by the registrar; feedback annotates the offending body property). The case documents its purpose as: Verifies typia — not LangChain — rejects an HTTP tool's invalid arguments.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The class and HTTP controllers share one `createTool`, so whichever framework owns argument validation owns it for both protocols. LangChain's `StructuredTool.call` validates a registered JSON Schema with `@cfworker/json-schema` and throws before the tool body, which would replace typia's correctable feedback with its generic "Received tool input did not match expected schema" here too. Asserting only that `ToolInputParsingException` is thrown accepts either source and so pins neither; this pins the message. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (invalid arguments throw ToolInputParsingException; feedback comes from typia, not LangChain's JSON Schema validation; feedback is titled by the registrar; feedback annotates the offending body property) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-langchain start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_langchain_http_controller_validation is the exported entry; this case calls no typia producer, so it needs no native host and runs here only because the workspace has no separate plugin-free unit population, which is a recorded departure from the unit and boundary separation.
 */
export const test_langchain_http_controller_validation =
  async (): Promise<void> => {
    const bodySchema: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: {
        x: { type: "number", description: "First operand" },
        y: { type: "number", description: "Second operand" },
      },
      required: ["x", "y"],
    } satisfies OpenApi.IJsonSchema.IObject;
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
                  schema: bodySchema,
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
                      properties: {
                        value: { type: "number" },
                      },
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

    const controller: IHttpLlmController = HttpLlm.controller({
      name: "calculator",
      document,
      connection: { host: "http://localhost:3000" },
    });
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });
    const addTool: DynamicStructuredTool | undefined = tools.find(
      (t) => t.name === "calculate_add_post",
    );
    if (addTool === undefined)
      throw new Error("Missing calculate_add_post tool");

    const error: unknown = await addTool
      .invoke({ body: { x: "not a number", y: 5 } })
      .then(() => undefined)
      .catch((exp: unknown) => exp);
    TestValidator.predicate(
      "invalid arguments throw ToolInputParsingException",
      () => error instanceof ToolInputParsingException,
    );

    const message: string = (error as Error).message;
    TestValidator.predicate(
      "feedback comes from typia, not LangChain's JSON Schema validation",
      () =>
        message.includes(
          "Received tool input did not match expected schema",
        ) === false,
    );
    TestValidator.predicate("feedback is titled by the registrar", () =>
      message.includes('Type errors in "calculate_add_post" arguments:'),
    );
    TestValidator.predicate(
      "feedback annotates the offending body property",
      () =>
        message.includes("// ❌") &&
        message.includes('"path":"$input.body.x"') &&
        message.includes('"expected":"number"'),
    );
  };
