import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_createQuery_ObjectHttpNullable = _test_http_query(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpNullable> => {
    const $params = (typia.http.createQuery as any).params;
    const $boolean = (typia.http.createQuery as any).boolean;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $number = (typia.http.createQuery as any).number;
    const $string = (typia.http.createQuery as any).string;
    const $array = (typia.http.createQuery as any).array;
    input = $params(input) as URLSearchParams;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
      constantBoolean: $boolean(input.get("constantBoolean")),
      constantBigint: $bigint(input.get("constantBigint")),
      constantNumber: $number(input.get("constantNumber")),
      constantString: $string(input.get("constantString")),
      nullableArray: $array(
        input.getAll("nullableArray").map((elem: any) => $number(elem)),
        null,
      ),
    };
    return output as any;
  },
);
