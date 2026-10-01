import { prepareStringify } from "@typia/oracle/stringify";
import { TestStructure } from "@typia/template";

/**
 * Verifies a native typia.json.isStringify callback serializes valid input and
 * returns null for spoiled input.
 *
 * Valid fixtures must serialize faithfully against a pre-callback reference,
 * and every fixture spoiler must make the guard return null instead of text.
 *
 * 1. Prepare the stringify check, run the callback on the clean fixture and
 *    require non-null text matching the reference.
 * 2. For each spoiler, mutate a fresh fixture and require null.
 *
 * @evidence contracts/testing.md#behavioral-verification The clean text is judged by the prepared stringify check and a null result fails it; each spoiled fixture must produce null, so an accepting guard fails.
 * @evidence contracts/testing.md#independent-expectations The reference is JSON.stringify of the clean fixture before the callback, and the spoilers are authored beside the fixture declarations as independent invalid inputs.
 * @evidence contracts/testing.md#distinguishing-cases Positive clean fixture against one negative per authored spoiler; spoilers that stringify to null for another reason are not distinguished.
 * @evidence contracts/testing.md#execution-ownership Executes through the generated test_json_isStringify cases of test-typia-automated. The generated cases in this workspace call the helper from TestServant workers with native-transformed callbacks, so the assembly with the native producer is this suite's boundary, while the expectation policy executes in the plugin-free oracle unit.
 */
export const _test_json_isStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string | null): void => {
    const data: T = factory.generate();
    const message: string = `Bug on typia.json.isStringify(): failed to understand the ${name} type.`;
    const check = prepareStringify(data, message);
    const optimized: string | null = stringify(data);

    if (optimized === null) throw new Error(message);
    check(optimized);

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (stringify(elem) !== null)
        throw new Error(
          `Bug on typia.json.isStringify(): failed to detect error on the ${name} type.`,
        );
    }
  };
