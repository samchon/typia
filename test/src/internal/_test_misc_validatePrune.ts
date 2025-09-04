import { IValidation, assertEquals } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_misc_validatePrune =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (prune: (input: T) => IValidation<T>): void => {
    const input: T = factory.generate();

    // SPOIL OBJECTS
    iterate((obj: any) =>
      new Array(10)
        .fill("")
        .forEach((_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable")),
    )(input);

    // DO VALIDATE
    if (prune(input).success === false)
      throw new Error(
        `Bug on typia.misc.validatePrune(): failed to prune the ${name} type.`,
      );
    else if (prune.toString().indexOf("RegExp(/(.*)/).test") === -1)
      iterate((obj: any) => {
        if (
          Object.keys(obj).some(
            (key) => key.indexOf("__non_regular_type__") === 0,
          )
        )
          throw new Error(
            `Bug on typia.misc.validatePrune(): failed to prune the ${name} type.`,
          );
      })(input);

    // SPOIL
    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: IValidation<T> = prune(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.misc.validatePrune(): failed to detect error on the ${name} type.`,
        );

      assertEquals(valid);
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
        `Bug on typia.misc.validatePrune(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}

const iterate =
  (closure: (obj: any) => void) =>
  (input: any): void => {
    if (Array.isArray(input)) return iterate_array(closure)(input);
    else if (
      input !== null &&
      typeof input === "object" &&
      typeof input.valueOf() === "object"
    )
      return iterate_object(closure)(input);
  };

const iterate_object =
  (closure: (obj: any) => void) =>
  (input: any): void => {
    closure(input);
    for (const value of Object.values(input)) iterate(closure)(value);
  };

const iterate_array =
  (closure: (obj: any) => void) =>
  (input: any): void =>
    input.forEach((elem: any) => iterate(closure)(elem));
