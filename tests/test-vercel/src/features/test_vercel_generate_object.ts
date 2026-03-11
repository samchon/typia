import { TestValidator } from "@nestia/e2e";
import { toVercelSchema } from "@typia/vercel";
import { generateObject } from "ai";
import { MockLanguageModelV1 } from "ai/test";
import typia from "typia";

export const test_vercel_generate_object = async (): Promise<void> => {
  interface IMember {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IMember>();
  const schema = toVercelSchema(output.parameters);

  // Mock model returns JSON with stringified number
  const mockModel = new MockLanguageModelV1({
    defaultObjectGenerationMode: "json",
    doGenerate: async () => ({
      rawCall: { rawPrompt: null, rawSettings: {} },
      finishReason: "stop" as const,
      usage: { promptTokens: 10, completionTokens: 5 },
      text: JSON.stringify({ name: "John", age: "30" }),
    }),
  });

  const result = await generateObject({
    model: mockModel,
    schema,
    prompt: "Generate a member named John who is 30 years old",
  });

  // Coerce + validate from ILlmStructuredOutput directly
  const coerced = output.coerce(result.object);
  TestValidator.equals("name", coerced.name, "John");
  TestValidator.equals("age", coerced.age, 30);

  const validated = output.validate(coerced);
  TestValidator.equals("validate.success", validated.success, true);
};
