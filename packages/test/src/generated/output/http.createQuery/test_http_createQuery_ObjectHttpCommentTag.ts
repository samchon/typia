import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createQuery_ObjectHttpCommentTag = _test_http_query(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpCommentTag> => {
    const $params = (typia.http.createQuery as any).params;
    const $number = (typia.http.createQuery as any).number;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $string = (typia.http.createQuery as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      int: $number(input.get("int")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      items: input.getAll("items").map((elem: any) => $number(elem)),
    };
    return output as any;
  },
);
