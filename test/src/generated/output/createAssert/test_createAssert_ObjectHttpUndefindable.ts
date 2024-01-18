import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_createAssert_ObjectHttpUndefindable = _test_assert(
  "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input: any): ObjectHttpUndefindable => {
    const __is = (input: any): input is ObjectHttpUndefindable => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpUndefindable => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.boolean ||
            "boolean" === typeof input.boolean ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "(boolean | undefined)",
              value: input.boolean,
            })) &&
          (undefined === input.bigint ||
            "bigint" === typeof input.bigint ||
            $guard(_exceptionable, {
              path: _path + ".bigint",
              expected: "(bigint | undefined)",
              value: input.bigint,
            })) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "(number | undefined)",
              value: input.number,
            })) &&
          (undefined === input.string ||
            "string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "(string | undefined)",
              value: input.string,
            })) &&
          (undefined === input.constantBoolean ||
            true === input.constantBoolean ||
            $guard(_exceptionable, {
              path: _path + ".constantBoolean",
              expected: "(true | undefined)",
              value: input.constantBoolean,
            })) &&
          (undefined === input.constantBigint ||
            BigInt(1) === input.constantBigint ||
            BigInt(2) === input.constantBigint ||
            BigInt(3) === input.constantBigint ||
            $guard(_exceptionable, {
              path: _path + ".constantBigint",
              expected: "(1 | 2 | 3 | undefined)",
              value: input.constantBigint,
            })) &&
          (undefined === input.constantNumber ||
            3 === input.constantNumber ||
            2 === input.constantNumber ||
            1 === input.constantNumber ||
            $guard(_exceptionable, {
              path: _path + ".constantNumber",
              expected: "(1 | 2 | 3 | undefined)",
              value: input.constantNumber,
            })) &&
          (undefined === input.constantString ||
            "three" === input.constantString ||
            "two" === input.constantString ||
            "one" === input.constantString ||
            $guard(_exceptionable, {
              path: _path + ".constantString",
              expected: '("one" | "three" | "two" | undefined)',
              value: input.constantString,
            }));
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpUndefindable",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpUndefindable",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
);
