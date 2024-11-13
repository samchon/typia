import { ILlmApplication } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";

export const _llmApplicationFinalize = <Model extends ILlmApplication.Model>(
  app: ILlmApplication<Model>,
  options?: ILlmApplication.IOptions<Model>,
): void => {
  app.options = {
    separate: options?.separate ?? null,
    recursive: app.model === "chatgpt" ? undefined : (3 as any),
  };
  if (app.options.separate === null) return;
  for (const func of app.functions)
    func.separated = HttpLlmConverter.separateParameters({
      model: app.model,
      parameters: func.parameters,
      predicate: app.options.separate,
    });
};
