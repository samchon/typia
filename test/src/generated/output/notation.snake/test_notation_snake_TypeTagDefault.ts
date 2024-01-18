import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_notation_validateSnake_TypeTagDefault =
  _test_notation_validateGeneral("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )<typia.SnakeCase<TypeTagDefault>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<TypeTagDefault>> => {
        const validate = (input: any): typia.IValidation<TypeTagDefault> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagDefault => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "(boolean & Default<false>)",
                      value: input.boolean,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "(number & Default<1>)",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: '(string & Default<"two">)',
                      value: input.string,
                    }),
                  "string" === typeof input.text ||
                    $report(_exceptionable, {
                      path: _path + ".text",
                      expected:
                        '(string & Default<"Very long text, can you understand it?">)',
                      value: input.text,
                    }),
                  ("number" === typeof input.boolean_and_number_and_string &&
                    Number.isFinite(input.boolean_and_number_and_string)) ||
                    "string" === typeof input.boolean_and_number_and_string ||
                    "boolean" === typeof input.boolean_and_number_and_string ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_string",
                      expected:
                        '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                      value: input.boolean_and_number_and_string,
                    }),
                  "string" === typeof input.union_but_boolean ||
                    ("number" === typeof input.union_but_boolean &&
                      Number.isFinite(input.union_but_boolean)) ||
                    "boolean" === typeof input.union_but_boolean ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_boolean",
                      expected:
                        "((boolean & Default<false>) | number | string)",
                      value: input.union_but_boolean,
                    }),
                  "string" === typeof input.union_but_number ||
                    ("number" === typeof input.union_but_number &&
                      Number.isFinite(input.union_but_number)) ||
                    "boolean" === typeof input.union_but_number ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_number",
                      expected: "((number & Default<1>) | boolean | string)",
                      value: input.union_but_number,
                    }),
                  ("number" === typeof input.union_but_string &&
                    Number.isFinite(input.union_but_string)) ||
                    "string" === typeof input.union_but_string ||
                    "boolean" === typeof input.union_but_string ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_string",
                      expected:
                        '((string & Default<"two">) | boolean | number)',
                      value: input.union_but_string,
                    }),
                  (null !== input.boolean_and_number_and_template ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_template",
                      expected:
                        "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                      value: input.boolean_and_number_and_template,
                    })) &&
                    (undefined !== input.boolean_and_number_and_template ||
                      $report(_exceptionable, {
                        path: _path + ".boolean_and_number_and_template",
                        expected:
                          "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                        value: input.boolean_and_number_and_template,
                      })) &&
                    (("number" ===
                      typeof input.boolean_and_number_and_template &&
                      Number.isFinite(input.boolean_and_number_and_template)) ||
                      "boolean" ===
                        typeof input.boolean_and_number_and_template ||
                      ("string" ===
                        typeof input.boolean_and_number_and_template &&
                        RegExp(/^prefix_(.*)/).test(
                          input.boolean_and_number_and_template,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".boolean_and_number_and_template",
                        expected:
                          "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                        value: input.boolean_and_number_and_template,
                      })),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagDefault",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagDefault",
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
          input: TypeTagDefault,
        ): typia.SnakeCase<TypeTagDefault> => {
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
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<TypeTagDefault> => {
      const __is = (input: any): input is typia.SnakeCase<TypeTagDefault> => {
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
        ): input is typia.SnakeCase<TypeTagDefault> => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
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
    },
  });
