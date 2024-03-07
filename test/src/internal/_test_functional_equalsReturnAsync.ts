import { Escaper } from "typia/lib/utils/Escaper";

import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_equalsReturnAsync =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (
    validate: (p: (input: T) => Promise<T>) => (input: T) => Promise<T | null>,
  ) =>
  async () => {
    const task = async (callback: (input: T) => [T, T]) => {
      {
        // SUCCESS
        const [x, y]: [T, T] = callback(factory.generate());
        if ((await validate(async () => y)(x)) === null)
          throw new Error(
            `Bug on await typia.functional.equalsReturn(): failed to understand the ${name} type.`,
          );
      }

      // SPIL
      const input: T = factory.generate();
      const expected: string[] = (() => {
        const accessors: string[] = [];
        spoil(accessors, "$input", input);
        return accessors;
      })();
      if (expected.length === 0) return;

      const [x, y] = callback(input);
      if ((await validate(async () => y)(x)) !== null)
        throw new Error(
          `Bug on await typia.functional.equalsReturn(): failed to detect surplus property on the ${name} type.`,
        );
    };
    // await task((input) => [input, factory.generate()]);
    await task((input) => [factory.generate(), input]);
  };

function spoil(accessors: string[], path: string, input: any): void {
  if (Array.isArray(input)) spoil_array(accessors, path, input);
  else if (
    typeof input === "object" &&
    input !== null &&
    typeof input.valueOf() === "object"
  )
    spoil_object(accessors, path, input);
}

function spoil_object(accessors: string[], path: string, obj: any): void {
  obj[KEY] = KEY;
  accessors.push(`${path}.${KEY}`);

  for (const [key, value] of Object.entries(obj))
    spoil(
      accessors,
      Escaper.variable(key)
        ? `${path}.${key}`
        : `${path}[${JSON.stringify(key)}]`,
      value,
    );
}

function spoil_array(accessors: string[], path: string, array: any[]): void {
  array.forEach((elem, i) => spoil(accessors, `${path}[${i}]`, elem));
}

const KEY = "non_regular_member";
