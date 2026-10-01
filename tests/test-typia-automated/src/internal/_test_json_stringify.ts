import { prepareStringify } from "@typia/oracle/stringify";
import { TestStructure } from "@typia/template";

export const _test_json_stringify =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (stringify: (input: T) => string): void => {
    const data: T = factory.generate();
    const check = prepareStringify(
      data,
      `Bug on typia.json.stringify(): failed to understand the ${name} type.`,
    );
    check(stringify(data));
  };
