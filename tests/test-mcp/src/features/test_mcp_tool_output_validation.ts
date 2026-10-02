import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies declared class outputs fail in-band before MCP schema enforcement.
 *
 * The SDK client validates `structuredContent` after `tools/list`, so a server
 * that returns a malformed success leaks protocol errors instead of a tool
 * error the model can repair. This matrix crosses the real in-memory transport
 * with both text-fallback modes and distinguishes output failures from void and
 * exception results.
 *
 * 1. Connect an SDK client to a reflected class controller.
 * 2. Accept one valid nested object under both text-fallback modes.
 * 3. Reject every non-object and wrong-shaped declared result with stable paths.
 * 4. Preserve true void success and thrown-exception tool errors.
 *
 * @evidence contracts/testing.md#behavioral-verification Under both textFallback options the SDK lists declared versus void output, accepts valid nested data, rejects seven malformed result shapes with authored paths, preserves void Success and propagates the execution failure.
 * @evidence contracts/testing.md#independent-expectations Authored result types, seven literal variant/path pairs, valid nested data and the thrown message define the oracle independently of schema emission.
 * @evidence contracts/testing.md#distinguishing-cases Undefined, null, array, primitive, missing, surplus and wrong nested output are distinct negatives; valid, void and thrown results distinguish acceptance and error channels in both modes.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_output_validation through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary Under both textFallback options the SDK lists declared versus void output, accepts valid nested data, rejects seven malformed result shapes with authored paths, preserves void Success and propagates the execution failure. A public SDK Client and McpServer exchange initialize/tool messages through InMemoryTransport. Direct handler calls cannot establish SDK message admission or host response enforcement.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. All requests in this scenario reuse its configured SDK host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each connected host owns its application/options and paired transports. Requests within that host reuse the initialized connection; finally closes client and server with Promise.allSettled on success or failure. The two textFallback options require separately configured hosts, while all result variants reuse each host.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. Undefined, null, array, primitive, missing, surplus and wrong nested output are distinct negatives; valid, void and thrown results distinguish acceptance and error channels in both modes. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
 */
export const test_mcp_tool_output_validation = async (): Promise<void> => {
  for (const textFallback of [false, true]) {
    const server: McpServer = createMcpServer(
      typia.llm.controller<OutputController>("output", new OutputController()),
      { textFallback },
    );
    const client: Client = new Client({ name: "output-test", version: "1.0" });
    const [clientTransport, serverTransport] =
      InMemoryTransport.createLinkedPair();

    try {
      await server.connect(serverTransport);
      await client.connect(clientTransport);
      const listed = await client.listTools();
      const read: Tool | undefined = listed.tools.find(
        (tool) => tool.name === "read",
      );
      const reset: Tool | undefined = listed.tools.find(
        (tool) => tool.name === "reset",
      );
      TestValidator.predicate(
        "declared result advertises outputSchema",
        read?.outputSchema !== undefined,
      );
      TestValidator.predicate(
        "void result omits outputSchema",
        reset !== undefined && reset.outputSchema === undefined,
      );

      const valid: CallToolResult = (await client.callTool({
        name: "read",
        arguments: { variant: "valid" },
      })) as CallToolResult;
      TestEquality.equals("valid structured output", valid.structuredContent, {
        value: 1,
        nested: { label: "valid" },
      });
      TestEquality.equals(
        "valid text fallback",
        valid.content,
        textFallback
          ? [
              {
                type: "text",
                text: JSON.stringify({
                  value: 1,
                  nested: { label: "valid" },
                }),
              },
            ]
          : [],
      );

      for (const [variant, path] of invalidCases) {
        const result: CallToolResult = (await client.callTool({
          name: "read",
          arguments: { variant },
        })) as CallToolResult;
        const text: string = getText(result);
        TestValidator.predicate(
          `${variant} returns a tool error`,
          result.isError === true && result.structuredContent === undefined,
        );
        TestValidator.predicate(
          `${variant} reports its validation path`,
          text.includes('Type errors in "read" output:') && text.includes(path),
        );
      }

      const resetResult: CallToolResult = (await client.callTool({
        name: "reset",
        arguments: {},
      })) as CallToolResult;
      TestValidator.predicate(
        "true void remains successful",
        resetResult.isError !== true &&
          resetResult.structuredContent === undefined &&
          getText(resetResult) === "Success",
      );

      const thrown: CallToolResult = (await client.callTool({
        name: "fail",
        arguments: {},
      })) as CallToolResult;
      TestValidator.predicate(
        "exceptions remain execution errors",
        thrown.isError === true && getText(thrown).includes("execution failed"),
      );
    } finally {
      await Promise.allSettled([client.close(), server.close()]);
    }
  }
};

class OutputController {
  /** Return a nested result selected by the test variant. */
  read(input: OutputController.IInput): OutputController.IResult {
    const valid: OutputController.IResult = {
      value: 1,
      nested: { label: "valid" },
    };
    switch (input.variant) {
      case "valid":
        return valid;
      case "undefined":
        return undefined as never;
      case "null":
        return null as never;
      case "array":
        return [valid] as never;
      case "primitive":
        return "invalid" as never;
      case "missing":
        return { nested: valid.nested } as never;
      case "extra":
        return { ...valid, extra: true } as never;
      case "wrongNested":
        return { ...valid, nested: { label: 42 } } as never;
    }
  }

  /** Complete without a declared result. */
  reset(_: OutputController.IEmpty): void {}

  /** Throw a controller execution error. */
  fail(_: OutputController.IEmpty): OutputController.IResult {
    throw new Error("execution failed");
  }
}

namespace OutputController {
  export interface IInput {
    variant: Variant;
  }
  export interface IEmpty {}
  export interface IResult {
    value: number;
    nested: {
      label: string;
    };
  }
}

type Variant =
  | "valid"
  | "undefined"
  | "null"
  | "array"
  | "primitive"
  | "missing"
  | "extra"
  | "wrongNested";

const invalidCases: ReadonlyArray<
  readonly [Exclude<Variant, "valid">, string]
> = [
  ["undefined", "$input"],
  ["null", "$input"],
  ["array", "$input"],
  ["primitive", "$input"],
  ["missing", "$input.value"],
  ["extra", "$input.extra"],
  ["wrongNested", "$input.nested.label"],
];

const getText = (result: CallToolResult): string => {
  const content = result.content[0];
  return content?.type === "text" ? content.text : "";
};
