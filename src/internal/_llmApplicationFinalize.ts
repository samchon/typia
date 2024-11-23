import { ILlmApplication } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";

export const _llmApplicationFinalize = <Model extends ILlmApplication.Model>(
  app: ILlmApplication<Model>,
  options?: Partial<Pick<ILlmApplication.IOptions<Model>, "separate">>,
): void => {
  app.options = {
    separate: options?.separate ?? null,
    constraint: false,
    recursive: 3,
    reference: false,
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
