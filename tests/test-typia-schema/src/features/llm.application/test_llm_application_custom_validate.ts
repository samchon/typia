import { TestValidator } from "@nestia/e2e";
import typia, { ILlmApplication, IValidation } from "typia";

export const test_llm_application_custom_validate = (): void => {
  interface IApplication {
    hello(): void;
  }
  const validate = (input: unknown): IValidation<unknown> => {
    return {
      success: true,
      data: input,
    };
  };
  const app: ILlmApplication = typia.llm.application<IApplication>({
    validate: {
      hello: validate,
    },
  });
  TestValidator.equals("custom", app.functions[0]?.validate, validate);
};
