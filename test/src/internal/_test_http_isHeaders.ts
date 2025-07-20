import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { headers_to_string } from "../helpers/headers_to_string";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_isHeaders =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.Resolved<T> | null,
  ): void => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);
    const decoded: typia.Resolved<T> | null = decode(encoded);

    const equal: boolean =
      decoded !== null && resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.isHeaders(): failed to understand ${name} type.`,
      );

    for (const spoil of factory.SPOILERS ?? []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (decode(headers_to_string(elem)) !== null)
        throw new Error(
          `Bug on typia.http.isHeaders(): failed to detect error on the ${name} type.`,
        );
    }
  };
