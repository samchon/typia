import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_headers_ObjectHttpCommentTag = _test_http_headers(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpCommentTag> => {
    const $number = (typia.http.headers as any).number;
    const $bigint = (typia.http.headers as any).bigint;
    const output = {
      int: $number(input.int),
      uint64: $bigint(input.uint64),
      uuid: input.uuid,
      items: Array.isArray(input.items)
        ? input.items.map($number)
        : input.items?.split(", ")?.map($number) ?? [],
    };
    return output as any;
  })(input),
);
