import {
  ClaudeTypeChecker,
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
  ILlmApplication,
  ILlmFunction,
  ILlmSchema,
} from "@samchon/openapi";
import typia, { tags } from "typia";

export const test_llm_application_chatgpt_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "chatgpt">({
      separate,
    }),
  );

export const test_llm_application_claude_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "claude">({
      separate,
    }),
  );

export const test_llm_application_deepseek_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "deepseek">({
      separate,
    }),
  );

export const test_llm_application_gemini_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "gemini">({
      separate,
    }),
  );

export const test_llm_application_llama_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "llama">({
      separate,
    }),
  );

export const test_llm_application_llm_v30_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "3.0">({
      separate,
    }),
  );

export const test_llm_application_v3_separate = (): void =>
  validate_llm_application_separate(
    typia.llm.application<IMembership, "3.1">({
      separate,
    }),
  );

const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);

const validate_llm_application_separate = <Model extends ILlmSchema.Model>(
  app: ILlmApplication<Model>,
): void => {
  const func: ILlmFunction<Model> = app.functions[0]!;
  if (!func.separated?.validate)
    throw new Error("Separated validate function is not defined.");
};

interface IMembership {
  information(member: IMember): void;
}
interface IMember {
  name: string;
  age: number & tags.Type<"uint32">;
}
