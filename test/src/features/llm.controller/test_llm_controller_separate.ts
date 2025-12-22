import { ILlmController, ILlmFunction, LlmTypeChecker } from "@samchon/openapi";
import typia, { tags } from "typia";

export const test_llm_controller_separate = (): void => {
  const controller: ILlmController<Membership> =
    typia.llm.controller<Membership>("membership", new Membership(), {
      separate: (schema) => LlmTypeChecker.isInteger(schema),
    });
  const func: ILlmFunction = controller.application.functions[0]!;
  if (!func.separated?.validate)
    throw new Error("Separated validate function is not defined.");
};

interface IMember {
  name: string;
  age: number & tags.Type<"uint32">;
}

class Membership {
  public information(member: IMember): void {
    member;
  }
}
