import { DynamicStructuredTool, ToolInputParsingException } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

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
    try {
      await addTool.invoke({
        body: {
          x: "not a number",
          y: 5,
        },
      });
      throw new Error("Expected ToolInputParsingException to be thrown.");
    } catch (error) {
      TestValidator.predicate(
        "should throw ToolInputParsingException",
        () => error instanceof ToolInputParsingException,
      );
    }
  };
