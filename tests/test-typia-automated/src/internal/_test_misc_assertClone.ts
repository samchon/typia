import { TestStructure } from "@typia/template";
import typia, { Resolved, TypeGuardError } from "typia";

import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_misc_assertClone =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => Resolved<T>): void => {
    const input: T = factory.generate();
    const cloned: Resolved<T> = clone(input);

    if (resolved_equal_to(name)(input, cloned) === false) {
      throw new Error(
        `Bug on typia.misc.assertClone(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS || []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      try {
        clone(elem);
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              actual: exp.path,
              expected,
            });
      }
      throw new Error(
        `Bug on typia.misc.assertClone(): failed to detect error on the ${name} type.`,
      );
    }
  };
