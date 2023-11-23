import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_notation_general } from "./_test_notation_general";

export const _test_notation_assertGeneral =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  <U>(functor: { convert: (input: T) => U; assert: (input: U) => U }) =>
  () => {
    _test_notation_general(name)(factory)(functor)();

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        functor.convert(elem);
      } catch (exp) {
        if (exp instanceof typia.TypeGuardError)
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
