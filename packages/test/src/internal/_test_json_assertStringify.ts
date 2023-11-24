import { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_assertStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string) =>
  () => {
    const data: T = factory.generate();
    const optimized: string = stringify(data);

    if (predicate(data, optimized) === false) {
      throw new Error(
        `Bug on typia.json.assertStringify(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        stringify(elem);
      } catch (exp) {
        if (exp instanceof TypeGuardError)
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

function predicate<T>(data: any, optimized: string): boolean {
  // SPECIAL CASE, UNDEFINED
  if (
    optimized === undefined &&
    (data === undefined ||
      typeof data === "function" ||
      (data.toJSON && data.toJSON() === undefined))
  )
    return true;

  // DO COMPARE
  const parsed: T = JSON.parse(optimized);
  const expected: T = JSON.parse(JSON.stringify(data));

  return primitive_equal_to(parsed, expected);
}
