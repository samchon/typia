import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { TypeGuardError } from "typia";
export const test_json_createAssertStringify_CommentTagDefault =
  _test_json_assertStringify(TypeGuardError)(
    "CommentTagDefault",
  )<CommentTagDefault>(CommentTagDefault)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): CommentTagDefault => {
        const __is = (input: any): input is CommentTagDefault => {
          const $io0 = (input: any): boolean =>
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
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagDefault => {
            const $guard = (typia.json.createAssertStringify as any).guard;
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
                ));
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
        return input;
      };
      const stringify = (input: CommentTagDefault): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"boolean":${input.boolean},"number":${$number(
            input.number,
          )},"string":${$string(input.string)},"text":${$string(
            input.text,
          )},"boolean_and_number_and_string":${(() => {
            if ("string" === typeof input.boolean_and_number_and_string)
              return $string(input.boolean_and_number_and_string);
            if ("number" === typeof input.boolean_and_number_and_string)
              return $number(input.boolean_and_number_and_string);
            if ("boolean" === typeof input.boolean_and_number_and_string)
              return input.boolean_and_number_and_string;
            $throws({
              expected: "(boolean | number | string)",
              value: input.boolean_and_number_and_string,
            });
          })()},"union_but_boolean":${(() => {
            if ("string" === typeof input.union_but_boolean)
              return $string(input.union_but_boolean);
            if ("number" === typeof input.union_but_boolean)
              return $number(input.union_but_boolean);
            if ("boolean" === typeof input.union_but_boolean)
              return input.union_but_boolean;
            $throws({
              expected: "(boolean | number | string)",
              value: input.union_but_boolean,
            });
          })()},"union_but_number":${(() => {
            if ("string" === typeof input.union_but_number)
              return $string(input.union_but_number);
            if ("number" === typeof input.union_but_number)
              return $number(input.union_but_number);
            if ("boolean" === typeof input.union_but_number)
              return input.union_but_number;
            $throws({
              expected: "(boolean | number | string)",
              value: input.union_but_number,
            });
          })()},"union_but_string":${(() => {
            if ("string" === typeof input.union_but_string)
              return $string(input.union_but_string);
            if ("number" === typeof input.union_but_string)
              return $number(input.union_but_string);
            if ("boolean" === typeof input.union_but_string)
              return input.union_but_string;
            $throws({
              expected: "(boolean | number | string)",
              value: input.union_but_string,
            });
          })()},"vulnerable_range":${$number(
            input.vulnerable_range,
          )},"boolean_and_number_and_template":${(() => {
            if ("string" === typeof input.boolean_and_number_and_template)
              return $string(input.boolean_and_number_and_template);
            if ("number" === typeof input.boolean_and_number_and_template)
              return $number(input.boolean_and_number_and_template);
            if ("boolean" === typeof input.boolean_and_number_and_template)
              return input.boolean_and_number_and_template;
            $throws({
              expected: "(`prefix_${string}` | boolean | number)",
              value: input.boolean_and_number_and_template,
            });
          })()}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
