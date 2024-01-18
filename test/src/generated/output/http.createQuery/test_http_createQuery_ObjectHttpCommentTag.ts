import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createQuery_ObjectHttpCommentTag = _test_http_query(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpCommentTag> => {
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      int: $QueryReader.number(input.get("int")),
      uint64: $QueryReader.bigint(input.get("uint64")),
      uuid: $QueryReader.string(input.get("uuid")),
      items: input
        .getAll("items")
        .map((elem: any) => $QueryReader.number(elem)),
    };
    return output as any;
  },
);
