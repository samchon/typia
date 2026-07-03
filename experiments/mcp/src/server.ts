import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createMcpServer } from "@typia/mcp";
import typia, { tags } from "typia";

/**
 * Arithmetic tools.
 *
 * A tiny calculator exposed over MCP to prove that `@typia/mcp` turns a plain
 * TypeScript class into a working MCP server — schemas, validation, and the
 * self-correction feedback loop all reflected from the types.
 */
class Calculator {
  /**
   * Add two integers.
   *
   * @param p The two integers to add
   * @returns Their sum
   */
  public add(p: {
    x: number & tags.Type<"int32">;
    y: number & tags.Type<"int32">;
  }): { value: number } {
    return { value: p.x + p.y };
  }

  /**
   * Divide two numbers.
   *
   * @param p Dividend and divisor
   * @returns The quotient
   */
  public divide(p: { x: number; y: number }): { value: number } {
    if (p.y === 0) throw new Error("Division by zero is not allowed");
    return { value: p.x / p.y };
  }
}

const server = createMcpServer(
  typia.llm.controller<Calculator>("calc", new Calculator()),
);
await server.connect(new StdioServerTransport());
