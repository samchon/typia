import { TestStructure } from "@typia/template";
import typia, { TypeGuardError } from "typia";

export const _test_assert =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (assert: (input: T) => T): void => {
    try {
      const input: T = factory.generate();
      const output: T = assert(input);

      if (input !== output)
        throw new Error("Bug on typia.assert(): failed to return input value.");
    } catch (exp) {
      if ((exp as Function).constructor?.name === ErrorClass.name) {
        console.log(exp);
        throw new Error(
          `Bug on typia.assert(): failed to understand the ${name} type.`,
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
        `Bug on typia.assert(): failed to detect error on the ${name} type - ${expected}.`,
      );
    }
  };
