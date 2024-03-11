import typia from "typia";
import { _test_http_assertHeaders } from "../../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_http_assertHeadersCustom_ObjectHttpUndefindable =
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    ((
      input: Record<string, string | string[] | undefined>,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ObjectHttpUndefindable> => {
      const decode = (
        input: Record<string, string | string[] | undefined>,
      ): import("typia").Resolved<ObjectHttpUndefindable> => {
        const $boolean = (typia.http.assertHeaders as any).boolean;
        const $bigint = (typia.http.assertHeaders as any).bigint;
        const $number = (typia.http.assertHeaders as any).number;
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
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectHttpUndefindable => {
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
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber) &&
            (undefined === input.constantString ||
              "one" === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString);
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
            const $guard = (typia.http.assertHeaders as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (undefined === input.bigint ||
                "bigint" === typeof input.bigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".bigint",
                    expected: "(bigint | undefined)",
                    value: input.bigint,
                  },
                  errorFactory,
                )) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              (undefined === input.string ||
                "string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              (undefined === input.constantBoolean ||
                true === input.constantBoolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBoolean",
                    expected: "(true | undefined)",
                    value: input.constantBoolean,
                  },
                  errorFactory,
                )) &&
              (undefined === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantBigint,
                  },
                  errorFactory,
                )) &&
              (undefined === input.constantNumber ||
                1 === input.constantNumber ||
                2 === input.constantNumber ||
                3 === input.constantNumber ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantNumber,
                  },
                  errorFactory,
                )) &&
              (undefined === input.constantString ||
                "one" === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | undefined)',
                    value: input.constantString,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpUndefindable",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpUndefindable",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    })(input, (p) => new CustomGuardError(p)),
  );
