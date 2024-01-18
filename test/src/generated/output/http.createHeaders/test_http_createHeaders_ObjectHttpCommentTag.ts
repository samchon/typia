import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createHeaders_ObjectHttpCommentTag = _test_http_headers(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpCommentTag> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      int: $HeadersReader.number(input.int),
      uint64: $HeadersReader.bigint(input.uint64),
      uuid: input.uuid,
      items: Array.isArray(input.items)
        ? input.items.map($HeadersReader.number)
        : input.items?.split(", ")?.map($HeadersReader.number) ?? [],
    };
    return output as any;
  },
);
