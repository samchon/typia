import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_assertEquals_ObjectHttpConstant = _test_assertEquals(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  ((input: any): ObjectHttpConstant => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHttpConstant => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        false === input.boolean &&
        (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
        (2 === input.number || 98 === input.number) &&
        ("something" === input.string ||
          "three" === input.string ||
          "ninety-seven" === input.string) &&
        "string" === typeof input.template &&
        RegExp(/^abcd_(.*)/).test(input.template) &&
        (5 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["boolean", "bigint", "number", "string", "template"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpConstant => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
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
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["boolean", "bigint", "number", "string", "template"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
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
  })(input),
);
