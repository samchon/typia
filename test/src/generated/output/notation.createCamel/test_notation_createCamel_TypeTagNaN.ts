import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagNaN } from "../../../structures/TypeTagNaN";

export const test_notation_createValidateCamel_TypeTagNaN =
  _test_notation_validateGeneral("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)<
    typia.CamelCase<TypeTagNaN>
  >({
    convert: (input: any): typia.IValidation<typia.CamelCase<TypeTagNaN>> => {
      const validate = (input: any): typia.IValidation<TypeTagNaN> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagNaN => {
          return (
            "object" === typeof input &&
            null !== input &&
            "number" === typeof (input as any).value &&
            Number.isFinite((input as any).value) &&
            "number" === typeof (input as any).ranged &&
            0 <= (input as any).ranged &&
            (input as any).ranged <= 100 &&
            "number" === typeof (input as any).minimum &&
            Number.isFinite((input as any).minimum) &&
            0 <= (input as any).minimum &&
            "number" === typeof (input as any).maximum &&
            Number.isFinite((input as any).maximum) &&
            (input as any).maximum <= 100 &&
            "number" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % 3 === 0 &&
            "number" === typeof (input as any).typed &&
            Math.floor((input as any).typed) === (input as any).typed &&
            -2147483648 <= (input as any).typed &&
            (input as any).typed <= 2147483647
          );
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagNaN => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.value &&
                  Number.isFinite(input.value)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "number",
                    value: input.value,
                  }),
                ("number" === typeof input.ranged &&
                  (0 <= input.ranged ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "number & Minimum<0>",
                      value: input.ranged,
                    })) &&
                  (input.ranged <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".ranged",
                      expected: "number & Maximum<100>",
                      value: input.ranged,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".ranged",
                    expected: "(number & Minimum<0> & Maximum<100>)",
                    value: input.ranged,
                  }),
                ("number" === typeof input.minimum &&
                  (Number.isFinite(input.minimum) ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "number",
                      value: input.minimum,
                    })) &&
                  (0 <= input.minimum ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "number & Minimum<0>",
                      value: input.minimum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(number & Minimum<0>)",
                    value: input.minimum,
                  }),
                ("number" === typeof input.maximum &&
                  (Number.isFinite(input.maximum) ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "number",
                      value: input.maximum,
                    })) &&
                  (input.maximum <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "number & Maximum<100>",
                      value: input.maximum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(number & Maximum<100>)",
                    value: input.maximum,
                  }),
                ("number" === typeof input.multipleOf &&
                  (input.multipleOf % 3 === 0 ||
                    $report(_exceptionable, {
                      path: _path + ".multipleOf",
                      expected: "number & MultipleOf<3>",
                      value: input.multipleOf,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".multipleOf",
                    expected: "(number & MultipleOf<3>)",
                    value: input.multipleOf,
                  }),
                ("number" === typeof input.typed &&
                  ((Math.floor(input.typed) === input.typed &&
                    -2147483648 <= input.typed &&
                    input.typed <= 2147483647) ||
                    $report(_exceptionable, {
                      path: _path + ".typed",
                      expected: 'number & Type<"int32">',
                      value: input.typed,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".typed",
                    expected: '(number & Type<"int32">)',
                    value: input.typed,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagNaN",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagNaN",
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
      const general = (input: TypeTagNaN): typia.CamelCase<TypeTagNaN> => {
        const $co0 = (input: any): any => ({
          value: input.value as any,
          ranged: input.ranged as any,
          minimum: input.minimum as any,
          maximum: input.maximum as any,
          multipleOf: input.multipleOf as any,
          typed: input.typed as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.CamelCase<TypeTagNaN> => {
      const __is = (input: any): input is typia.CamelCase<TypeTagNaN> => {
        return (
          "object" === typeof input &&
          null !== input &&
          "number" === typeof (input as any).value &&
          Number.isFinite((input as any).value) &&
          "number" === typeof (input as any).ranged &&
          0 <= (input as any).ranged &&
          (input as any).ranged <= 100 &&
          "number" === typeof (input as any).minimum &&
          Number.isFinite((input as any).minimum) &&
          0 <= (input as any).minimum &&
          "number" === typeof (input as any).maximum &&
          Number.isFinite((input as any).maximum) &&
          (input as any).maximum <= 100 &&
          "number" === typeof (input as any).multipleOf &&
          (input as any).multipleOf % 3 === 0 &&
          "number" === typeof (input as any).typed &&
          Math.floor((input as any).typed) === (input as any).typed &&
          -2147483648 <= (input as any).typed &&
          (input as any).typed <= 2147483647
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<TypeTagNaN> => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.value &&
              Number.isFinite(input.value)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value,
              })) &&
            (("number" === typeof input.ranged &&
              (0 <= input.ranged ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "number & Minimum<0>",
                  value: input.ranged,
                })) &&
              (input.ranged <= 100 ||
                $guard(_exceptionable, {
                  path: _path + ".ranged",
                  expected: "number & Maximum<100>",
                  value: input.ranged,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "(number & Minimum<0> & Maximum<100>)",
                value: input.ranged,
              })) &&
            (("number" === typeof input.minimum &&
              (Number.isFinite(input.minimum) ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "number",
                  value: input.minimum,
                })) &&
              (0 <= input.minimum ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "number & Minimum<0>",
                  value: input.minimum,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "(number & Minimum<0>)",
                value: input.minimum,
              })) &&
            (("number" === typeof input.maximum &&
              (Number.isFinite(input.maximum) ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "number",
                  value: input.maximum,
                })) &&
              (input.maximum <= 100 ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "number & Maximum<100>",
                  value: input.maximum,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "(number & Maximum<100>)",
                value: input.maximum,
              })) &&
            (("number" === typeof input.multipleOf &&
              (input.multipleOf % 3 === 0 ||
                $guard(_exceptionable, {
                  path: _path + ".multipleOf",
                  expected: "number & MultipleOf<3>",
                  value: input.multipleOf,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "(number & MultipleOf<3>)",
                value: input.multipleOf,
              })) &&
            (("number" === typeof input.typed &&
              ((Math.floor(input.typed) === input.typed &&
                -2147483648 <= input.typed &&
                input.typed <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".typed",
                  expected: 'number & Type<"int32">',
                  value: input.typed,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".typed",
                expected: '(number & Type<"int32">)',
                value: input.typed,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagNaN",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagNaN",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
