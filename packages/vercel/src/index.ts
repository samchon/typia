import {
  IHttpLlmController,
  ILlmController,
  ILlmSchema,
} from "@typia/interface";
import type { Schema, Tool } from "ai";

import { VercelParameterConverter } from "./internal/VercelParameterConverter";
import { VercelToolsRegistrar } from "./internal/VercelToolsRegistrar";

/**
 * Convert typia controllers to Vercel AI SDK tools.
 *
 * Transforms TypeScript class methods via `typia.llm.controller<Class>()` or
 * OpenAPI operations via `HttpLlm.controller()` into Vercel AI SDK tools that
 * can be used with any LLM provider (OpenAI, Anthropic, Google, etc.).
 *
 * Every tool call is validated by typia. If the LLM provides invalid arguments,
 * returns a validation error formatted by {@link LlmJson.stringify} so the LLM
 * can auto-correct in the next turn.
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
 *   add(props: { a: number; b: number }): { value: number } {
 *     return { value: props.a + props.b };
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
 * import { anthropic } from "@ai-sdk/anthropic";
 * import { toVercelTools } from "@typia/vercel";
 * import { generateText } from "ai";
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
 * import { openai } from "@ai-sdk/openai";
 * import { HttpLlm } from "@typia/utils";
 * import { toVercelTools } from "@typia/vercel";
 * import { generateText } from "ai";
 *
 * const controller = HttpLlm.controller({
 *   name: "shopping",
 *   document: await fetch("https://api.example.com/swagger.json").then(
 *     (r) => r.json(),
 *   ),
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
 * @author Jeongho Nam - https://github.com/samchon
 * @param props Conversion properties
 * @returns Record of Vercel AI SDK Tools keyed by tool name
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
   * If `true`, tool names are formatted as `{controller}_{function}`. If
   * `false`, only the function name is used (may cause conflicts).
   *
   * @default false
   */
  prefix?: boolean | undefined;
}): Record<string, Tool> {
  return VercelToolsRegistrar.convert(props);
}

/**
 * Convert LLM parameters schema to Vercel AI SDK schema format.
 *
 * Transforms {@link ILlmSchema.IParameters} into Vercel AI SDK's `Schema` type
 * for use with `generateObject()`. Use with `typia.llm.structuredOutput<T>()`
 * or `typia.llm.parameters<T>()`.
 *
 * ## Example
 *
 * ```typescript
 * import { openai } from "@ai-sdk/openai";
 * import { toVercelSchema } from "@typia/vercel";
 * import { generateObject } from "ai";
 * import typia from "typia";
 *
 * interface IMember {
 *   name: string;
 *   age: number;
 * }
 *
 * const output = typia.llm.structuredOutput<IMember>();
 * const schema = toVercelSchema(output.parameters);
 *
 * const { object } = await generateObject({
 *   model: openai("gpt-4o"),
 *   schema,
 *   prompt: "Generate a member named John who is 30 years old",
 * });
 *
 * const coerced = output.coerce(object);
 * const result = output.validate(coerced);
 * ```
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @param parameters LLM parameters schema from
 *   `typia.llm.structuredOutput<T>().parameters` or
 *   `typia.llm.parameters<T>()`
 * @returns Vercel AI SDK Schema for `generateObject()`
 */
export function toVercelSchema(
  parameters: ILlmSchema.IParameters,
): Schema<object> {
  return VercelParameterConverter.convert(parameters);
}
