import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";

export const _llmApplicationFinalize = <Model extends ILlmSchema.Model>(
  app: ILlmApplication<Model>,
  options?: Partial<Pick<ILlmApplication.IOptions<Model>, "separate">>,
): void => {
  app.options = {
    ...LlmSchemaConverter.defaultConfig(app.model),
    separate: options?.separate ?? null,
  };
  if (app.options.separate === null) return;
  for (const func of app.functions)
    func.separated = HttpLlmConverter.separate({
      model: app.model,
      parameters: func.parameters,
      predicate: app.options
        .separate as ILlmApplication.IOptions<Model>["separate"] as any,
    });
};
