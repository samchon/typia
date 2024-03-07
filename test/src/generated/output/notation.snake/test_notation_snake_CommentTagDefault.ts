import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
export const test_notation_validateSnake_CommentTagDefault =
  _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
    CommentTagDefault,
  )<typia.SnakeCase<CommentTagDefault>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<CommentTagDefault>> => {
        const validate = (input: any): typia.IValidation<CommentTagDefault> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagDefault => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "boolean",
                      value: input.boolean,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "string",
                      value: input.string,
                    }),
                  "string" === typeof input.text ||
                    $report(_exceptionable, {
                      path: _path + ".text",
                      expected: "string",
                      value: input.text,
                    }),
                  "string" === typeof input.boolean_and_number_and_string ||
                    ("number" === typeof input.boolean_and_number_and_string &&
                      Number.isFinite(input.boolean_and_number_and_string)) ||
                    "boolean" === typeof input.boolean_and_number_and_string ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_string",
                      expected: "(boolean | number | string)",
                      value: input.boolean_and_number_and_string,
                    }),
                  "string" === typeof input.union_but_boolean ||
                    ("number" === typeof input.union_but_boolean &&
                      Number.isFinite(input.union_but_boolean)) ||
                    "boolean" === typeof input.union_but_boolean ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_boolean",
                      expected: "(boolean | number | string)",
                      value: input.union_but_boolean,
                    }),
                  "string" === typeof input.union_but_number ||
                    ("number" === typeof input.union_but_number &&
                      Number.isFinite(input.union_but_number)) ||
                    "boolean" === typeof input.union_but_number ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_number",
                      expected: "(boolean | number | string)",
                      value: input.union_but_number,
                    }),
                  "string" === typeof input.union_but_string ||
                    ("number" === typeof input.union_but_string &&
                      Number.isFinite(input.union_but_string)) ||
                    "boolean" === typeof input.union_but_string ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_string",
                      expected: "(boolean | number | string)",
                      value: input.union_but_string,
                    }),
                  ("number" === typeof input.vulnerable_range &&
                    (3 <= input.vulnerable_range ||
                      $report(_exceptionable, {
                        path: _path + ".vulnerable_range",
                        expected: "number & Minimum<3>",
                        value: input.vulnerable_range,
                      })) &&
                    (input.vulnerable_range <= 5 ||
                      $report(_exceptionable, {
                        path: _path + ".vulnerable_range",
                        expected: "number & Maximum<5>",
                        value: input.vulnerable_range,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".vulnerable_range",
                      expected: "(number & Minimum<3> & Maximum<5>)",
                      value: input.vulnerable_range,
                    }),
                  (null !== input.boolean_and_number_and_template ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_template",
                      expected: "(`prefix_${string}` | boolean | number)",
                      value: input.boolean_and_number_and_template,
                    })) &&
                    (undefined !== input.boolean_and_number_and_template ||
                      $report(_exceptionable, {
                        path: _path + ".boolean_and_number_and_template",
                        expected: "(`prefix_${string}` | boolean | number)",
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
                        expected: "(`prefix_${string}` | boolean | number)",
                        value: input.boolean_and_number_and_template,
                      })),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagDefault",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagDefault",
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
          input: CommentTagDefault,
        ): typia.SnakeCase<CommentTagDefault> => {
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
            vulnerable_range: input.vulnerable_range as any,
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
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<CommentTagDefault> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<CommentTagDefault> => {
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
        ): input is typia.SnakeCase<CommentTagDefault> => {
          const $guard = (typia.createAssert as any).guard;
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
    },
  });
