import { TestEquality } from "@typia/template/equality";
import typia, { ILlmController, IValidation } from "typia";

export const test_llm_controller_custom_validate = (): void => {
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
  TestEquality.equals(
    "custom",
    controller.application.functions[0]?.validate,
    validate,
  );
};
