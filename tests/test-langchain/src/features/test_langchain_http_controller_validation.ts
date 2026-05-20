import {
  DynamicStructuredTool,
  ToolInputParsingException,
} from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies that invalid HTTP controller tool arguments raise a
 * `ToolInputParsingException`.
 *
 * Locks the validation-failure branch of `LangChainToolsRegistrar` for the HTTP
 * controller path. A locally-constructed OpenAPI document avoids live network
 * calls. Passing a string where a number is required must throw
 * `ToolInputParsingException` rather than proceeding silently.
 *
 * 1. Build a minimal `OpenApi.IDocument` with a numeric-body POST endpoint.
 * 2. Create an `IHttpLlmController` and convert to LangChain tools.
 * 3. Invoke the tool with `{ body: { x: "not a number", y: 5 } }`.
 * 4. Assert the invocation throws `ToolInputParsingException`.
 */
export const test_langchain_http_controller_validation =
  async (): Promise<void> => {
    // 1. Create minimal OpenApi document with a simple numeric schema
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

    // 2. Create controller
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "calculator",
      document,
      connection: { host: "http://localhost:3000" },
    });

    // 3. Convert to LangChain tools
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });

    // 4. Find the add tool
    const addTool = tools.find((t) => t.name === "calculate_add_post");
    if (!addTool) {
      throw new Error("Missing calculate_add_post tool");
    }

    // 5. Test validation failure: wrong type (string instead of number)
    //    (may be thrown by LangChain's JSON Schema validation or typia's validation)
    let caughtError: unknown = undefined;
    try {
      await addTool.invoke({
        body: {
          x: "not a number",
          y: 5,
        },
      });
    } catch (error) {
      caughtError = error;
    }
    if (caughtError === undefined) {
      throw new Error(
        "Expected ToolInputParsingException to be thrown, but invoke succeeded.",
      );
    }
    TestValidator.predicate(
      "should throw ToolInputParsingException",
      () => caughtError instanceof ToolInputParsingException,
    );
  };
