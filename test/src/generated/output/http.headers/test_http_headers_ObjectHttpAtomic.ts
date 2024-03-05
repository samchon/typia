import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_headers_ObjectHttpAtomic = _test_http_headers(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): import("typia").Resolved<ObjectHttpAtomic> => {
    const $boolean = (typia.http.headers as any).boolean;
    const $bigint = (typia.http.headers as any).bigint;
    const $number = (typia.http.headers as any).number;
    const output = {
      boolean: $boolean(input.boolean),
      bigint: $bigint(input.bigint),
      number: $number(input.number),
      string: input.string,
    };
    return output as any;
  })(input),
);
