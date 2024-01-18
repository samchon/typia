import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_headers_ObjectHttpTypeTag = _test_http_headers(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpTypeTag> => {
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      int32: $HeadersReader.number(input.int32),
      uint64: $HeadersReader.bigint(input.uint64),
      uuid: input.uuid,
      range: Array.isArray(input.range)
        ? input.range.map($HeadersReader.number)
        : input.range?.split(", ")?.map($HeadersReader.number) ?? [],
      length: Array.isArray(input.length)
        ? input.length.map($HeadersReader.string)
        : input.length?.split(", ")?.map($HeadersReader.string) ?? [],
    };
    return output as any;
  })(input),
);
