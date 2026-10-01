import { prepareStringify } from "@typia/oracle/stringify";
import { TestStructure } from "@typia/template";

export const _test_json_isStringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string | null): void => {
    const data: T = factory.generate();
    const message: string = `Bug on typia.json.isStringify(): failed to understand the ${name} type.`;
    const check = prepareStringify(data, message);
    const optimized: string | null = stringify(data);

    if (optimized === null) throw new Error(message);
    check(optimized);

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (stringify(elem) !== null)
        throw new Error(
          `Bug on typia.json.isStringify(): failed to detect error on the ${name} type.`,
        );
    }
  };
