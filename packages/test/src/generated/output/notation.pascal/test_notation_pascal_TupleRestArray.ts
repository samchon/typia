import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_notation_validatePascal_TupleRestArray =
  _test_notation_validateGeneral("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )<typia.PascalCase<TupleRestArray>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.PascalCase<TupleRestArray>> => {
        const validate = (input: any): typia.IValidation<TupleRestArray> => {
          const errors = [] as any[];
          const __is = (input: any): input is TupleRestArray => {
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every((elem: any) => "string" === typeof elem),
                )
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
            ): input is TupleRestArray => {
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleRestArray",
                    value: input,
                  })) &&
                  [
                    "boolean" === typeof input[0] ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      }),
                    ("number" === typeof input[1] &&
                      Number.isFinite(input[1])) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      }),
                  ].every((flag: boolean) => flag) &&
                  (((Array.isArray(input.slice(2)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "...Array<string>",
                      value: input.slice(2),
                    })) &&
                    input
                      .slice(2)
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(true, {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "Array<string>",
                              value: elem,
                            })) &&
                            elem
                              .map(
                                (elem: any, _index2: number) =>
                                  "string" === typeof elem ||
                                  $report(true, {
                                    path:
                                      _path +
                                      "[" +
                                      (2 + _index1) +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: "string",
                                    value: elem,
                                  }),
                              )
                              .every((flag: boolean) => flag)) ||
                          $report(true, {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "Array<string>",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "...Array<string>",
                      value: input.slice(2),
                    }))) ||
                $report(true, {
                  path: _path + "",
                  expected: "TupleRestArray",
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
          input: TupleRestArray,
        ): typia.PascalCase<TupleRestArray> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
          return Array.isArray(input) &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Array.isArray(input.slice(2)) &&
            input
              .slice(2)
              .every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.every((elem: any) => "string" === typeof elem),
              )
            ? ([
                input[0] as any,
                input[1] as any,
                ...(Array.isArray(input.slice(2))
                  ? $cp1(input.slice(2))
                  : (input.slice(2) as any)),
              ] as any)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.PascalCase<TupleRestArray> => {
      const __is = (input: any): input is typia.PascalCase<TupleRestArray> => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              null !== elem &&
              undefined !== elem &&
              (("number" === typeof elem && Number.isFinite(elem)) ||
                "boolean" === typeof elem ||
                (Array.isArray(elem) &&
                  elem.every((elem: any) => "string" === typeof elem))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.PascalCase<TupleRestArray> => {
          const $guard = (typia.createAssert as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "Array<number | boolean | string[]>",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "(Array<string> | boolean | number)",
                      value: elem,
                    })) &&
                  (undefined !== elem ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "(Array<string> | boolean | number)",
                      value: elem,
                    })) &&
                  (("number" === typeof elem && Number.isFinite(elem)) ||
                    "boolean" === typeof elem ||
                    ((Array.isArray(elem) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "(Array<string> | boolean | number)",
                        value: elem,
                      })) &&
                      elem.every(
                        (elem: any, _index2: number) =>
                          "string" === typeof elem ||
                          $guard(true, {
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "(Array<string> | boolean | number)",
                      value: elem,
                    })),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "Array<number | boolean | string[]>",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
