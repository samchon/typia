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
 * returns validation error formatted by {@link LlmJson.stringify} so that LLM
 * can correct them automatically.
 *
 * @example
 *   ```typescript
 *   import { initChatModel } from "langchain/chat_models/universal";
 *   import typia from "typia";
 *   import { toLangChainTools } from "@typia/langchain";
 *
 *   class Calculator {
 *     add(input: { a: number; b: number }): { value: number } {
 *       return { value: input.a + input.b };
 *     }
 *   }
 *
 *   const tools = toLangChainTools({
 *     controllers: [
 *       typia.llm.controller<Calculator>("calculator", new Calculator()),
 *     ],
 *   });
 *
 *   const llm = await initChatModel();
 *   const modelWithTools = llm.bindTools(tools);
 *   const result = await modelWithTools.invoke("What is 10 + 5?");
 *   ```;
 *
 * @param props Conversion properties
 * @returns Array of LangChain DynamicStructuredTool
 */
export function toLangChainTools(props: {
  /**
   * List of controllers to convert to LangChain tools.
   *
   * - {@link ILlmController}: from `typia.llm.controller<Class>()`, converts all
   *   methods of the class to tools
   * - {@link IHttpLlmController}: from `HttpLlm.controller()`, converts all
   *   operations from OpenAPI document to tools
   */
  controllers: Array<ILlmController | IHttpLlmController>;

  /**
   * Whether to add controller name as prefix to tool names.
   *
   * If `true`, tool names become `{controllerName}_{methodName}`. If `false`,
   * tool names are just `{methodName}`.
   *
   * @default false
   */
  prefix?: boolean | undefined;
}): DynamicStructuredTool[] {
  return LangChainToolsRegistrar.convert(props);
}
