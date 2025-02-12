import { TestStructure } from "../helpers/TestStructure";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_compare_equals =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (equals: (a: T, b: T) => boolean) =>
  () => {
    const dataA: T = factory.generate();
    const dataB: T = factory.generate();
    const equaled = equals(dataA, dataB);
    const resolved = resolved_equal_to(name)(dataA, dataB);

    if (resolved !== equaled) {
      throw new Error(
        `typia.compare.equals(): failed to compare the ${name} type.`,
        { cause: { dataA, dataB, equaled, resolved } },
      );
    }
  };
