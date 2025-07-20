import { StandardSchemaV1 } from "@standard-schema/spec";
import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_standardSchema_validate =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (validate: StandardSchemaV1<unknown, T>): void => {
    const input: T = factory.generate();
    const valid = validate["~standard"].validate(input);
    if (!("value" in valid))
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to understand the ${name} type.`,
      );
    else if (valid.value !== input)
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to archive the input value.`,
      );
    // This does not compile.
    // TODO: Fix this.
    // typia.assertEquals<StandardSchemaV1.SuccessResult<T>>(valid);

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid = validate["~standard"].validate(elem);

      if (!("issues" in valid) || !valid.issues)
        throw new Error(
          `Bug on typia.createValidate["~standard"].validate(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      const issues = [...valid.issues];

      // It's difficult to compare the paths, so we'll just compare the number of issues.
      if (issues.length !== expected.length)
        wrong.push({
          expected,
          actual: issues.map((e) => e.path?.join(".") ?? ""),
        });
    }
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.createValidate["~standard"].validate(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
