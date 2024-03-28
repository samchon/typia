import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createIsQuery_ObjectHttpAtomic = _test_http_isQuery(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: string | URLSearchParams,
  ): import("typia").Resolved<ObjectHttpAtomic> | null => {
    const is = (input: any): input is ObjectHttpAtomic => {
      return (
        "object" === typeof input &&
        null !== input &&
        "boolean" === typeof (input as any).boolean &&
        "bigint" === typeof (input as any).bigint &&
        "number" === typeof (input as any).number &&
        Number.isFinite((input as any).number) &&
        "string" === typeof (input as any).string
      );
    };
    const decode = (
      input: string | URLSearchParams,
    ): import("typia").Resolved<ObjectHttpAtomic> => {
      const $params = (typia.http.createIsQuery as any).params;
      const $boolean = (typia.http.createIsQuery as any).boolean;
      const $bigint = (typia.http.createIsQuery as any).bigint;
      const $number = (typia.http.createIsQuery as any).number;
      const $string = (typia.http.createIsQuery as any).string;
      input = $params(input) as URLSearchParams;
      const output = {
        boolean: $boolean(input.get("boolean")),
        bigint: $bigint(input.get("bigint")),
        number: $number(input.get("number")),
        string: $string(input.get("string")),
      };
      return output as any;
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  },
);
