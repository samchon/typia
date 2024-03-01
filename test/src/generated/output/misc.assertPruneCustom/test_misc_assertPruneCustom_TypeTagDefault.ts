import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_misc_assertPruneCustom_TypeTagDefault =
  _test_misc_assertPrune(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): TypeTagDefault => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): TypeTagDefault => {
        const $guard = (typia.misc.assertPrune as any).guard(errorFactory);
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
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("boolean" === typeof input.boolean ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(boolean & Default<false>)",
                  value: input.boolean,
                })) &&
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(_exceptionable, {
                  path: _path + ".number",
                  expected: "(number & Default<1>)",
                  value: input.number,
                })) &&
              ("string" === typeof input.string ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: '(string & Default<"two">)',
                  value: input.string,
                })) &&
              ("string" === typeof input.text ||
                $guard(_exceptionable, {
                  path: _path + ".text",
                  expected:
                    '(string & Default<"Very long text, can you understand it?">)',
                  value: input.text,
                })) &&
              (("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
                "string" === typeof input.boolean_and_number_and_string ||
                "boolean" === typeof input.boolean_and_number_and_string ||
                $guard(_exceptionable, {
                  path: _path + ".boolean_and_number_and_string",
                  expected:
                    '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                  value: input.boolean_and_number_and_string,
                })) &&
              ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean ||
                $guard(_exceptionable, {
                  path: _path + ".union_but_boolean",
                  expected: "((boolean & Default<false>) | number | string)",
                  value: input.union_but_boolean,
                })) &&
              ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number ||
                $guard(_exceptionable, {
                  path: _path + ".union_but_number",
                  expected: "((number & Default<1>) | boolean | string)",
                  value: input.union_but_number,
                })) &&
              (("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
                "string" === typeof input.union_but_string ||
                "boolean" === typeof input.union_but_string ||
                $guard(_exceptionable, {
                  path: _path + ".union_but_string",
                  expected: '((string & Default<"two">) | boolean | number)',
                  value: input.union_but_string,
                })) &&
              (null !== input.boolean_and_number_and_template ||
                $guard(_exceptionable, {
                  path: _path + ".boolean_and_number_and_template",
                  expected:
                    "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                  value: input.boolean_and_number_and_template,
                })) &&
              (undefined !== input.boolean_and_number_and_template ||
                $guard(_exceptionable, {
                  path: _path + ".boolean_and_number_and_template",
                  expected:
                    "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                  value: input.boolean_and_number_and_template,
                })) &&
              (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                  RegExp(/^prefix_(.*)/).test(
                    input.boolean_and_number_and_template,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".boolean_and_number_and_template",
                  expected:
                    "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                  value: input.boolean_and_number_and_template,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagDefault",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagDefault",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: TypeTagDefault): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "boolean" === key ||
              "number" === key ||
              "string" === key ||
              "text" === key ||
              "boolean_and_number_and_string" === key ||
              "union_but_boolean" === key ||
              "union_but_number" === key ||
              "union_but_string" === key ||
              "boolean_and_number_and_template" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );
