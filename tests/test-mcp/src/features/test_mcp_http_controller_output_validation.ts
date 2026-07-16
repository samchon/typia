import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

/**
 * Verifies HTTP controller bodies obey their advertised MCP output schema.
 *
 * HTTP execution has a separate response-body path from class methods. It must
 * apply the same output trust boundary while leaving thrown transport or
 * controller failures in the pre-existing execution-error channel.
 *
 * 1. Reflect a minimal HTTP operation with a nested response object.
 * 2. Accept its valid body through an SDK client and in-memory transport.
 * 3. Reject a wrong nested body with an actionable validation path.
 * 4. Preserve a thrown HTTP executor exception as a tool error.
 */
export const test_mcp_http_controller_output_validation =
  async (): Promise<void> => {
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "http-output",
      document: document(),
      connection: { host: "http://localhost:0" },
      execute: async (props) => {
        const { variant } = (props.arguments as { body: { variant: Variant } })
          .body;
        if (variant === "throw") throw new Error("http execution failed");
        return {
          status: 200,
          headers: {},
          body:
            variant === "valid"
              ? { value: 1, nested: { label: "valid" } }
              : { value: 1, nested: { label: 42 } },
        };
      },
    });
    const server: McpServer = createMcpServer(controller);
    const client: Client = new Client({
      name: "http-output-test",
      version: "1.0",
    });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    try {
      await server.connect(serverTransport);
      await client.connect(clientTransport);
      const listed = await client.listTools();
      const name: string = listed.tools[0]!.name;

      const valid: CallToolResult = (await client.callTool({
        name,
        arguments: { body: { variant: "valid" } },
      })) as CallToolResult;
      TestValidator.equals(
        "valid HTTP body is structured",
        valid.structuredContent,
        {
          value: 1,
          nested: { label: "valid" },
        },
      );

      const invalid: CallToolResult = (await client.callTool({
        name,
        arguments: { body: { variant: "invalid" } },
      })) as CallToolResult;
      TestValidator.predicate(
        "invalid HTTP body is an actionable tool error",
        invalid.isError === true &&
          invalid.structuredContent === undefined &&
          getText(invalid).includes('Type errors in "read_post" output:') &&
          getText(invalid).includes('"path":"$input.nested.label"'),
      );

      const thrown: CallToolResult = (await client.callTool({
        name,
        arguments: { body: { variant: "throw" } },
      })) as CallToolResult;
      TestValidator.predicate(
        "HTTP executor exception remains a tool error",
        thrown.isError === true &&
          getText(thrown).includes("http execution failed"),
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };

type Variant = "valid" | "invalid" | "throw";

const document = (): OpenApiV3_1.IDocument => ({
  openapi: "3.1.0",
  info: { title: "Output validation", version: "1.0.0" },
  paths: {
    "/read": {
      post: {
        operationId: "post_httpOutput_read",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  variant: {
                    type: "string",
                    enum: ["valid", "invalid", "throw"],
                  },
                },
                required: ["variant"],
                additionalProperties: false,
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Nested output",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    value: { type: "number" },
                    nested: {
                      type: "object",
                      properties: { label: { type: "string" } },
                      required: ["label"],
                      additionalProperties: false,
                    },
                  },
                  required: ["value", "nested"],
                  additionalProperties: false,
                },
              },
            },
          },
        },
      },
    },
  },
  components: {},
});

const getText = (result: CallToolResult): string => {
  const content = result.content[0];
  return content?.type === "text" ? content.text : "";
};
