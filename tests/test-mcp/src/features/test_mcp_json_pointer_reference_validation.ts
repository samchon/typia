import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies MCP advertises and enforces generated canonical local references.
 *
 * 1. List a recursive slash-key schema through a real in-memory SDK client.
 * 2. Coerce numeric input strings and validate the referenced result.
 * 3. Reject a wrong referenced result through MCP's output error channel.
 *
 * @evidence contracts/testing.md#behavioral-verification The SDK lists the canonical RecursiveA~1B local reference, accepts coerced count 42 with structured recursive output and rejects the wrong literal output.
 * @evidence contracts/testing.md#independent-expectations The authored slash-key type requires RFC 6901 tilde-one escaping; literal count 42 and wrong value control expected success versus rejection independently of emitted metadata.
 * @evidence contracts/testing.md#distinguishing-cases Canonical reference visibility, numeric input coercion, valid recursive output and wrong literal output contribute distinct producer-to-SDK checks.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_json_pointer_reference_validation through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The SDK lists the canonical RecursiveA~1B local reference, accepts coerced count 42 with structured recursive output and rejects the wrong literal output. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Canonical reference visibility, numeric input coercion, valid recursive output and wrong literal output contribute distinct producer-to-SDK checks. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_json_pointer_reference_validation =
  async (): Promise<void> => {
    const controller: ILlmController<PointerService> =
      typia.llm.controller<PointerService>("pointer", new PointerService());
    const server: McpServer = createMcpServer(controller);
    const client: Client = new Client({ name: "pointer-test", version: "1.0" });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    try {
      await server.connect(serverTransport);
      await client.connect(clientTransport);
      const listed = await client.listTools();
      const name: string = listed.tools[0]!.name;
      TestValidator.predicate("lists a canonical slash reference", () =>
        JSON.stringify(listed.tools[0]).includes(
          '"$ref":"#/$defs/RecursiveA~1B"',
        ),
      );

      const raw = { value: "A/B", count: "42", children: [] };
      const tree: Recursive<"A/B"> = {
        value: "A/B",
        count: 42,
        children: [],
      };
      const valid = (await client.callTool({
        name,
        arguments: { input: raw, invalid: false },
      })) as CallToolResult;
      TestEquality.equals(
        "valid referenced output is structured",
        valid.structuredContent,
        { result: tree },
      );

      const invalid = (await client.callTool({
        name,
        arguments: { input: tree, invalid: true },
      })) as CallToolResult;
      TestValidator.predicate(
        "invalid referenced output is rejected",
        invalid.isError === true && invalid.structuredContent === undefined,
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  };

type Recursive<T extends string> = {
  value: T;
  count: number;
  children: Recursive<T>[];
};

class PointerService {
  public echo(props: { input: Recursive<"A/B">; invalid: boolean }): {
    result: Recursive<"A/B">;
  } {
    return {
      result: props.invalid
        ? ({ value: "wrong", count: 0, children: [] } as any)
        : props.input,
    };
  }
}
