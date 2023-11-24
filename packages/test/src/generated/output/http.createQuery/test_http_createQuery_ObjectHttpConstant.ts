import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_createQuery_ObjectHttpConstant = _test_http_query(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpConstant> => {
    const $params = (typia.http.createQuery as any).params;
    const $boolean = (typia.http.createQuery as any).boolean;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $number = (typia.http.createQuery as any).number;
    const $string = (typia.http.createQuery as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
      template: $string(input.get("template")),
    };
    return output as any;
  },
);
