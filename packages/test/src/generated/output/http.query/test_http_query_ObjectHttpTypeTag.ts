import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_query_ObjectHttpTypeTag = _test_http_query(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((input: string | URLSearchParams): typia.Resolved<ObjectHttpTypeTag> => {
    const $params = (typia.http.query as any).params;
    const $number = (typia.http.query as any).number;
    const $bigint = (typia.http.query as any).bigint;
    const $string = (typia.http.query as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      int32: $number(input.get("int32")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      range: input.getAll("range").map((elem: any) => $number(elem)),
      length: input.getAll("length").map((elem: any) => $string(elem)),
    };
    return output as any;
  })(input),
);
