import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApiV3_1 } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification A public SDK call accepts the authored nested HTTP body, rejects numeric nested.label with its path, and preserves the injected executor exception as a tool error.
 * @evidence contracts/testing.md#independent-expectations The authored OpenAPI string property, literal valid body and injected exception message supply independent expectations without a native producer.
 * @evidence contracts/testing.md#distinguishing-cases Valid, malformed nested output and thrown execution are separate branches within one connected host session.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_http_controller_output_validation through DynamicExecutor. The SDK host/protocol exchange is E2E even though this case needs no native transformer.
 * @evidence contracts/e2e.md#necessary-boundary A public SDK call accepts the authored nested HTTP body, rejects numeric nested.label with its path, and preserves the injected executor exception as a tool error. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution This case has no native typia call; the SDK connection is its real boundary. It currently shares the integration project with native-controller cases, so plugin preparation remains suite overhead rather than a semantic requirement of this case. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Valid, malformed nested output and thrown execution are separate branches within one connected host session. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
      TestEquality.equals(
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
