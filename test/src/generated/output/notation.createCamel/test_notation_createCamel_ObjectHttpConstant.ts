import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_notation_createValidateCamel_ObjectHttpConstant =
  _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )<typia.CamelCase<ObjectHttpConstant>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<ObjectHttpConstant>> => {
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
          const $report = (typia.notations.createValidateCamel as any).report(
            errors,
          );
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
      const general = (
        input: ObjectHttpConstant,
      ): typia.CamelCase<ObjectHttpConstant> => {
        const $co0 = (input: any): any => ({
          boolean: input.boolean as any,
          bigint: input.bigint as any,
          number: input.number as any,
          string: input.string as any,
          template: input.template as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<ObjectHttpConstant> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectHttpConstant> => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectHttpConstant> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (false === input.boolean ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean",
                  expected: "false",
                  value: input.boolean,
                },
                errorFactory,
              )) &&
            (BigInt(1) === input.bigint ||
              BigInt(99) === input.bigint ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".bigint",
                  expected: "(1 | 99)",
                  value: input.bigint,
                },
                errorFactory,
              )) &&
            (2 === input.number ||
              98 === input.number ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".number",
                  expected: "(2 | 98)",
                  value: input.number,
                },
                errorFactory,
              )) &&
            ("ninety-seven" === input.string ||
              "something" === input.string ||
              "three" === input.string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".string",
                  expected: '("ninety-seven" | "something" | "three")',
                  value: input.string,
                },
                errorFactory,
              )) &&
            (("string" === typeof input.template &&
              RegExp(/^abcd_(.*)/).test(input.template)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".template",
                  expected: "`abcd_${string}`",
                  value: input.template,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectHttpConstant",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectHttpConstant",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
