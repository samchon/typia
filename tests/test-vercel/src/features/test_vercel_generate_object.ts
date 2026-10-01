import { TestEquality } from "@typia/template/equality";
import { toVercelSchema } from "@typia/vercel";
import { generateObject } from "ai";
import { MockLanguageModelV3 } from "ai/test";
import typia from "typia";

/**
 * Verifies vercel generate object against the native typia.llm.structuredOutput
 * output.
 *
 * The case builds its input in this file and asserts name, age,
 * validate.success.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.structuredOutput is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (name; age; validate.success).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (name; age; validate.success) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-vercel start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_vercel_generate_object is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_vercel_generate_object = async (): Promise<void> => {
  interface IMember {
    name: string;
    age: number;
  }

  const output = typia.llm.structuredOutput<IMember>();
  const schema = toVercelSchema(output.parameters);

  // Mock model returns JSON with stringified number
  const mockModel = new MockLanguageModelV3({
    doGenerate: async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({ name: "John", age: "30" }),
        },
      ],
      finishReason: { unified: "stop" as const, raw: "stop" },
      usage: {
        inputTokens: { total: 10, noCache: 10, cacheRead: 0, cacheWrite: 0 },
        outputTokens: { total: 5, text: 5, reasoning: 0 },
      },
      warnings: [],
    }),
  });

  const result = await generateObject({
    model: mockModel,
    schema,
    prompt: "Generate a member named John who is 30 years old",
  });

  // Coerce + validate from ILlmStructuredOutput directly
  const coerced = output.coerce(result.object);
  TestEquality.equals("name", coerced.name, "John");
  TestEquality.equals("age", coerced.age, 30);

  const validated = output.validate(coerced);
  TestEquality.equals("validate.success", validated.success, true);
};
