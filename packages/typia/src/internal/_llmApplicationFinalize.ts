import { IJsonParseResult, ILlmApplication } from "@typia/interface";
import { LlmJson, LlmSchemaConverter } from "@typia/utils";

export const _llmApplicationFinalize = <Class extends object = any>(
  app: ILlmApplication.__IPrimitive<Class>,
  config?: Partial<
    Pick<ILlmApplication.IConfig, "validate"> & {
      equals?: boolean;
    }
  >,
): ILlmApplication<Class> => ({
  ...app,
  config: {
    ...LlmSchemaConverter.getConfig(),
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
