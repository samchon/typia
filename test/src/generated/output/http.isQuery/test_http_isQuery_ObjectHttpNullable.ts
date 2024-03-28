import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_isQuery_ObjectHttpNullable = _test_http_isQuery(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  ((
    input: string | URLSearchParams,
  ): import("typia").Resolved<ObjectHttpNullable> | null => {
    const is = (input: any): input is ObjectHttpNullable => {
      const $io0 = (input: any): boolean =>
        (null === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.bigint || "bigint" === typeof input.bigint) &&
        (null === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number) &&
            1 <= input.number)) &&
        (null === input.string || "string" === typeof input.string) &&
        (null === input.constantBoolean || true === input.constantBoolean) &&
        (null === input.constantBigint ||
          BigInt(1) === input.constantBigint ||
          BigInt(2) === input.constantBigint ||
          BigInt(3) === input.constantBigint) &&
        (null === input.constantNumber ||
          1 === input.constantNumber ||
          2 === input.constantNumber ||
          3 === input.constantNumber) &&
        (null === input.constantString ||
          "one" === input.constantString ||
          "three" === input.constantString ||
          "two" === input.constantString) &&
        (null === input.nullableArray ||
          (Array.isArray(input.nullableArray) &&
            input.nullableArray.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    const decode = (
      input: string | URLSearchParams,
    ): import("typia").Resolved<ObjectHttpNullable> => {
      const $params = (typia.http.isQuery as any).params;
      const $boolean = (typia.http.isQuery as any).boolean;
      const $bigint = (typia.http.isQuery as any).bigint;
      const $number = (typia.http.isQuery as any).number;
      const $string = (typia.http.isQuery as any).string;
      const $array = (typia.http.isQuery as any).array;
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
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
