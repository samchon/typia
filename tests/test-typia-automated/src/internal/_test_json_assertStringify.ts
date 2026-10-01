import { isErrorClass } from "@typia/oracle/error-class";
import { prepareStringify } from "@typia/oracle/stringify";
import { TestStructure } from "@typia/template";
import typia, { TypeGuardError } from "typia";

export const _test_json_assertStringify =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string): void => {
    const data: T = factory.generate();
    const check = prepareStringify(
      data,
      `Bug on typia.json.assertStringify(): failed to understand the ${name} type.`,
    );
    check(stringify(data));

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        stringify(elem);
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
        `Bug on typia.json.assertStringify(): failed to detect error on the ${name} type.`,
      );
    }
  };
