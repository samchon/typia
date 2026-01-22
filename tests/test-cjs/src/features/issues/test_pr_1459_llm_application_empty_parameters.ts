import { ILlmApplication, IValidation } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1459_llm_application_empty_parameters = (): void => {
  const app: ILlmApplication<Application> =
    typia.llm.application<Application>();
  const result: IValidation<unknown> = app.functions[0]!.validate({});
  TestValidator.equals("success")(result.success)(true);
};

interface Application {
  /** Something interesting. */
  something(): void;
}
