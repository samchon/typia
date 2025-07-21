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

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_controller_chatgpt_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "chatgpt", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_claude_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "claude", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_deepseek_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "deepseek", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_gemini_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "gemini", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_llama_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "llama", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_llm_v30_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "3.0", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_v3_separateEquals = (): void =>
  validate_llm_controller_separateEquals(
    typia.llm.controller<Membership, "3.1", { equals: true }>(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const validate_llm_controller_separateEquals = <
  Model extends ILlmSchema.Model,
>(
  controller: ILlmController<Model>,
): void => {
  const func: ILlmFunction<Model> = controller.application.functions[0]!;
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
const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);
