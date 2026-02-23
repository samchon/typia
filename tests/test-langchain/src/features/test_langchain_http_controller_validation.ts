import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, IValidation, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import {
  HttpLlm,
  OpenApiValidator,
  stringifyValidationFailure,
} from "@typia/utils";

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
      openapi: "3.1.0",
      "x-samchon-emended-v4": true,
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
                      type: "number",
                    } satisfies OpenApi.IJsonSchema.INumber,
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
    const addTool = tools.find((t) => t.name === "calculator_calculate_add_post");
    if (!addTool) {
      throw new Error("Missing calculator_calculate_add_post tool");
    }

    // 5. Test validation failure: wrong type (string instead of number)
    const invalidArgs: Record<string, unknown> = {
      body: {
        x: "not a number",
        y: 5,
      },
    };

    const result = await addTool.invoke(invalidArgs);

    // 6. Verify validation matches stringifyValidationFailure output
    const parameterSchema: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: {
        body: bodySchema,
      },
      required: ["body"],
    };

    const expected: IValidation = OpenApiValidator.validate({
      components: {},
      schema: parameterSchema,
      value: invalidArgs,
      required: true,
      equals: false,
    });

    if (expected.success === true) {
      throw new Error("Expected validation to fail, but it succeeded.");
    }

    const expectedMessage: string = stringifyValidationFailure(expected);
    TestValidator.equals(
      "Validation failure message should match",
      result,
      expectedMessage,
    );
  };
