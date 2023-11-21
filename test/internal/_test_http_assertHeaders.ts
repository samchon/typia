import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { headers_to_string } from "../helpers/headers_to_string";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_assertHeaders =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.Resolved<T>,
  ) =>
  () => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.assertHeaders(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);

      try {
        decode(headers_to_string(elem));
      } catch (exp) {
        if (exp instanceof TypeGuardError)
          if (exp.path && expected.includes(exp.path) === true) continue;
          else
            console.log({
              expected,
              actual: exp.path,
            });
      }
      console.log({ elem, expected });
      throw new Error(
        `Bug on typia.http.assertHeaders(): failed to detect error on the ${name} type.`,
      );
    }
  };
