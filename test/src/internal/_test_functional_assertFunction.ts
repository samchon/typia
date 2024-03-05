import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_assertFunction =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assert: (p: (input: T) => T) => (input: T) => T) =>
  () => {
    const validate = (replacer: string) => (callback: (input: T) => [T, T]) => {
      try {
        const [x, y] = callback(factory.generate());
        assert(() => y)(x);
      } catch (exp) {
        if ((exp as Function).constructor?.name === ErrorClass.name)
          throw new Error(
            `Bug on typia.functional.assertFunction(): failed to understand the ${name} type.`,
          );
        else throw exp;
      }
      for (const spoil of factory.SPOILERS ?? []) {
        const elem: T = factory.generate();
        const expected: string[] = spoil(elem).map((str) =>
          str.replace("$input", replacer),
        );
        const [x, y] = callback(elem);
        try {
          assert(() => y)(x);
        } catch (exp) {
          if (
            (exp as Function).constructor?.name === ErrorClass.name &&
            typia.is<TypeGuardError.IProps>(exp)
          ) {
            if (exp.path && expected.includes(exp.path) === true) continue;
            else
              console.log({
                expected: expected,
                actual: exp.path,
              });
          }
        }
        throw new Error(
          `Bug on typia.functional.assertFunction(): failed to detect error on the ${name} type - ${expected}.`,
        );
      }
    };
    validate("$input.parameters[0]")((input) => [input, factory.generate()]);
    validate("$input.return")((input) => [factory.generate(), input]);
  };
