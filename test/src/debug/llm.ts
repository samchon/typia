import {
  ClaudeTypeChecker,
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@samchon/openapi";
import typia, { tags } from "typia";

const test_llm_controller_claude_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "claude", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

const validate_llm_controller_separateEquals = <Model extends ILlmSchema.Model>(
  controller: ILlmController<Model>,
): void => {
  const func: ILlmFunction<Model> = controller.application.functions[0]!;
  const result: IValidation<unknown> = func.separated!.validate!({
    name: "John Doe",
    age: 30,
  });
  console.log(result);
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
const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);

test_llm_controller_claude_separateEquals();
