import { IJsonParseResult, ILlmApplication } from "@typia/interface";
import { LlmJson, LlmSchemaConverter } from "@typia/utils";

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
