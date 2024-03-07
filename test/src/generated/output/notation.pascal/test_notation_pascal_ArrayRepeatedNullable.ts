import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
export const test_notation_validatePascal_ArrayRepeatedNullable =
  _test_notation_validateGeneral(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)<
    typia.PascalCase<ArrayRepeatedNullable>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.PascalCase<ArrayRepeatedNullable>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ArrayRepeatedNullable> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayRepeatedNullable => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  undefined !== elem &&
                  (null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              undefined !== input &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validatePascal as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedNullable => {
              const $va0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input
                  .map(
                    (elem: any, _index1: number) =>
                      (undefined !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                          value: elem,
                        })) &&
                      (null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ((Array.isArray(elem) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedNullable> | null | number | string)",
                            value: elem,
                          })) &&
                          ($va0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedNullable>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag);
              return (
                (undefined !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedNullable> | null | number | string)",
                    value: input,
                  })) &&
                (null === input ||
                  "string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                      value: input,
                    })) &&
                    ($va0(input, _path + "", true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path + "",
                        expected: "Array<ArrayRepeatedNullable>",
                        value: input,
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedNullable> | null | number | string)",
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
          input: ArrayRepeatedNullable,
        ): typia.PascalCase<ArrayRepeatedNullable> => {
          const $ia0 = (input: any): any =>
            input.every(
              (elem: any) =>
                undefined !== elem &&
                (null === elem ||
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
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.PascalCase<ArrayRepeatedNullable> => {
      const __is = (
        input: any,
      ): input is typia.PascalCase<ArrayRepeatedNullable> => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        return (
          undefined !== input &&
          (null === input ||
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
        ): input is typia.PascalCase<ArrayRepeatedNullable> => {
          const $guard = (typia.createAssert as any).guard;
          const $aa0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            input.every(
              (elem: any, _index1: number) =>
                (undefined !== elem ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                (null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    ($aa0(
                      elem,
                      _path + "[" + _index1 + "]",
                      true && _exceptionable,
                    ) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>",
                          value: elem,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                      value: elem,
                    },
                    errorFactory,
                  )),
            );
          return (
            (undefined !== input ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                  value: input,
                },
                errorFactory,
              )) &&
            (null === input ||
              "string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                    value: input,
                  },
                  errorFactory,
                )) &&
                ($aa0(input, _path + "", true && _exceptionable) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + "",
                      expected:
                        "Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>",
                      value: input,
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected:
                    "(Array<string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | number | (string | ... 2 more ... | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | null | number | string)",
                  value: input,
                },
                errorFactory,
              ))
          );
        })(input, "$input", true);
      return input;
    },
  });
