import { ILlmApplication, ILlmFunction } from "@samchon/openapi";
import typia from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1532_class_private = (): void => {
  const app: ILlmApplication<"chatgpt"> = typia.llm.application<
    Application,
    "chatgpt"
  >();
  const assert = (name: string, visible: boolean): void => {
    const func: ILlmFunction<"chatgpt"> | undefined = app.functions.find(
      (f) => f.name === name,
    );
    TestValidator.equals("visible")(visible)(!!func);
  };
  assert("private", false);
  assert("privateButCommented", false);
  assert("protected", false);
  assert("protectedButCommented", false);
  assert("public", true);
  assert("publicButCommented", true);
  assert("nothing", true);
  assert("nothingButCommented", true);
};

class Application {
  private private(): void {}

  /**
   * Some comment.
   */
  private privateButCommented(): void {}

  protected protected(): void {}

  /**
   * @inheritDoc
   */
  protected protectedButCommented(): void {}

  public public(): void {}

  /**
   * Hello world.
   */
  public publicButCommented(): void {}

  nothing(): void {
    this.private;
    this.privateButCommented;
  }

  /**
   * @title nothing
   */
  nothingButCommented(): void {}
}
