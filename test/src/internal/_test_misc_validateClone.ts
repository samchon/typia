import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_misc_validateClone =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => typia.IValidation<typia.Resolved<T>>) =>
  () => {
    const input: T = factory.generate();
    const valid: typia.IValidation<typia.Resolved<T>> = clone(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.misc.validateClone(): failed to understand the ${name} type.`,
      );

    if (resolved_equal_to(name)(input, valid.data) === false) {
      throw new Error(
        `Bug on typia.misc.validateClone(): failed to understand the ${name} type.`,
      );
    }

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS || []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<typia.Resolved<T>> = clone(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.misc.validateClone(): failed to detect error on the ${name} type.`,
        );

      typia.assert(valid);
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
    if (wrong.length !== 0)
      throw new Error(
        `Bug on typia.misc.validateClone(): failed to detect error on the ${name} type.`,
      );
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
