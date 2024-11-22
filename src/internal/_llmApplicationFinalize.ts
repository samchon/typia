import { ILlmApplication } from "@samchon/openapi";
import { HttpLlmConverter } from "@samchon/openapi/lib/converters/HttpLlmConverter";

export const _llmApplicationFinalize = <Model extends ILlmApplication.Model>(
  app: ILlmApplication<Model>,
  options?: Partial<ILlmApplication.IOptions<Model>>,
): void => {
  app.options = (
    isChatGptOptions(app, options)
      ? ({
          separate: options?.separate ?? null,
          reference: options?.reference ?? false,
          constraint: options?.constraint ?? false,
        } satisfies ILlmApplication.IOptions<"chatgpt">)
      : ({
          separate: (options?.separate ??
            null) as ILlmApplication.ICommonOptions<
            Exclude<Model, "chatgpt">
          >["separate"],
          recursive:
            (options as ILlmApplication.IOptions<"3.0"> | undefined)
              ?.recursive ?? 3,
        } satisfies ILlmApplication.ICommonOptions<Exclude<Model, "chatgpt">>)
  ) as ILlmApplication.IOptions<Model>;
  if (app.options.separate === null) return;
  for (const func of app.functions)
    func.separated = HttpLlmConverter.separateParameters({
      model: app.model,
      parameters: func.parameters,
      predicate: app.options
        .separate as ILlmApplication.IOptions<Model>["separate"] as any,
    });
};

const isChatGptOptions = <Model extends ILlmApplication.Model>(
  app: ILlmApplication<Model>,
  _options: unknown,
): _options is ILlmApplication.IOptions<"chatgpt"> => app.model === "chatgpt";
