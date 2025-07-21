import { ILlmApplication, ILlmFunction, ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/lib/composers/LlmSchemaComposer";

export const _llmApplicationFinalize = <Model extends ILlmSchema.Model>(
  app: ILlmApplication<Model>,
  options?: Partial<
    Pick<ILlmApplication.IOptions<Model>, "separate"> & {
      equals?: boolean;
    }
  >,
): void => {
  app.options = {
    ...LlmSchemaComposer.defaultConfig(app.model),
    separate: options?.separate ?? null,
  };
  if (app.options.separate === null) return;
  for (const func of app.functions)
    func.separated = LlmSchemaComposer.separateParameters(app.model)({
      parameters:
        func.parameters satisfies ILlmSchema.IParameters<Model> as any,
      predicate: app.options
        .separate as ILlmApplication.IOptions<Model>["separate"] as any,
      equals: options?.equals ?? false,
    }) as ILlmFunction.ISeparated<Model>;
};
