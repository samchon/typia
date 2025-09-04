import { ILlmApplication } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

interface SomeApplication {
  plus(props: { x: number; y: number }): number;

  /** @human */
  minus(props: { x: number; y: number }): number;
}

export const test_issue_openapi_106_human = (): void => {
  const app: ILlmApplication<"chatgpt"> = typia.llm.application<
    SomeApplication,
    "chatgpt"
  >();
  TestValidator.equals("functions")(app.functions.map((f) => f.name))(["plus"]);
};
