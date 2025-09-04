import {
  ClaudeTypeChecker,
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
  ILlmApplication,
  ILlmFunction,
  ILlmSchema,
  IValidation,
} from "@samchon/openapi";
import typia, { tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_llm_application_chatgpt_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "chatgpt", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_claude_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "claude", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_deepseek_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "deepseek", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_gemini_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "gemini", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_llama_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "llama", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_llm_v30_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "3.0", { equals: true }>({
      separate,
    }),
  );

export const test_llm_application_v3_separateEquals = (): void =>
  validate_llm_application_separateEquals(
    typia.llm.application<IMembership, "3.1", { equals: true }>({
      separate,
    }),
  );

const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);

const validate_llm_application_separateEquals = <
  Model extends ILlmSchema.Model,
>(
  app: ILlmApplication<Model>,
): void => {
  const func: ILlmFunction<Model> = app.functions[0]!;
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
