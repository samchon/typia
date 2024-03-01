import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertHeaders } from "../../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_http_createAssertHeaders_ObjectHttpConstant =
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    (
      input: Record<string, string | string[] | undefined>,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.Resolved<ObjectHttpConstant> => {
      const decode = (
        input: Record<string, string | string[] | undefined>,
      ): typia.Resolved<ObjectHttpConstant> => {
        const $boolean = (typia.http.createAssertHeaders as any).boolean;
        const $bigint = (typia.http.createAssertHeaders as any).bigint;
        const $number = (typia.http.createAssertHeaders as any).number;
        const output = {
          boolean: $boolean(input.boolean),
          bigint: $bigint(input.bigint),
          number: $number(input.number),
          string: input.string,
          template: input.template,
        };
        return output as any;
      };
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectHttpConstant => {
        const $guard = (typia.http.createAssertHeaders as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is ObjectHttpConstant => {
          const $io0 = (input: any): boolean =>
            false === input.boolean &&
            (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
            (2 === input.number || 98 === input.number) &&
            ("something" === input.string ||
              "three" === input.string ||
              "ninety-seven" === input.string) &&
            "string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpConstant => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (false === input.boolean ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "false",
                  value: input.boolean,
                })) &&
              (BigInt(1) === input.bigint ||
                BigInt(99) === input.bigint ||
                $guard(_exceptionable, {
                  path: _path + ".bigint",
                  expected: "(1 | 99)",
                  value: input.bigint,
                })) &&
              (2 === input.number ||
                98 === input.number ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "(2 | 98)",
                  value: input.number,
                })) &&
              ("something" === input.string ||
                "three" === input.string ||
                "ninety-seven" === input.string ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: '("ninety-seven" | "something" | "three")',
                  value: input.string,
                })) &&
              (("string" === typeof input.template &&
                RegExp(/^abcd_(.*)/).test(input.template)) ||
                $guard(_exceptionable, {
                  path: _path + ".template",
                  expected: "`abcd_${string}`",
                  value: input.template,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectHttpConstant",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpConstant",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
  );
