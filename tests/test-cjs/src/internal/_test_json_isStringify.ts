import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_isStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string | null): void => {
    const data: T = factory.generate();
    const optimized: string | null = stringify(data);

    if (optimized === null || predicate(data, optimized) === false) {
      throw new Error(
        `Bug on typia.json.isStringify(): failed to understand the ${name} type.`,
      );
    }

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (stringify(elem) !== null)
        throw new Error(
          `Bug on typia.json.isStringify(): failed to detect error on the ${name} type.`,
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
