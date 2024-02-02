import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_createIsFormData_ObjectHttpUndefindable =
  _test_http_isFormData("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input: FormData): typia.Resolved<ObjectHttpUndefindable> | null => {
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
      input: FormData,
    ): typia.Resolved<ObjectHttpUndefindable> => {
      const $boolean = (typia.http.createIsFormData as any).boolean;
      const $bigint = (typia.http.createIsFormData as any).bigint;
      const $number = (typia.http.createIsFormData as any).number;
      const $string = (typia.http.createIsFormData as any).string;
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
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  });
