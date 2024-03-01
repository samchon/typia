import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_misc_assertPrune =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (prune: (input: T) => T) =>
  () => {
    const input: T = factory.generate();

    // SPOIL OBJECTS
    iterate((obj: any) =>
      new Array(10)
        .fill("")
        .forEach((_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable")),
    )(input);

    // DO VALIDATE
    prune(input);
    if (prune.toString().indexOf("RegExp(/(.*)/).test") === -1)
      iterate((obj: any) => {
        if (
          Object.keys(obj).some(
            (key) => key.indexOf("__non_regular_type__") === 0,
          )
        )
          throw new Error(
            `Bug on typia.misc.isPrune(): failed to prune the ${name} type.`,
          );
      })(input);

    // SPOIL
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        prune(elem);
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
        `Bug on typia.misc.assertPrune(): failed to detect error on the ${name} type.`,
      );
    }
  };

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
