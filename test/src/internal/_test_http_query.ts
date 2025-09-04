import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { create_query } from "../helpers/create_query";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_query =
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (decode: (input: URLSearchParams) => typia.Resolved<T>): void => {
    const data: T = factory.generate();
    const encoded: URLSearchParams = create_query(data);
    const decoded: typia.Resolved<T> = decode(encoded);

    const equal: boolean = resolved_equal_to(name)(data, decoded);
    if (equal === false)
      throw new Error(
        `Bug on typia.http.query(): failed to understand ${name} type.`,
      );
  };
