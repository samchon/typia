import typia from "typia";
import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";
export const test_http_createQuery_ObjectHttpTypeTag = _test_http_query(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  (
    input: string | URLSearchParams,
  ): import("typia").Resolved<ObjectHttpTypeTag> => {
    const $params = (typia.http.createQuery as any).params;
    const $number = (typia.http.createQuery as any).number;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $string = (typia.http.createQuery as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      int32: $number(input.get("int32")),
      uint64: $bigint(input.get("uint64")),
      uuid: $string(input.get("uuid")),
      range: input.getAll("range").map((elem: any) => $number(elem)),
      length: input.getAll("length").map((elem: any) => $string(elem)),
    };
    return output as any;
  },
);
