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
 * @evidence contracts/testing.md#behavioral-verification Runs real AI SDK generateObject with an official injected mock model returning John and age string30, then checks coerce results and native validate success.
 * @evidence contracts/testing.md#independent-expectations The handwritten provider payload fixes name John and numeric age30 after coercion; native validation is a correlated postcondition and not an independent schema oracle.
 * @evidence contracts/testing.md#distinguishing-cases This covers SDK structured-object consumption plus numeric-string coercion; structured_output_validate separately owns noncoercible and missing-property rejection.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_vercel_generate_object in src/features through the native-enabled integration command. Private fixture classes and local callbacks are reviewed through this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real SDK generateObject parses the injected provider JSON through a native-generated schema carrier, then the native harness coerces age string30. This structured-object SDK path differs from the tool-call cases; no provider network runs.
 * @evidence contracts/e2e.md#shared-execution All feature declarations belong to the same test-vercel project and ttsx integration invocation; native plugin preparation is shared rather than rebuilt per case. SDK mock models are lightweight per-case protocol inputs, not independent compiler projects.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The suite reuses ttsc's native binary keyed by plugin source/dependencies and the same project compilation; changed plugin inputs invalidate the key. This invocation owns fresh fixture or harness objects and any mock response/counter state, opens no network host and awaits all execution before returning. No case-owned process or handle survives assertion failure.
 * @evidence contracts/e2e.md#preserved-coverage Every original input, assertion and exported case name remains in this feature. Portable HTTP registration/output cases are separately retained in the plugin-free unit population; no runtime assertion is replaced by source text or emitted-helper presence.
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
