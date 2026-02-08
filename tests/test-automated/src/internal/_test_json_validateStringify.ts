import typia from "typia";

import { TestStructure } from "../utils/TestStructure";
import { primitive_equal_to } from "../utils/primitive_equal_to";

export const _test_json_validateStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => typia.IValidation<string>): void => {
    const input: T = factory.generate();
    const valid: typia.IValidation<string> = stringify(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.json.validateStringify(): failed to understand the ${name} type.`,
      );

    typia.assertEquals(valid);
    if (predicate(input, valid.data) === false) {
      throw new Error(
        `Bug on typia.json.validateStringify(): failed to understand the ${name} type.`,
      );
    }

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<string> = stringify(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.json.validateStringify(): failed to detect error on the ${name} type.`,
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
        `Bug on typia.json.validateStringify(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}

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
