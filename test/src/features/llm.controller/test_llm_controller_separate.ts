import {
  ClaudeTypeChecker,
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
  ILlmController,
  ILlmFunction,
  ILlmSchema,
} from "@samchon/openapi";
import typia, { tags } from "typia";

export const test_llm_controller_chatgpt_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "chatgpt">(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_claude_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "claude">("membership", new Membership(), {
      separate,
    }),
  );

export const test_llm_controller_deepseek_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "deepseek">(
      "membership",
      new Membership(),
      {
        separate,
      },
    ),
  );

export const test_llm_controller_gemini_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "gemini">("membership", new Membership(), {
      separate,
    }),
  );

export const test_llm_controller_llama_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "llama">("membership", new Membership(), {
      separate,
    }),
  );

export const test_llm_controller_llm_v30_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "3.0">("membership", new Membership(), {
      separate,
    }),
  );

export const test_llm_controller_v3_separate = (): void =>
  validate_llm_controller_separate(
    typia.llm.controller<Membership, "3.1">("membership", new Membership(), {
      separate,
    }),
  );

export const validate_llm_controller_separate = <
  Model extends ILlmSchema.Model,
>(
  controller: ILlmController<Model>,
): void => {
  const func: ILlmFunction<Model> = controller.application.functions[0]!;
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
const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);
