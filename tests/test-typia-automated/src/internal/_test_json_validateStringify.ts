import { TestStructure } from "@typia/template";
import { prepareStringify } from "@typia/template/stringify";
import typia from "typia";

/**
 * Verifies a native typia.json.validateStringify callback reports success with
 * faithful text and failure with the expected paths.
 *
 * The success result must carry text matching a pre-callback reference, and
 * each spoiler must yield a failed validation whose sorted error paths equal
 * the spoiler's authored path list.
 *
 * 1. Prepare the stringify check and require the clean result to succeed with
 *    matching data.
 * 2. For each spoiler, require a failed result whose sorted paths equal the
 *    authored paths.
 *
 * @evidence contracts/testing.md#behavioral-verification The prepared check judges the success data and a failed result for the clean fixture fails the helper; for spoilers the path lists must match exactly in length and content.
 * @evidence contracts/testing.md#independent-expectations The reference is pre-callback JSON.stringify and spoiler path lists are authored; native typia.assertEquals record checking is correlated. The shared serialization oracle compares JSON-visible input state, not ignored properties or mutations undone before checking.
 * @evidence contracts/testing.md#distinguishing-cases Clean success against one failure per spoiler with exact path-list comparison, which also detects missing or extra paths.
 * @evidence contracts/testing.md#execution-ownership Executes through the committed test_json_validateStringify_ObjectSimple composite of test-typia-automated. Native cases in this workspace call the helper from the shared TestServant worker with native-transformed callbacks, so the assembly with the native producer is this suite's boundary, while the expectation policy executes in the plugin-free test-utils unit population.
 */
export const _test_json_validateStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => typia.IValidation<string>): void => {
    const input: T = factory.generate();
    const check = prepareStringify(
      input,
      `Bug on typia.json.validateStringify(): failed to understand the ${name} type.`,
    );
    const valid: typia.IValidation<string> = stringify(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.json.validateStringify(): failed to understand the ${name} type.`,
      );

    typia.assertEquals(valid);
    check(valid.data);

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<string> = stringify(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.json.validateStringify(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.json.validateStringify(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
