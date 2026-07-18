import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import type {
  CallToolResult,
  ListToolsResult,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * End-to-end check: a real MCP client speaks to the `@typia/mcp` server over
 * stdio. No mocks — this spawns `lib/server.js`, performs the MCP handshake,
 * lists the reflected tools, and drives them with valid, invalid,
 * exception-raising, and unknown-tool requests to prove the whole loop works as
 * a published npm consumer would experience it.
 */
const assert = (label: string, condition: boolean): void => {
  if (!condition) throw new Error(`FAIL: ${label}`);
  console.log(`  ok  ${label}`);
};

const text = (result: CallToolResult): string =>
  result.content.map((c) => (c.type === "text" ? c.text : "")).join("");

const main = async (): Promise<void> => {
  const client = new Client({ name: "typia-mcp-e2e-client", version: "0.0.0" });
  const transport = new StdioClientTransport({
    command: "node",
    args: ["lib/server.js"],
  });
  await client.connect(transport);
  try {
    // 1. handshake advertised the reflected server identity + instructions
    const info = client.getServerVersion();
    assert("handshake reports server name 'calc'", info?.name === "calc");
    assert(
      "handshake reports server version '2.3.4'",
      info?.version === "2.3.4",
    );
    assert(
      "instructions reflect the class JSDoc",
      (client.getInstructions() ?? "").includes("Arithmetic tools"),
    );

    // 2. tools/list carries the reflected input + output schemas
    const tools: ListToolsResult = await client.listTools();
    const names = tools.tools.map((t) => t.name).sort();
    assert(
      "tools/list returns add + divide",
      JSON.stringify(names) === JSON.stringify(["add", "divide"]),
    );
    const add = tools.tools.find((t) => t.name === "add")!;
    assert(
      "add advertises required int params",
      JSON.stringify((add.inputSchema.required ?? []).sort()) ===
        JSON.stringify(["x", "y"]),
    );
    assert("add advertises an outputSchema", add.outputSchema !== undefined);

    // 3. a valid call returns structuredContent + text
    const ok = (await client.callTool({
      name: "add",
      arguments: { x: 2, y: 3 },
    })) as CallToolResult;
    assert("valid add is not an error", ok.isError !== true);
    assert(
      "valid add returns structuredContent { value: 5 }",
      JSON.stringify(ok.structuredContent) === JSON.stringify({ value: 5 }),
    );

    // 4. coercion: string "40" for an int32 is accepted (LLMs send strings)
    const coerced = (await client.callTool({
      name: "add",
      arguments: { x: "40", y: 2 },
    })) as CallToolResult;
    assert(
      'coerced add ("40") returns 42',
      coerced.isError !== true &&
        JSON.stringify(coerced.structuredContent) ===
          JSON.stringify({ value: 42 }),
    );

    // 5. invalid args come back as an in-band tool error with typia's feedback
    const bad = (await client.callTool({
      name: "add",
      arguments: { x: 1.5, y: 3 },
    })) as CallToolResult;
    assert("invalid add is an in-band error", bad.isError === true);
    assert(
      "invalid add feedback names the failing path",
      text(bad).includes("$input.x") && text(bad).includes("int32"),
    );

    // 6. a thrown error is reported without killing the session
    const div0 = (await client.callTool({
      name: "divide",
      arguments: { x: 1, y: 0 },
    })) as CallToolResult;
    assert("divide-by-zero is an in-band error", div0.isError === true);
    assert(
      "divide-by-zero reports the message",
      text(div0).includes("Division by zero"),
    );

    // 7. an unknown tool is a JSON-RPC protocol error the client rejects on,
    //    not an in-band result (the model cannot self-correct a missing tool)
    let unknown: unknown = null;
    try {
      await client.callTool({ name: "does_not_exist", arguments: {} });
    } catch (error) {
      unknown = error;
    }
    assert(
      "unknown tool rejects as a protocol error",
      unknown !== null &&
        String((unknown as Error).message).includes("does_not_exist"),
    );

    console.log("\nAll end-to-end MCP client checks passed.");
  } finally {
    await client.close();
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
