import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_isReturnAsync =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  async (
    validate: (p: (input: T) => Promise<T>) => (input: T) => Promise<T | null>,
  ): Promise<void> => {
    const task = async (callback: (input: T) => [T, T]) => {
      const [x, y]: [T, T] = callback(factory.generate());
      if ((await validate(async () => y)(x)) === null)
        throw new Error(
          `Bug on await typia.functional.isReturn(): failed to understand the ${name} type.`,
        );
      for (const spoil of factory.SPOILERS ?? []) {
        const elem: T = factory.generate();
        spoil(elem);

        const [x, y]: [T, T] = callback(elem);
        if ((await validate(async () => y)(x)) !== null)
          throw new Error(
            `Bug on await typia.functional.isReturn(): failed to detect error on the ${name} type.`,
          );
      }
    };
    // await task((input) => [input, factory.generate()]);
    await task((input) => [factory.generate(), input]);
  };
