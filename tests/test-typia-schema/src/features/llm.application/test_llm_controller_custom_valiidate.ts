import { TestValidator } from "@nestia/e2e";
import typia, { ILlmController, IValidation } from "typia";

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
  const controller: ILlmController = typia.llm.controller<IApplication>(
    "app",
    {
      hello: () => {},
    },
    {
      validate: {
        hello: validate,
      },
    },
  );
  TestValidator.equals(
    "custom",
    controller.application.functions[0]?.validate,
    validate,
  );
};
