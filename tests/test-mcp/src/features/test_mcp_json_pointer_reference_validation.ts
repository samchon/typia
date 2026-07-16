import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

/**
 * Verifies MCP advertises and enforces generated canonical local references.
 *
 * 1. List a recursive slash-key schema through a real in-memory SDK client.
 * 2. Execute and validate a correct referenced result.
 * 3. Reject a wrong referenced result through MCP's output error channel.
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

      const tree: Recursive<"A/B"> = { value: "A/B", children: [] };
      const valid = (await client.callTool({
        name,
        arguments: { input: tree, invalid: false },
      })) as CallToolResult;
      TestValidator.equals(
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
  children: Recursive<T>[];
};

class PointerService {
  public echo(props: { input: Recursive<"A/B">; invalid: boolean }): {
    result: Recursive<"A/B">;
  } {
    return {
      result: props.invalid
        ? ({ value: "wrong", children: [] } as any)
        : props.input,
    };
  }
}
