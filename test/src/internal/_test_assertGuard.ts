import typia, { AssertionGuard, TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_assertGuard =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assert: AssertionGuard<T>) =>
  () => {
    try {
      const input: T = factory.generate();
      assert(input);
    } catch (exp) {
      if (
        (exp as Function).constructor?.name === ErrorClass.name &&
        typia.is<TypeGuardError.IProps>(exp)
      ) {
        console.log(exp);
        throw new Error(
          `Bug on typia.assertGuard(): failed to understand the ${name} type.`,
        );
      } else throw exp;
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        assert(elem);
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected: expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.assertGuard(): failed to detect error on the ${name} type - ${expected}.`,
      );
    }
  };
