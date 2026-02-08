import { TestStructure } from "../utils/TestStructure";
import { _test_notation_general } from "./_test_notation_general";

export const _test_notation_isGeneral =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  <U>(functor: {
    convert: (input: T) => U | null;
    assert: (input: U) => U;
  }): void => {
    _test_notation_general(name)(factory)({
      assert: functor.assert,
      convert: (input) => {
        const output: U | null = functor.convert(input);
        if (output === null)
          throw new Error(
            `Bug on typia.notations.isX(): failed to understand the ${name} type.`,
          );
        return output;
      },
    }) satisfies void;

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (functor.convert(elem) === null)
        throw new Error(
          `Bug on typia.notations.assertX(): failed to detect error on the ${name} type.`,
        );
    }
  };
