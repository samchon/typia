import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_notation_validatePascal_ArrayRepeatedOptional =
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.PascalCase<ArrayRepeatedOptional>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.PascalCase<ArrayRepeatedOptional>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ArrayRepeatedOptional> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayRepeatedOptional => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  (undefined === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              (undefined === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
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
            ): input is ArrayRepeatedOptional => {
              const $va0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input
                  .map(
                    (elem: any, _index1: number) =>
                      (null !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                          value: elem,
                        })) &&
                      (undefined === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ((Array.isArray(elem) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                            value: elem,
                          })) &&
                          ($va0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedOptional>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag);
              return (
                (null !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                    value: input,
                  })) &&
                (undefined === input ||
                  "string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                      value: input,
                    })) &&
                    ($va0(input, _path + "", true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path + "",
                        expected: "Array<ArrayRepeatedOptional>",
                        value: input,
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                    value: input,
                  }))
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
          input: ArrayRepeatedOptional,
        ): typia.PascalCase<ArrayRepeatedOptional> => {
          const $ia0 = (input: any): any =>
            input.every(
              (elem: any) =>
                null !== elem &&
                (undefined === elem ||
                  "string" === typeof elem ||
                  "number" === typeof elem ||
                  (Array.isArray(elem) && ($ia0(elem) || false))),
            );
          const $cp0 = (input: any) => $ca0(input);
          const $ca0 = (input: any): any =>
            input.map((elem: any) =>
              Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
          return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.PascalCase<ArrayRepeatedOptional> => {
      const __is = (
        input: any,
      ): input is typia.PascalCase<ArrayRepeatedOptional> => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              null !== elem &&
              (undefined === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        return (
          null !== input &&
          (undefined === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            (Array.isArray(input) && ($ia0(input) || false)))
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.PascalCase<ArrayRepeatedOptional> => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          const $aa0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            input.every(
              (elem: any, _index1: number) =>
                (null !== elem ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                    value: elem,
                  })) &&
                (undefined === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  ((Array.isArray(elem) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                      value: elem,
                    })) &&
                    ($aa0(
                      elem,
                      _path + "[" + _index1 + "]",
                      true && _exceptionable,
                    ) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...>",
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                    value: elem,
                  })),
            );
          return (
            (null !== input ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                value: input,
              })) &&
            (undefined === input ||
              "string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                  value: input,
                })) &&
                ($aa0(input, _path + "", true && _exceptionable) ||
                  $guard(_exceptionable, {
                    path: _path + "",
                    expected:
                      "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...>",
                    value: input,
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | undefined)[] | ...> | number | string | undefined)",
                value: input,
              }))
          );
        })(input, "$input", true);
      return input;
    },
  });
