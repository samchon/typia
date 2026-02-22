import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, IValidation, OpenApi } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import {
  HttpLlm,
  OpenApiValidator,
  stringifyValidationFailure,
} from "@typia/utils";

export const test_mcp_http_controller_validation = async (): Promise<void> => {
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

  // 3. Create McpServer
  const mcpServer: McpServer = new McpServer(
    {
      name: "test-server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // 4. Register controller
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: false,
  });

  // 5. Get tools/call handler
  const rawServer: Server = mcpServer.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;
  const callHandler: Function = requestHandlers.get("tools/call")!;

  // 6. Test validation failure: wrong type (string instead of number)
  const invalidArgs: Record<string, unknown> = {
    body: {
      x: "not a number",
      y: 5,
    },
  };

  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: "calculate_add_post",
        arguments: invalidArgs,
      },
    },
    { signal: new AbortController().signal },
  );

  // 7. Verify validation matches stringifyValidationFailure output
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

  if (expected.success === true)
    throw new Error("Expected validation to fail, but it succeeded.");

  const message: string = stringifyValidationFailure(expected);
  TestValidator.predicate(
    "Validation failure",
    () =>
      expected.success === false &&
      result.content.some((x) => x.type === "text" && x.text === message),
  );
};
