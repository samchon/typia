import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_misc_validatePrune_TypeTagLength = _test_misc_validatePrune(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
  ((input: any): typia.IValidation<TypeTagLength> => {
    const validate = (input: any): typia.IValidation<TypeTagLength> => {
      const errors = [] as any[];
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
      if (false === __is(input)) {
        const $report = require("typia/lib/functional/$report").$report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TypeTagLength => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ((Array.isArray(input.value) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<TypeTagLength.Type>",
                  value: input.value,
                })) &&
                input.value
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagLength.Type",
                          value: elem,
                        })) &&
                        $vo1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TypeTagLength.Type",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
                $report(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<TypeTagLength.Type>",
                  value: input.value,
                }),
            ].every((flag: boolean) => flag);
          const $vo1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              ("string" === typeof input.fixed &&
                (5 <= input.fixed.length ||
                  $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MinLength<5>",
                    value: input.fixed,
                  })) &&
                (input.fixed.length <= 5 ||
                  $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "string & MaxLength<5>",
                    value: input.fixed,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".fixed",
                  expected: "(string & MinLength<5> & MaxLength<5>)",
                  value: input.fixed,
                }),
              ("string" === typeof input.minimum &&
                (3 <= input.minimum.length ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "string & MinLength<3>",
                    value: input.minimum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".minimum",
                  expected: "(string & MinLength<3>)",
                  value: input.minimum,
                }),
              ("string" === typeof input.maximum &&
                (input.maximum.length <= 7 ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "string & MaxLength<7>",
                    value: input.maximum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".maximum",
                  expected: "(string & MaxLength<7>)",
                  value: input.maximum,
                }),
              ("string" === typeof input.minimum_and_maximum &&
                (3 <= input.minimum_and_maximum.length ||
                  $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MinLength<3>",
                    value: input.minimum_and_maximum,
                  })) &&
                (input.minimum_and_maximum.length <= 7 ||
                  $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "string & MaxLength<7>",
                    value: input.minimum_and_maximum,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".minimum_and_maximum",
                  expected: "(string & MinLength<3> & MaxLength<7>)",
                  value: input.minimum_and_maximum,
                }),
              ("string" === typeof input.equal &&
                (10 <= input.equal.length ||
                  $report(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MinLength<10>",
                    value: input.equal,
                  })) &&
                (input.equal.length <= 19 ||
                  $report(_exceptionable, {
                    path: _path + ".equal",
                    expected: "string & MaxLength<19>",
                    value: input.equal,
                  }))) ||
                $report(_exceptionable, {
                  path: _path + ".equal",
                  expected: "(string & MinLength<10> & MaxLength<19>)",
                  value: input.equal,
                }),
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagLength",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "TypeTagLength",
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
    const prune = (input: TypeTagLength): void => {
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
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po1(elem);
        });
      const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "fixed" === key ||
            "minimum" === key ||
            "maximum" === key ||
            "minimum_and_maximum" === key ||
            "equal" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  })(input),
);
