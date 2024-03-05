import { TestStructure } from "../helpers/TestStructure";

export const _test_functional_isReturn =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (validate: (p: (input: T) => T) => (input: T) => T | null) =>
  () => {
    const task = (callback: (input: T) => [T, T]) => {
      const [x, y]: [T, T] = callback(factory.generate());
      if (validate(() => y)(x) === null)
        throw new Error(
          `Bug on typia.functional.isReturn(): failed to understand the ${name} type.`,
        );
      for (const spoil of factory.SPOILERS ?? []) {
        const elem: T = factory.generate();
        spoil(elem);

        const [x, y]: [T, T] = callback(elem);
        if (validate(() => y)(x) !== null)
          throw new Error(
            `Bug on typia.functional.isReturn(): failed to detect error on the ${name} type.`,
          );
      }
    };
    // task((input) => [input, factory.generate()]);
    task((input) => [factory.generate(), input]);
  };
