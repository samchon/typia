import { TestStructure } from "../helpers/TestStructure";

export const _test_is =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (is: (input: T) => boolean) =>
  () => {
    if (is(factory.generate()) === false)
      throw new Error(
        `Bug on typia.is(): failed to understand the ${name} type.`,
      );

    (factory.SPOILERS ?? []).forEach((spoil, i) => {
      const elem: T = factory.generate();
      spoil(elem);

      if (is(elem) === true)
        throw new Error(
          `Bug on typia.is(): failed to detect error on the ${name} (${i}) type.`,
        );
    });
  };
