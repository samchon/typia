import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_notation_validateSnake_ArrayUnion =
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.SnakeCase<ArrayUnion>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ArrayUnion>> => {
        const validate = (input: any): typia.IValidation<ArrayUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayUnion => {
            const $ip0 = (input: any) => {
              const array = input;
              const top = input[0];
              if (0 === input.length) return true;
              const arrayPredicators = [
                [
                  (top: any[]): any => "boolean" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "boolean" === typeof elem),
                ] as const,
                [
                  (top: any[]): any =>
                    "number" === typeof top && Number.isFinite(top),
                  (entire: any[]): any =>
                    entire.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ] as const,
                [
                  (top: any[]): any => "string" === typeof top,
                  (entire: any[]): any =>
                    entire.every((elem: any) => "string" === typeof elem),
                ] as const,
              ];
              const passed = arrayPredicators.filter((pred: any) =>
                pred[0](top),
              );
              if (1 === passed.length) return passed[0]![1](array);
              else if (1 < passed.length)
                for (const pred of passed)
                  if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
              return false;
            };
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
              )
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayUnion => {
              const $vp0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
                  [
                    (top: any[]): any => "boolean" === typeof top,
                    (entire: any[]): any =>
                      entire
                        .map(
                          (elem: any, _index5: number) =>
                            "boolean" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index5 + "]",
                              expected: "boolean",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag),
                  ] as const,
                  [
                    (top: any[]): any =>
                      "number" === typeof top && Number.isFinite(top),
                    (entire: any[]): any =>
                      entire
                        .map(
                          (elem: any, _index6: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index6 + "]",
                              expected: "number",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag),
                  ] as const,
                  [
                    (top: any[]): any => "string" === typeof top,
                    (entire: any[]): any =>
                      entire
                        .map(
                          (elem: any, _index7: number) =>
                            "string" === typeof elem ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index7 + "]",
                              expected: "string",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag),
                  ] as const,
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                  pred[0](top),
                );
                if (1 === passed.length) return passed[0]![1](array);
                else if (1 < passed.length)
                  for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                      return pred[1](array);
                return $report(_exceptionable, {
                  path: _path,
                  expected: "(Array<boolean> | Array<number> | Array<string>)",
                  value: input,
                });
              };
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayUnion",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((Array.isArray(elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<boolean> | Array<number> | Array<string>)",
                            value: elem,
                          })) &&
                          ($vp0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "Array<boolean> | Array<number> | Array<string>",
                              value: elem,
                            }))) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Array<string>)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayUnion",
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
        const general = (input: ArrayUnion): typia.SnakeCase<ArrayUnion> => {
          const $throws = (typia.notations.validateSnake as any).throws;
          const $cp0 = (input: any) => {
            const array = input;
            const top = input[0];
            if (0 === input.length) return [];
            const arrayPredicators = [
              [
                (top: any[]): any => "boolean" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any),
              ] as const,
              [
                (top: any[]): any => "number" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any),
              ] as const,
              [
                (top: any[]): any => "string" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
              for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                  return pred[1](array);
            $throws({
              expected: "(Array<boolean> | Array<number> | Array<string>)",
              value: input,
            });
          };
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
          return Array.isArray(input) ? $cp1(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ArrayUnion> => {
      const __is = (input: any): input is typia.SnakeCase<ArrayUnion> => {
        const $ip0 = (input: any) => {
          const array = input;
          const top = input[0];
          if (0 === input.length) return true;
          const arrayPredicators = [
            [
              (top: any[]): any => "boolean" === typeof top,
              (entire: any[]): any =>
                entire.every((elem: any) => "boolean" === typeof elem),
            ] as const,
            [
              (top: any[]): any =>
                "number" === typeof top && Number.isFinite(top),
              (entire: any[]): any =>
                entire.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ),
            ] as const,
            [
              (top: any[]): any => "string" === typeof top,
              (entire: any[]): any =>
                entire.every((elem: any) => "string" === typeof elem),
            ] as const,
          ];
          const passed = arrayPredicators.filter((pred: any) => pred[0](top));
          if (1 === passed.length) return passed[0]![1](array);
          else if (1 < passed.length)
            for (const pred of passed)
              if (array.every((value: any) => true === pred[0](value)))
                return pred[1](array);
          return false;
        };
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArrayUnion> => {
          const $guard = (typia.createAssert as any).guard;
          const $ap0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ) => {
            const array = input;
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
              [
                (top: any[]): any => "boolean" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index5: number) =>
                      "boolean" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index5 + "]",
                        expected: "boolean",
                        value: elem,
                      }),
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  "number" === typeof top && Number.isFinite(top),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index6: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index6 + "]",
                        expected: "number",
                        value: elem,
                      }),
                  ),
              ] as const,
              [
                (top: any[]): any => "string" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index7: number) =>
                      "string" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index7 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  ),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
              for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                  return pred[1](array);
            return $guard(_exceptionable, {
              path: _path,
              expected: "(Array<boolean> | Array<number> | Array<string>)",
              value: input,
            });
          };
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((Array.isArray(elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(Array<boolean> | Array<number> | Array<string>)",
                      value: elem,
                    })) &&
                    ($ap0(
                      elem,
                      _path + "[" + _index1 + "]",
                      true && _exceptionable,
                    ) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "Array<boolean> | Array<number> | Array<string>",
                        value: elem,
                      }))) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<boolean> | Array<number> | Array<string>)",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
