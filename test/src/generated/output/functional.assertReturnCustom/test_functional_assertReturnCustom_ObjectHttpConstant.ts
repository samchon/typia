import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_functional_assertReturnCustom_ObjectHttpConstant =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpConstant")(
    ObjectHttpConstant,
  )(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      (input: ObjectHttpConstant): ObjectHttpConstant => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectHttpConstant => {
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
              const $guard = (typia.functional.assertReturn as any).guard;
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
                ("something" === input.string ||
                  "three" === input.string ||
                  "ninety-seven" === input.string ||
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
                      expected: "`[object Object]${string}`",
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
        })(p(input));
      },
  );
