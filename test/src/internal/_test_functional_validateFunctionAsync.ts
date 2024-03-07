import typia, { IValidation } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_validateFunctionAsync =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (
    validate: (
      p: (input: T) => Promise<T>,
    ) => (input: T) => Promise<IValidation<T>>,
  ) =>
  async () => {
    const task =
      (replacer: string) => async (callback: (input: T) => [T, T]) => {
        const [x, y]: [T, T] = callback(factory.generate());
        if ((await validate(async () => y)(x)).success === false)
          throw new Error(
            `Bug on await typia.functional.validateFunction(): failed to understand the ${name} type.`,
          );

        const wrong: ISpoiled[] = [];
        for (const spoil of factory.SPOILERS ?? []) {
          const elem: T = factory.generate();
          const expected: string[] = spoil(elem)
            .map((str) => str.replace("$input", replacer))
            .sort();
          const [x, y]: [T, T] = callback(elem);
          const valid: IValidation<T> = await validate(async () => y)(x);
          if (valid.success === true)
            throw new Error(
              `Bug on await typia.functional.validateFunction(): failed to detect error on the ${name} type.`,
            );
          typia.assert(valid);
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
            `Bug on await typia.functional.validateFunction(): failed to detect error on the ${name} type.`,
          );
        }
      };
    await task("$input.parameters[0]")((input) => [input, factory.generate()]);
    await task("$input.return")((input) => [factory.generate(), input]);
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
