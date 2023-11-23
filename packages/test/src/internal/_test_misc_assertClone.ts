import { Resolved, TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_misc_assertClone =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => Resolved<T>) =>
  () => {
    const input: T = factory.generate();
    const cloned: Resolved<T> = clone(input);

    if (resolved_equal_to(name)(input, cloned) === false) {
      throw new Error(
        `Bug on TSON.assertClone(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS || []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      try {
        clone(elem);
      } catch (exp) {
        if (exp instanceof TypeGuardError)
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              actual: exp.path,
              expected,
            });
      }
      throw new Error(
        `Bug on TSON.assertClone(): failed to detect error on the ${name} type.`,
      );
    }
  };
