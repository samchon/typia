import { IJsonParseResult, ILlmApplication } from "@typia/interface";
import { LlmJson, LlmSchemaConverter } from "@typia/utils";

/**
 * Complete an emitted LLM application at runtime.
 *
 * Each function gets `parse` and `coerce` bound to its parameters schema and a
 * validator that a custom hook can replace. The schema configuration is the one
 * the emitted application declares. The returned application shares schemas
 * with the primitive; keep them unchanged while using the bound operations.
 *
 * @evidence contracts/common.md#principled-implementation The emitted application, which has the schemas and the declared configuration, is completed at runtime: each function gains parse and coerce bound to its parameter schema and a validator that a custom hook can replace, and the configuration is the emitted one with the hook. The schema configuration is taken from the emitted application because that is where the generic was resolved, so a strict build reports strict.
 * @evidence contracts/common.md#clear-and-simple-design One function that spreads the primitive application and maps its functions, using the utility package for parsing and coercion.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Parsing and coercion are delegated to the utilities and the hook is the supported customization point.
 * @evidence contracts/common.md#meaningful-documentation A comment states the completion and the source of the configuration.
 */
export const _llmApplicationFinalize = <Class extends object = any>(
  app: ILlmApplication.__IPrimitive<Class>,
  config?: Partial<Pick<ILlmApplication.IConfig, "validate">>,
): ILlmApplication<Class> => ({
  ...app,
  config: {
    // The schema configuration comes from the emitted application, which is
    // where the `Config` generic was resolved. Rebuilding it from the
    // converter's defaults reported `strict: false` for a strict build, and
    // `@typia/mcp` then inverted a strict output schema without strict, which
    // drops every constraint it carries as a description tag (issue #2293).
    ...LlmSchemaConverter.getConfig(app.config),
    validate: config?.validate ?? null,
  },
  functions: app.functions.map((func) => ({
    ...func,
    parse: (input: string): IJsonParseResult<unknown> =>
      LlmJson.parse(input, func.parameters),
    coerce: (input: unknown): unknown => LlmJson.coerce(input, func.parameters),
    validate: config?.validate?.[func.name] ?? func.validate,
  })),
});
