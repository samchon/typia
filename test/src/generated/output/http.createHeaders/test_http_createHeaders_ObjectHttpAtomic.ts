import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createHeaders_ObjectHttpAtomic = _test_http_headers(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpAtomic> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      boolean: $HeadersReader.boolean(input.boolean),
      bigint: $HeadersReader.bigint(input.bigint),
      number: $HeadersReader.number(input.number),
      string: input.string,
    };
    return output as any;
  },
);
