import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_notation_general } from "./_test_notation_general";

export const _test_notation_assertGeneral =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  <U>(functor: { convert: (input: T) => U; assert: (input: U) => U }): void => {
    _test_notation_general(name)(factory)(functor) satisfies void;

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        functor.convert(elem);
      } catch (exp) {
        if (
          (exp as Function).constructor?.name === ErrorClass.name &&
          typia.is<TypeGuardError.IProps>(exp)
        )
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      throw new Error(
        `Bug on typia.notations.assertX(): failed to detect error on the ${name} type.`,
      );
    }
  };
