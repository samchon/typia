import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_json_stringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string) =>
  () => {
    const data: T = factory.generate();
    const optimized: string = stringify(data);

    if (predicate(data, optimized) === false)
      throw new Error(
        `Bug on typia.json.stringify(): failed to understand the ${name} type.`,
      );
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
