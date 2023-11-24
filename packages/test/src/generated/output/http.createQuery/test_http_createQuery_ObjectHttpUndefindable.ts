import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createQuery_ObjectHttpUndefindable = _test_http_query(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpUndefindable> => {
    const $params = (typia.http.createQuery as any).params;
    const $boolean = (typia.http.createQuery as any).boolean;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $number = (typia.http.createQuery as any).number;
    const $string = (typia.http.createQuery as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      boolean: $boolean(input.get("boolean")) ?? undefined,
      bigint: $bigint(input.get("bigint")) ?? undefined,
      number: $number(input.get("number")) ?? undefined,
      string: $string(input.get("string")) ?? undefined,
      constantBoolean: $boolean(input.get("constantBoolean")) ?? undefined,
      constantBigint: $bigint(input.get("constantBigint")) ?? undefined,
      constantNumber: $number(input.get("constantNumber")) ?? undefined,
      constantString: $string(input.get("constantString")) ?? undefined,
    };
    return output as any;
  },
);
