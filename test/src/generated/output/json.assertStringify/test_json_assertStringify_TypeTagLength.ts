import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_assertStringify_TypeTagLength =
  _test_json_assertStringify(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): TypeTagLength => {
        const $guard = (typia.json.assertStringify as any).guard(errorFactory);
        const __is = (input: any): input is TypeTagLength => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 <= input.fixed.length &&
            input.fixed.length <= 5 &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            input.maximum.length <= 7 &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            input.minimum_and_maximum.length <= 7 &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            input.equal.length <= 19;
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagLength => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<TypeTagLength.Type>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TypeTagLength.Type",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TypeTagLength.Type",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<TypeTagLength.Type>",
                value: input.value,
              });
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.fixed &&
                (5 <= input.fixed.length ||
                  $guard(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MinLength<5>",
                    value: input.fixed,
                  })) &&
                (input.fixed.length <= 5 ||
                  $guard(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MaxLength<5>",
                    value: input.fixed,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".fixed",
                  expected: "(string & MinLength<5> & MaxLength<5>)",
                  value: input.fixed,
                })) &&
              (("string" === typeof input.minimum &&
                (3 <= input.minimum.length ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "string & MinLength<3>",
                    value: input.minimum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "(string & MinLength<3>)",
                  value: input.minimum,
                })) &&
              (("string" === typeof input.maximum &&
                (input.maximum.length <= 7 ||
                  $guard(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "string & MaxLength<7>",
                    value: input.maximum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "(string & MaxLength<7>)",
                  value: input.maximum,
                })) &&
              (("string" === typeof input.minimum_and_maximum &&
                (3 <= input.minimum_and_maximum.length ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MinLength<3>",
                    value: input.minimum_and_maximum,
                  })) &&
                (input.minimum_and_maximum.length <= 7 ||
                  $guard(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MaxLength<7>",
                    value: input.minimum_and_maximum,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".minimum_and_maximum",
                  expected: "(string & MinLength<3> & MaxLength<7>)",
                  value: input.minimum_and_maximum,
                })) &&
              (("string" === typeof input.equal &&
                (10 <= input.equal.length ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MinLength<10>",
                    value: input.equal,
                  })) &&
                (input.equal.length <= 19 ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MaxLength<19>",
                    value: input.equal,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected: "(string & MinLength<10> & MaxLength<19>)",
                  value: input.equal,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagLength",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagLength",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: TypeTagLength): string => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.fixed &&
          5 <= input.fixed.length &&
          input.fixed.length <= 5 &&
          "string" === typeof input.minimum &&
          3 <= input.minimum.length &&
          "string" === typeof input.maximum &&
          input.maximum.length <= 7 &&
          "string" === typeof input.minimum_and_maximum &&
          3 <= input.minimum_and_maximum.length &&
          input.minimum_and_maximum.length <= 7 &&
          "string" === typeof input.equal &&
          10 <= input.equal.length &&
          input.equal.length <= 19;
        const $string = (typia.json.assertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map(
              (elem: any) =>
                `{"fixed":${$string((elem as any).fixed)},"minimum":${$string(
                  (elem as any).minimum,
                )},"maximum":${$string(
                  (elem as any).maximum,
                )},"minimum_and_maximum":${$string(
                  (elem as any).minimum_and_maximum,
                )},"equal":${$string((elem as any).equal)}}`,
            )
            .join(",")}]`}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
