import { ILlmApplication, IValidation } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";

export const _llmApplicationFinalize = (
  app: ILlmApplication,
  config?: Partial<
    Pick<ILlmApplication.IConfig, "validate"> & {
      equals?: boolean;
    }
  >,
): void => {
  app.config = {
    ...LlmSchemaConverter.getConfig(),
    validate: config?.validate ?? null,
  };
  if (app.config.validate !== null)
    for (const func of app.functions)
      if (typeof app.config.validate?.[func.name] === "function")
        func.validate = app.config.validate[
          func.name
        ]! satisfies Validator as Validator;
};

type Validator = (input: unknown) => IValidation<unknown>;
