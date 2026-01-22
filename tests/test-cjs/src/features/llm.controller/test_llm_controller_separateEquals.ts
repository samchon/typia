import {
  ILlmController,
  ILlmFunction,
  IValidation,
  LlmTypeChecker,
} from "@samchon/openapi";
import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_controller_separateEquals = (): void => {
  const controller: ILlmController<Membership> = typia.llm.controller<
    Membership,
    { equals: true }
  >("membership", new Membership(), {
    separate: (schema) => LlmTypeChecker.isInteger(schema),
  });
  const func: ILlmFunction = controller.application.functions[0]!;
  const result: IValidation<unknown> = func.separated!.validate!({
    name: "John Doe",
    age: 30,
  });
  TestValidator.predicate("result")(
    result.success === false &&
      result.errors.length === 1 &&
      result.errors[0]!.path === "$input.age" &&
      result.errors[0]!.expected === "undefined",
  );
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
