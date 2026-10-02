import { TestStructure } from "@typia/template";
import typia from "typia";

/**
 * Verifies validate through its supplied operation and fixture.
 *
 * The clean phase separates blanket rejection from correct validation. The
 * spoiler loop collects path mismatches and reports them together; actual
 * acceptance of an invalid input throws immediately.
 *
 * 1. Run the clean fixture scenario and its observable assertions.
 * 2. Retain the applicable invalid or round-trip distinctions described below.
 *
 * @evidence contracts/common.md#principled-implementation The supplied validator must return clean success with the original input reference, then reject every authored spoiler and report the exact sorted path multiset, including count. Native assertEquals also checks each validation record. generate and spoiler-returned paths are authored independently of validation output. Sorting compares the entire path population rather than a subset. The extra native assertEquals record check shares the same emitter and cannot independently certify result shape.
 * @evidence contracts/common.md#clear-and-simple-design The clean phase separates blanket rejection from correct validation. The spoiler loop collects path mismatches and reports them together; actual acceptance of an invalid input throws immediately.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The actual supplied callback is executed without substituting a verdict. Clean success and identity precede every invalid-value scenario. Each spoiler uses a new generated value; a spoiler-free fixture has no negative-value assertion. Missing, extra and duplicate-path changes fail multiset equality.
 * @evidence contracts/common.md#meaningful-documentation The introduction and scenario list identify this helper's assertion responsibility; the answers state its exact comparisons, executable owner and oracle limitations.
 * @evidence contracts/testing.md#behavioral-verification The supplied validator must return clean success with the original input reference, then reject every authored spoiler and report the exact sorted path multiset, including count. Native assertEquals also checks each validation record.
 * @evidence contracts/testing.md#independent-expectations generate and spoiler-returned paths are authored independently of validation output. Sorting compares the entire path population rather than a subset. The extra native assertEquals record check shares the same emitter and cannot independently certify result shape.
 * @evidence contracts/testing.md#distinguishing-cases Clean success and identity precede every invalid-value scenario. Each spoiler uses a new generated value; a spoiler-free fixture has no negative-value assertion. Missing, extra and duplicate-path changes fail multiset equality.
 * @evidence contracts/testing.md#execution-ownership Generated validate/createValidate families supply the native callback and TestServant discovery. This helper owns the success/error comparison and local accumulated mismatch reports.
 */
export const _test_validate =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (validate: (input: T) => typia.IValidation<T>): void => {
    const input: T = factory.generate();
    const valid: typia.IValidation<unknown> = validate(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.validate(): failed to understand the ${name} type.`,
      );
    else if (valid.data !== input)
      throw new Error(
        "Bug on typia.validate(): failed to archive the input value.",
      );
    typia.assertEquals(valid);

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<T> = validate(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.validate(): failed to detect error on the ${name} type.`,
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
        `Bug on typia.validate(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
