import { tags } from "typia";

/**
 * Arithmetic tools.
 *
 * A tiny calculator reflected by `typia.llm.controller` so the MCP, LangChain,
 * and Vercel adapters all convert the same controller shape.
 */
export class Calculator {
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
}
