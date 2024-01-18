import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_notation_createValidateCamel_ArrayAtomicAlias =
  _test_notation_validateGeneral("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )<typia.CamelCase<ArrayAtomicAlias>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<ArrayAtomicAlias>> => {
      const validate = (input: any): typia.IValidation<ArrayAtomicAlias> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayAtomicAlias => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            Array.isArray(input[0]) &&
            input[0].every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input[1]) &&
            input[1].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every((elem: any) => "string" === typeof elem)
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
          ): input is ArrayAtomicAlias => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayAtomicAlias",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                    value: input,
                  })) &&
                [
                  ((Array.isArray(input[0]) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "ArrayAtomicAlias.Alias<boolean>",
                      value: input[0],
                    })) &&
                    input[0]
                      .map(
                        (elem: any, _index1: number) =>
                          "boolean" === typeof elem ||
                          $report(true, {
                            path: _path + "[0][" + _index1 + "]",
                            expected: "boolean",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[0]",
                      expected: "ArrayAtomicAlias.Alias<boolean>",
                      value: input[0],
                    }),
                  ((Array.isArray(input[1]) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "ArrayAtomicAlias.Alias<number>",
                      value: input[1],
                    })) &&
                    input[1]
                      .map(
                        (elem: any, _index2: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(true, {
                            path: _path + "[1][" + _index2 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[1]",
                      expected: "ArrayAtomicAlias.Alias<number>",
                      value: input[1],
                    }),
                  ((Array.isArray(input[2]) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "ArrayAtomicAlias.Alias<string>",
                      value: input[2],
                    })) &&
                    input[2]
                      .map(
                        (elem: any, _index3: number) =>
                          "string" === typeof elem ||
                          $report(true, {
                            path: _path + "[2][" + _index3 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "[2]",
                      expected: "ArrayAtomicAlias.Alias<string>",
                      value: input[2],
                    }),
                ].every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ArrayAtomicAlias",
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
        input: ArrayAtomicAlias,
      ): typia.CamelCase<ArrayAtomicAlias> => {
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $cp2 = (input: any) => input.map((elem: any) => elem as any);
        return Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every((elem: any) => "number" === typeof elem) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
          ? ([
              Array.isArray(input[0]) ? $cp0(input[0]) : (input[0] as any),
              Array.isArray(input[1]) ? $cp1(input[1]) : (input[1] as any),
              Array.isArray(input[2]) ? $cp2(input[2]) : (input[2] as any),
            ] as any)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.CamelCase<ArrayAtomicAlias> => {
      const __is = (input: any): input is typia.CamelCase<ArrayAtomicAlias> => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          Array.isArray(input[0]) &&
          input[0].every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input[1]) &&
          input[1].every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input[2]) &&
          input[2].every((elem: any) => "string" === typeof elem)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ArrayAtomicAlias> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayAtomicAlias",
                value: input,
              })) &&
              (input.length === 3 ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "[ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]",
                  value: input,
                })) &&
              (((Array.isArray(input[0]) ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "ArrayAtomicAlias.Alias<boolean>",
                  value: input[0],
                })) &&
                input[0].every(
                  (elem: any, _index1: number) =>
                    "boolean" === typeof elem ||
                    $guard(true, {
                      path: _path + "[0][" + _index1 + "]",
                      expected: "boolean",
                      value: elem,
                    }),
                )) ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "ArrayAtomicAlias.Alias<boolean>",
                  value: input[0],
                })) &&
              (((Array.isArray(input[1]) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "ArrayAtomicAlias.Alias<number>",
                  value: input[1],
                })) &&
                input[1].every(
                  (elem: any, _index2: number) =>
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(true, {
                      path: _path + "[1][" + _index2 + "]",
                      expected: "number",
                      value: elem,
                    }),
                )) ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "ArrayAtomicAlias.Alias<number>",
                  value: input[1],
                })) &&
              (((Array.isArray(input[2]) ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "ArrayAtomicAlias.Alias<string>",
                  value: input[2],
                })) &&
                input[2].every(
                  (elem: any, _index3: number) =>
                    "string" === typeof elem ||
                    $guard(true, {
                      path: _path + "[2][" + _index3 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )) ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "ArrayAtomicAlias.Alias<string>",
                  value: input[2],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayAtomicAlias",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
