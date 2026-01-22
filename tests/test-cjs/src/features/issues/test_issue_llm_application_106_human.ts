import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

interface SomeApplication {
  plus(props: { x: number; y: number }): number;

  /** @human */
  minus(props: { x: number; y: number }): number;
}

export const test_issue_llm_application_106_human = (): void => {
  const app: ILlmApplication = typia.llm.application<SomeApplication>();
  TestValidator.equals("functions")(app.functions.map((f) => f.name))(["plus"]);
};
