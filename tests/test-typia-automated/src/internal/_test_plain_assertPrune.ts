import { isErrorClass } from "@typia/oracle/error-class";
import { preparePrune } from "@typia/oracle/prune";
import { TestStructure } from "@typia/template";
import typia, { TypeGuardError } from "typia";

export const _test_plain_assertPrune =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (prune: (input: T) => T): void => {
    const input: T = factory.generate();

    const check = preparePrune(
      input,
      `Bug on typia.plain.isPrune(): failed to prune the ${name} type.`,
    );
    prune(input);
    check();

    // SPOIL
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        prune(elem);
      } catch (exp) {
        if (
          isErrorClass(exp, ErrorClass) &&
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
        `Bug on typia.plain.assertPrune(): failed to detect error on the ${name} type.`,
      );
    }
  };
