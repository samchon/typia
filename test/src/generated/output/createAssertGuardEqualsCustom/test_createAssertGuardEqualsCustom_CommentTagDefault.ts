import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardEqualsCustom_CommentTagDefault =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): asserts input is CommentTagDefault => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is CommentTagDefault => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "boolean" === typeof input.boolean &&
          "number" === typeof input.number &&
          Number.isFinite(input.number) &&
          "string" === typeof input.string &&
          "string" === typeof input.text &&
          ("string" === typeof input.boolean_and_number_and_string ||
            ("number" === typeof input.boolean_and_number_and_string &&
              Number.isFinite(input.boolean_and_number_and_string)) ||
            "boolean" === typeof input.boolean_and_number_and_string) &&
          ("string" === typeof input.union_but_boolean ||
            ("number" === typeof input.union_but_boolean &&
              Number.isFinite(input.union_but_boolean)) ||
            "boolean" === typeof input.union_but_boolean) &&
          ("string" === typeof input.union_but_number ||
            ("number" === typeof input.union_but_number &&
              Number.isFinite(input.union_but_number)) ||
            "boolean" === typeof input.union_but_number) &&
          ("string" === typeof input.union_but_string ||
            ("number" === typeof input.union_but_string &&
              Number.isFinite(input.union_but_string)) ||
            "boolean" === typeof input.union_but_string) &&
          "number" === typeof input.vulnerable_range &&
          3 <= input.vulnerable_range &&
          input.vulnerable_range <= 5 &&
          null !== input.boolean_and_number_and_template &&
          undefined !== input.boolean_and_number_and_template &&
          (("number" === typeof input.boolean_and_number_and_template &&
            Number.isFinite(input.boolean_and_number_and_template)) ||
            "boolean" === typeof input.boolean_and_number_and_template ||
            ("string" === typeof input.boolean_and_number_and_template &&
              RegExp(/^prefix_(.*)/).test(
                input.boolean_and_number_and_template,
              ))) &&
          (10 === Object.keys(input).length ||
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
                  "vulnerable_range",
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
        ): input is CommentTagDefault => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          const $join = (typia.createAssertGuardEquals as any).join;
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
                  expected: "boolean",
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
                  expected: "number",
                  value: input.number,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".string",
                  expected: "string",
                  value: input.string,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.text ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".text",
                  expected: "string",
                  value: input.text,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.boolean_and_number_and_string ||
              ("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
              "boolean" === typeof input.boolean_and_number_and_string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean_and_number_and_string",
                  expected: "(boolean | number | string)",
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
                  expected: "(boolean | number | string)",
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
                  expected: "(boolean | number | string)",
                  value: input.union_but_number,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.union_but_string ||
              ("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
              "boolean" === typeof input.union_but_string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".union_but_string",
                  expected: "(boolean | number | string)",
                  value: input.union_but_string,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.vulnerable_range &&
              (3 <= input.vulnerable_range ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".vulnerable_range",
                    expected: "number & Minimum<3>",
                    value: input.vulnerable_range,
                  },
                  errorFactory,
                )) &&
              (input.vulnerable_range <= 5 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".vulnerable_range",
                    expected: "number & Maximum<5>",
                    value: input.vulnerable_range,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".vulnerable_range",
                  expected: "(number & Minimum<3> & Maximum<5>)",
                  value: input.vulnerable_range,
                },
                errorFactory,
              )) &&
            (null !== input.boolean_and_number_and_template ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean_and_number_and_template",
                  expected: "(`prefix_${string}` | boolean | number)",
                  value: input.boolean_and_number_and_template,
                },
                errorFactory,
              )) &&
            (undefined !== input.boolean_and_number_and_template ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean_and_number_and_template",
                  expected: "(`prefix_${string}` | boolean | number)",
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
                  expected: "(`prefix_${string}` | boolean | number)",
                  value: input.boolean_and_number_and_template,
                },
                errorFactory,
              )) &&
            (10 === Object.keys(input).length ||
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
                    "vulnerable_range",
                    "boolean_and_number_and_template",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "CommentTagDefault",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "CommentTagDefault",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );
