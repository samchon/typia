import {
  ILlmApplication,
  ILlmFunction,
  IValidation,
  LlmTypeChecker,
} from "@samchon/openapi";
import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_application_separateEquals = (): void => {
  const app: ILlmApplication<IMembership> = typia.llm.application<
    IMembership,
    { equals: true }
  >({
    separate: (schema) => LlmTypeChecker.isInteger(schema),
  });
  const func: ILlmFunction = app.functions[0]!;
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

interface IMembership {
  information(member: IMember): void;
}

interface IMember {
  name: string;
  age: number & tags.Type<"uint32">;
}
