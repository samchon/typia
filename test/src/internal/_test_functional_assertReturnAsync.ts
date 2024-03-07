import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_assertReturnAsync =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assert: (p: (input: T) => Promise<T>) => (input: T) => Promise<T>) =>
  async () => {
    const validate =
      (replacer: string) => async (callback: (input: T) => [T, T]) => {
        try {
          const [x, y] = callback(factory.generate());
          await assert(async () => y)(x);
        } catch (exp) {
          if ((exp as Function).constructor?.name === ErrorClass.name)
            throw new Error(
              `Bug on await typia.functional.assertReturn(): failed to understand the ${name} type.`,
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
            await assert(async () => y)(x);
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
            `Bug on await typia.functional.assertReturn(): failed to detect error on the ${name} type - ${expected}.`,
          );
        }
      };
    // await validate("$input.parameters[0]")((input) => [input, factory.generate()]);
    await validate("$input.return")((input) => [factory.generate(), input]);
  };
