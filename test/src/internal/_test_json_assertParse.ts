import typia, { Primitive, TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";
import { _check_invalidate_json_value } from "./_check_invalidate_json_value";

export const _test_json_assertParse =
  (ErrorClass: Function) =>
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (parse: (input: string) => Primitive<T>) =>
  () => {
    const data: T = factory.generate();
    const string: string = JSON.stringify(data);
    const expected: Primitive<T> = JSON.parse(string);
    const parsed: Primitive<T> = parse(string);

    if (primitive_equal_to(expected, parsed) === false) {
      throw new Error(
        `Bug on typia.json.assertParse(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      if (_check_invalidate_json_value(elem)) continue;

      try {
        parse(JSON.stringify(elem));
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
        `Bug on typia.json.assertParse(): failed to detect error on the ${name} type.`,
      );
    }
  };
