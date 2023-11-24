import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_createAssertGuardEquals_TypeTagDefault =
  _test_assertGuardEquals("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    (input: any): asserts input is TypeTagDefault => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is TypeTagDefault => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
              ))) &&
          (9 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "boolean",
                  "number",
                  "string",
                  "text",
                  "boolean_and_number_and_string",
                  "union_but_boolean",
                  "union_but_number",
                  "union_but_string",
                  "boolean_and_number_and_template",
                ].some((prop: any) => key === prop)
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
        ): input is TypeTagDefault => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
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
              })) &&
            (9 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "boolean",
                    "number",
                    "string",
                    "text",
                    "boolean_and_number_and_string",
                    "union_but_boolean",
                    "union_but_number",
                    "union_but_string",
                    "boolean_and_number_and_template",
                  ].some((prop: any) => key === prop)
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
    },
  );
