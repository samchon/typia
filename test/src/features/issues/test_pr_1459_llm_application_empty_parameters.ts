import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_pr_1459_llm_application_empty_parameters = (): void => {
  const app = typia.llm.applicationOfValidate<Application, "chatgpt">();
  const result = app.functions[0]!.validate({});
  TestValidator.equals("success")(result.success)(true);
};

interface Application {
  /**
   * Something interesting.
   */
  something(): void;
}
