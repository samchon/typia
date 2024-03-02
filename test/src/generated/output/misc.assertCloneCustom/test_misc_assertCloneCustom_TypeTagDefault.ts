import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_misc_assertCloneCustom_TypeTagDefault =
  _test_misc_assertClone(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.Resolved<TypeTagDefault> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TypeTagDefault => {
        const __is = (input: any): input is TypeTagDefault => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            "string" === typeof input.text &&
            (("number" === typeof input.boolean_and_number_and_string &&
              Number.isFinite(input.boolean_and_number_and_string)) ||
              "string" === typeof input.boolean_and_number_and_string ||
              "boolean" === typeof input.boolean_and_number_and_string) &&
            ("string" === typeof input.union_but_boolean ||
              ("number" === typeof input.union_but_boolean &&
                Number.isFinite(input.union_but_boolean)) ||
              "boolean" === typeof input.union_but_boolean) &&
            ("string" === typeof input.union_but_number ||
              ("number" === typeof input.union_but_number &&
                Number.isFinite(input.union_but_number)) ||
              "boolean" === typeof input.union_but_number) &&
            (("number" === typeof input.union_but_string &&
              Number.isFinite(input.union_but_string)) ||
              "string" === typeof input.union_but_string ||
              "boolean" === typeof input.union_but_string) &&
            null !== input.boolean_and_number_and_template &&
            undefined !== input.boolean_and_number_and_template &&
            (("number" === typeof input.boolean_and_number_and_template &&
              Number.isFinite(input.boolean_and_number_and_template)) ||
              "boolean" === typeof input.boolean_and_number_and_template ||
              ("string" === typeof input.boolean_and_number_and_template &&
                RegExp(/^prefix_(.*)/).test(
                  input.boolean_and_number_and_template,
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagDefault => {
            const $guard = (typia.misc.assertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean & Default<false>)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "(number & Default<1>)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: '(string & Default<"two">)',
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.text ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".text",
                    expected:
                      '(string & Default<"Very long text, can you understand it?">)',
                    value: input.text,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
                "string" === typeof input.boolean_and_number_and_string ||
                "boolean" === typeof input.boolean_and_number_and_string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_string",
                    expected:
                      '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                    value: input.boolean_and_number_and_string,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_boolean",
                    expected: "((boolean & Default<false>) | number | string)",
                    value: input.union_but_boolean,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_number",
                    expected: "((number & Default<1>) | boolean | string)",
                    value: input.union_but_number,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
                "string" === typeof input.union_but_string ||
                "boolean" === typeof input.union_but_string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_string",
                    expected: '((string & Default<"two">) | boolean | number)',
                    value: input.union_but_string,
                  },
                  errorFactory,
                )) &&
              (null !== input.boolean_and_number_and_template ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                )) &&
              (undefined !== input.boolean_and_number_and_template ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                  RegExp(/^prefix_(.*)/).test(
                    input.boolean_and_number_and_template,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagDefault",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagDefault",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (input: TypeTagDefault): typia.Resolved<TypeTagDefault> => {
        const $co0 = (input: any): any => ({
          boolean: input.boolean as any,
          number: input.number as any,
          string: input.string as any,
          text: input.text as any,
          boolean_and_number_and_string:
            input.boolean_and_number_and_string as any,
          union_but_boolean: input.union_but_boolean as any,
          union_but_number: input.union_but_number as any,
          union_but_string: input.union_but_string as any,
          boolean_and_number_and_template:
            input.boolean_and_number_and_template as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input, (p) => new CustomGuardError(p)),
  );
