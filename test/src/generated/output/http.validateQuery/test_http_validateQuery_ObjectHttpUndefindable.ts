import typia from "typia";

import { _test_http_validateQuery } from "../../../internal/_test_http_validateQuery";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_http_validateQuery_ObjectHttpUndefindable =
  _test_http_validateQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) =>
    ((
      input: string | URLSearchParams,
    ): typia.IValidation<typia.Resolved<ObjectHttpUndefindable>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ObjectHttpUndefindable> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpUndefindable => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  }),
                undefined === input.bigint ||
                  "bigint" === typeof input.bigint ||
                  $report(_exceptionable, {
                    path: _path + ".bigint",
                    expected: "(bigint | undefined)",
                    value: input.bigint,
                  }),
                undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  }),
                undefined === input.string ||
                  "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  }),
                undefined === input.constantBoolean ||
                  true === input.constantBoolean ||
                  $report(_exceptionable, {
                    path: _path + ".constantBoolean",
                    expected: "(true | undefined)",
                    value: input.constantBoolean,
                  }),
                undefined === input.constantBigint ||
                  BigInt(1) === input.constantBigint ||
                  BigInt(2) === input.constantBigint ||
                  BigInt(3) === input.constantBigint ||
                  $report(_exceptionable, {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantBigint,
                  }),
                undefined === input.constantNumber ||
                  3 === input.constantNumber ||
                  2 === input.constantNumber ||
                  1 === input.constantNumber ||
                  $report(_exceptionable, {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantNumber,
                  }),
                undefined === input.constantString ||
                  "three" === input.constantString ||
                  "two" === input.constantString ||
                  "one" === input.constantString ||
                  $report(_exceptionable, {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | undefined)',
                    value: input.constantString,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpUndefindable",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpUndefindable",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const query = (
        input: string | URLSearchParams,
      ): typia.Resolved<ObjectHttpUndefindable> => {
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
      const output = query(input);
      return validate(output) as any;
    })(input),
  );
