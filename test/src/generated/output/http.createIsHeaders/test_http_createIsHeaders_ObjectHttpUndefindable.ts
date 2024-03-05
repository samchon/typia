import typia from "typia";

import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createIsHeaders_ObjectHttpUndefindable =
  _test_http_isHeaders("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(
    (
      input: Record<string, string | string[] | undefined>,
    ): import("typia").Resolved<ObjectHttpUndefindable> | null => {
      const is = (input: any): input is ObjectHttpUndefindable => {
        const $io0 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.bigint || "bigint" === typeof input.bigint) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.constantBoolean ||
            true === input.constantBoolean) &&
          (undefined === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint) &&
          (undefined === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber) &&
          (undefined === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString);
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      const decode = (
        input: Record<string, string | string[] | undefined>,
      ): import("typia").Resolved<ObjectHttpUndefindable> => {
        const $boolean = (typia.http.createIsHeaders as any).boolean;
        const $bigint = (typia.http.createIsHeaders as any).bigint;
        const $number = (typia.http.createIsHeaders as any).number;
        const output = {
          boolean: $boolean(input.boolean),
          bigint: $bigint(input.bigint),
          number: $number(input.number),
          string: input.string,
          constantBoolean: $boolean(input.constantboolean),
          constantBigint: $bigint(input.constantbigint),
          constantNumber: $number(input.constantnumber),
          constantString: input.constantstring,
        };
        return output as any;
      };
      const output = decode(input);
      if (!is(output)) return null;
      return output;
    },
  );
