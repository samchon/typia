import type { DynamicStructuredTool } from "@langchain/core/tools";
import { IHttpLlmController, ILlmController } from "@typia/interface";

import { LangChainToolsRegistrar } from "./internal/LangChainToolsRegistrar";

type ILangChainController = ILlmController | IHttpLlmController;

interface ILangChainToolsOptions {
  /**
   * Whether to add controller name as prefix to tool names.
   *
   * If `true`, tool names become `{controllerName}_{methodName}`. If `false`,
   * tool names are just `{methodName}`.
   *
   * @default false
   */
  prefix?: boolean | undefined;
}

interface ILangChainToolsProps extends ILangChainToolsOptions {
  /**
   * List of controllers to convert to LangChain tools.
   *
   * - {@link ILlmController}: from `typia.llm.controller<Class>()`, converts all
   *   methods of the class to tools
   * - {@link IHttpLlmController}: from `HttpLlm.controller()`, converts all
   *   operations from OpenAPI document to tools
   */
  controllers: ILangChainController[];
}

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
 *   const controller = typia.llm.controller<Calculator>(
 *     "calculator",
 *     new Calculator(),
 *   );
 *   const tools = toLangChainTools(controller);
 *
 *   const llm = await initChatModel();
 *   const modelWithTools = llm.bindTools(tools);
 *   const result = await modelWithTools.invoke("What is 10 + 5?");
 *   ```;
 *
 * @param input Controller, controller list, or conversion properties
 * @param options Conversion options when `input` is not a properties object
 * @returns Array of LangChain DynamicStructuredTool
 */
export function toLangChainTools(
  controller: ILangChainController,
  options?: ILangChainToolsOptions | undefined,
): DynamicStructuredTool[];
export function toLangChainTools(
  controllers: ILangChainController[],
  options?: ILangChainToolsOptions | undefined,
): DynamicStructuredTool[];
export function toLangChainTools(
  props: ILangChainToolsProps,
): DynamicStructuredTool[];
export function toLangChainTools(
  input: ILangChainController | ILangChainController[] | ILangChainToolsProps,
  options?: ILangChainToolsOptions | undefined,
): DynamicStructuredTool[] {
  return LangChainToolsRegistrar.convert(
    normalizeLangChainToolsProps(input, options),
  );
}

const normalizeLangChainToolsProps = (
  input: ILangChainController | ILangChainController[] | ILangChainToolsProps,
  options?: ILangChainToolsOptions | undefined,
): ILangChainToolsProps => {
  if (isLangChainToolsProps(input)) return input;
  return {
    controllers: Array.isArray(input) ? input : [input],
    prefix: options?.prefix,
  };
};

const isLangChainToolsProps = (
  input: ILangChainController | ILangChainController[] | ILangChainToolsProps,
): input is ILangChainToolsProps =>
  Array.isArray(input) === false &&
  typeof input === "object" &&
  input !== null &&
  "controllers" in input;
