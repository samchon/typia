import {
  ILlmApplication,
  IValidation,
  LlmSchemaComposer,
} from "@samchon/openapi";

export const _llmApplicationFinalize = (
  app: ILlmApplication,
  config?: Partial<
    Pick<ILlmApplication.IConfig, "separate" | "validate"> & {
      equals?: boolean;
    }
  >,
): void => {
  app.config = {
    ...LlmSchemaComposer.getConfig(),
    separate: config?.separate ?? null,
    validate: config?.validate ?? null,
  };
  if (app.config.separate !== null)
    for (const func of app.functions)
      func.separated = LlmSchemaComposer.separate({
        parameters: func.parameters,
        predicate: app.config.separate,
        equals: config?.equals ?? false,
      });
  if (app.config.validate !== null)
    for (const func of app.functions)
      if (typeof app.config.validate?.[func.name] === "function")
        func.validate = app.config.validate[
          func.name
        ]! satisfies Validator as Validator;
};

type Validator = (input: unknown) => IValidation<unknown>;
