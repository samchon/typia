import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { headers_to_string } from "../helpers/headers_to_string";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_validateHeaders =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.IValidation<typia.Resolved<T>>,
  ) =>
  () => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);

    const result: typia.IValidation<typia.Resolved<T>> = decode(encoded);
    if (result.success === false)
      throw new Error(
        `Bug on typia.http.validateHeaders(): failed to understand ${name} type.`,
      );

    const equal: boolean =
      result !== null && resolved_equal_to(name)(data, result.data);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.validateHeaders(): failed to understand ${name} type.`,
      );

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      const valid: typia.IValidation<typia.Resolved<T>> = decode(
        headers_to_string(elem),
      );
      if (valid.success === true)
        throw new Error(
          `Bug on typia.http.validateHeaders(): failed to detect error on the ${name} type.`,
        );

      typia.assert(valid);
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
        `Bug on typia.http.validateHeaders(): failed to detect error on the ${name} type.`,
      );
    }
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
