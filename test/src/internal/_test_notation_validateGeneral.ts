import typia, { IValidation } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { _test_notation_general } from "./_test_notation_general";

export const _test_notation_validateGeneral =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  <U>(functor: {
    convert: (input: T) => IValidation<U>;
    assert: (input: U) => U;
  }): void => {
    _test_notation_general(name)(factory)({
      assert: functor.assert,
      convert: (input) => {
        const res: IValidation<U> = functor.convert(input);
        if (res.success === false)
          throw new Error(
            `Bug on typia.notations.validateX(): failed to understand the ${name} type.`,
          );
        typia.assertEquals<IValidation.ISuccess<unknown>>(res);
        return res.data;
      },
    }) satisfies void;

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: IValidation<U> = functor.convert(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.notations.validateX(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
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
    if (wrong.length !== 0) {
      console.log(wrong);
      throw new Error(
        `Bug on typia.notations.validateX(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
