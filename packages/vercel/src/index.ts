import type { Tool } from "ai";
import { IHttpLlmController, ILlmController } from "@typia/interface";

import { VercelToolsRegistrar } from "./internal/VercelToolsRegistrar";

/**
 * Convert typia controllers to Vercel AI SDK tools.
 *
 * Transforms TypeScript class methods via `typia.llm.controller<Class>()` or
 * OpenAPI operations via `HttpLlm.controller()` into Vercel AI SDK tools that
 * can be used with any LLM provider (OpenAI, Anthropic, Google, etc.).
 *
 * Every tool call is validated by typia. If the LLM provides invalid arguments,
 * returns a validation error formatted by {@link stringifyValidationFailure}
 * so the LLM can auto-correct in the next turn.
 *
 * ## Example with OpenAI
 *
 * ```typescript
 * import { generateText } from "ai";
 * import { openai } from "@ai-sdk/openai";
 * import typia from "typia";
 * import { toVercelTools } from "@typia/vercel";
 *
 * class Calculator {
 *   /&#42;&#42; Add two numbers together. &#42;/
 *   add(props: { a: number; b: number }): number {
 *     return props.a + props.b;
 *   }
 * }
 *
 * const controller = typia.llm.controller<Calculator>("calc", new Calculator());
 * const tools = toVercelTools({ controllers: [controller] });
 *
 * const result = await generateText({
 *   model: openai("gpt-4o"),
 *   tools,
 *   prompt: "What is 15 + 27?",
 * });
 * ```
 *
 * ## Example with Anthropic
 *
 * ```typescript
 * import { generateText } from "ai";
 * import { anthropic } from "@ai-sdk/anthropic";
 * import { toVercelTools } from "@typia/vercel";
 *
 * const result = await generateText({
 *   model: anthropic("claude-sonnet-4-20250514"),
 *   tools: toVercelTools({ controllers: [controller] }),
 *   prompt: "Calculate 100 * 50",
 * });
 * ```
 *
 * ## Example with HTTP Controller (OpenAPI)
 *
 * ```typescript
 * import { generateText } from "ai";
 * import { openai } from "@ai-sdk/openai";
 * import { HttpLlm } from "@typia/utils";
 * import { toVercelTools } from "@typia/vercel";
 *
 * const controller = HttpLlm.controller({
 *   name: "shopping",
 *   document: await fetch("https://api.example.com/swagger.json").then(r => r.json()),
 *   connection: { host: "https://api.example.com" },
 * });
 *
 * const result = await generateText({
 *   model: openai("gpt-4o"),
 *   tools: toVercelTools({ controllers: [controller] }),
 *   prompt: "Search for laptops under $1000",
 * });
 * ```
 *
 * @param props Conversion properties
 * @returns Record of Vercel AI SDK Tools keyed by tool name
 * @author Jeongho Nam - https://github.com/samchon
 */
export function toVercelTools(props: {
  /**
   * List of controllers to convert to Vercel tools.
   *
   * - {@link ILlmController}: from `typia.llm.controller<Class>()`, converts all
   *   methods of the class to tools
   * - {@link IHttpLlmController}: from `HttpLlm.controller()`, converts all
   *   operations from OpenAPI document to tools
   */
  controllers: Array<ILlmController | IHttpLlmController>;

  /**
   * Whether to prefix tool names with controller name.
   *
   * If `true`, tool names are formatted as `{controller}_{function}`.
   * If `false`, only the function name is used (may cause conflicts).
   *
   * @default true
   */
  prefix?: boolean | undefined;
}): Record<string, Tool> {
  return VercelToolsRegistrar.convert(props);
}
