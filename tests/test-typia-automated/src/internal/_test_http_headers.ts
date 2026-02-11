import { TestStructure } from "@typia/template";
import typia from "typia";

import { headers_to_string } from "../utils/headers_to_string";
import { resolved_equal_to } from "../utils/resolved_equal_to";

export const _test_http_headers =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (
    decode: (
      input: Record<string, string | string[] | undefined>,
    ) => typia.Resolved<T>,
  ): void => {
    const data: T = factory.generate();
    const encoded: Record<string, string | string[] | undefined> =
      headers_to_string(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.headers(): failed to understand ${name} type.`,
      );
  };
