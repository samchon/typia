import typia from "typia";

import { _test_http_assertQuery } from "../../../internal/_test_http_assertQuery";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_assertQuery_ObjectHttpUndefindable =
  _test_http_assertQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) =>
    ((
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpUndefindable> => {
      const decode = (
        input: string | URLSearchParams,
      ): typia.Resolved<ObjectHttpUndefindable> => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $QueryReader =
          require("typia/lib/functional/$QueryReader").$QueryReader;
        input = $QueryReader.params(input) as URLSearchParams;
        const output = {
          boolean: $QueryReader.boolean(input.get("boolean")) ?? undefined,
          bigint: $QueryReader.bigint(input.get("bigint")) ?? undefined,
          number: $QueryReader.number(input.get("number")) ?? undefined,
          string: $QueryReader.string(input.get("string")) ?? undefined,
          constantBoolean:
            $QueryReader.boolean(input.get("constantBoolean")) ?? undefined,
          constantBigint:
            $QueryReader.bigint(input.get("constantBigint")) ?? undefined,
          constantNumber:
            $QueryReader.number(input.get("constantNumber")) ?? undefined,
          constantString:
            $QueryReader.string(input.get("constantString")) ?? undefined,
        };
        return output as any;
      };
      const assert = (input: any): ObjectHttpUndefindable => {
        const __is = (input: any): input is ObjectHttpUndefindable => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
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
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.http.assertQuery",
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
      };
      const output = decode(input);
      return assert(output) as any;
    })(input),
  );
