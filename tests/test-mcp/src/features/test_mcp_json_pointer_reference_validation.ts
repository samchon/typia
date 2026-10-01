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
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (lists a canonical slash reference; valid referenced output is structured; invalid referenced output is rejected). The case documents its purpose as: Verifies MCP advertises and enforces generated canonical local references.
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (lists a canonical slash reference; valid referenced output is structured; invalid referenced output is rejected) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_json_pointer_reference_validation is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
