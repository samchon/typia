import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_http_isQuery_ObjectHttpNullable = _test_http_isQuery(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
  ((
    input: string | URLSearchParams,
  ): typia.Resolved<ObjectHttpNullable> | null => {
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
          3 === input.constantNumber ||
          2 === input.constantNumber ||
          1 === input.constantNumber) &&
        (null === input.constantString ||
          "three" === input.constantString ||
          "two" === input.constantString ||
          "one" === input.constantString) &&
        (null === input.nullableArray ||
          (Array.isArray(input.nullableArray) &&
            input.nullableArray.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    const query = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpNullable> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $QueryReader =
        require("typia/lib/functional/$QueryReader").$QueryReader;
      input = $QueryReader.params(input) as URLSearchParams;
      const output = {
        boolean: $QueryReader.boolean(input.get("boolean")),
        bigint: $QueryReader.bigint(input.get("bigint")),
        number: $QueryReader.number(input.get("number")),
        string: $QueryReader.string(input.get("string")),
        constantBoolean: $QueryReader.boolean(input.get("constantBoolean")),
        constantBigint: $QueryReader.bigint(input.get("constantBigint")),
        constantNumber: $QueryReader.number(input.get("constantNumber")),
        constantString: $QueryReader.string(input.get("constantString")),
        nullableArray: $QueryReader.array(
          input
            .getAll("nullableArray")
            .map((elem: any) => $QueryReader.number(elem)),
          null,
        ),
      };
      return output as any;
    };
    const output = query(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
