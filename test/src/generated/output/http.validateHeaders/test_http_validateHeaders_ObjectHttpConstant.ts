import typia from "typia";
import { _test_http_validateHeaders } from "../../../internal/_test_http_validateHeaders";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";
export const test_http_validateHeaders_ObjectHttpConstant =
  _test_http_validateHeaders("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) =>
    ((
      input: Record<string, string | string[] | undefined>,
    ): typia.IValidation<typia.Resolved<ObjectHttpConstant>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpConstant> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpConstant => {
          const $io0 = (input: any): boolean =>
            false === input.boolean &&
            (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
            (2 === input.number || 98 === input.number) &&
            ("ninety-seven" === input.string ||
              "something" === input.string ||
              "three" === input.string) &&
            "string" === typeof input.template &&
            RegExp(/^abcd_(.*)/).test(input.template);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.http.validateHeaders as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpConstant => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                false === input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "false",
                    value: input.boolean,
                  }),
                BigInt(1) === input.bigint ||
                  BigInt(99) === input.bigint ||
                  $report(_exceptionable, {
                    path: _path + ".bigint",
                    expected: "(1 | 99)",
                    value: input.bigint,
                  }),
                2 === input.number ||
                  98 === input.number ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "(2 | 98)",
                    value: input.number,
                  }),
                "ninety-seven" === input.string ||
                  "something" === input.string ||
                  "three" === input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: '("ninety-seven" | "something" | "three")',
                    value: input.string,
                  }),
                ("string" === typeof input.template &&
                  RegExp(/^abcd_(.*)/).test(input.template)) ||
                  $report(_exceptionable, {
                    path: _path + ".template",
                    expected: "`abcd_${string}`",
                    value: input.template,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpConstant",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpConstant",
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
      const decode = (
        input: Record<string, string | string[] | undefined>,
      ): import("typia").Resolved<ObjectHttpConstant> => {
        const $boolean = (typia.http.validateHeaders as any).boolean;
        const $bigint = (typia.http.validateHeaders as any).bigint;
        const $number = (typia.http.validateHeaders as any).number;
        const output = {
          boolean: $boolean(input.boolean),
          bigint: $bigint(input.bigint),
          number: $number(input.number),
          string: input.string,
          template: input.template,
        };
        return output as any;
      };
      const output = decode(input);
      return validate(output) as any;
    })(input),
  );
