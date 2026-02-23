import type { DynamicStructuredTool } from "@langchain/core/tools";
import { IHttpLlmController, ILlmController } from "@typia/interface";

import { LangChainToolsRegistrar } from "./internal/LangChainToolsRegistrar";

/**
 * Convert typia controllers to LangChain tools.
 *
 * Converts TypeScript class methods via `typia.llm.controller<Class>()` or
 * OpenAPI operations via `HttpLlm.controller()` to LangChain tools.
 *
 * Every tool call is validated by typia. If LLM provides invalid arguments,
 * returns validation error formatted by {@link stringifyValidationFailure}
 * so that LLM can correct them automatically.
 *
 * @param props Conversion properties
 * @returns Array of LangChain DynamicStructuredTool
 *
 * @example
 * ```typescript
 * import { ChatOpenAI } from "@langchain/openai";
 * import { AgentExecutor, createToolCallingAgent } from "langchain/agents";
 * import typia from "typia";
 * import { toLangChainTools } from "@typia/langchain";
 *
 * class Calculator {
 *   add(input: { a: number; b: number }): number {
 *     return input.a + input.b;
 *   }
 * }
 *
 * const tools = toLangChainTools({
 *   controllers: [
 *     typia.llm.controller<Calculator>("calculator", new Calculator()),
 *   ],
 * });
 *
 * const llm = new ChatOpenAI({ model: "gpt-4" });
 * const agent = createToolCallingAgent({ llm, tools, prompt });
 * const executor = new AgentExecutor({ agent, tools });
 * await executor.invoke({ input: "What is 10 + 5?" });
 * ```
 */
export function toLangChainTools(props: {
  /**
   * List of controllers to convert to LangChain tools.
   *
   * - {@link ILlmController}: from `typia.llm.controller<Class>()`, converts
   *   all methods of the class to tools
   * - {@link IHttpLlmController}: from `HttpLlm.controller()`, converts all
   *   operations from OpenAPI document to tools
   */
  controllers: Array<ILlmController | IHttpLlmController>;

  /**
   * Whether to add controller name as prefix to tool names.
   *
   * If `true`, tool names become `{controllerName}_{methodName}`.
   * If `false`, tool names are just `{methodName}`.
   *
   * @default true
   */
  prefix?: boolean | undefined;
}): DynamicStructuredTool[] {
  return LangChainToolsRegistrar.convert(props);
}
