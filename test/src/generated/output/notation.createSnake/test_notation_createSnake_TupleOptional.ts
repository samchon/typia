import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../../structures/TupleOptional";

export const test_notation_createValidateSnake_TupleOptional =
  _test_notation_validateGeneral("TupleOptional")<TupleOptional>(TupleOptional)<
    typia.SnakeCase<TupleOptional>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<TupleOptional>> => {
      const validate = (input: any): typia.IValidation<TupleOptional> => {
        const errors = [] as any[];
        const __is = (input: any): input is TupleOptional => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                Array.isArray(elem) &&
                3 <= elem.length &&
                5 >= elem.length &&
                "number" === typeof elem[0] &&
                Number.isFinite(elem[0]) &&
                "boolean" === typeof elem[1] &&
                "string" === typeof elem[2] &&
                (null === elem[3] ||
                  undefined === elem[3] ||
                  ("number" === typeof elem[3] && Number.isFinite(elem[3]))) &&
                (null === elem[4] ||
                  undefined === elem[4] ||
                  "string" === typeof elem[4]),
            )
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
          ): input is TupleOptional => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TupleOptional",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                          value: elem,
                        })) &&
                        ((3 <= elem.length && 5 >= elem.length) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                            value: elem,
                          })) &&
                        [
                          ("number" === typeof elem[0] &&
                            Number.isFinite(elem[0])) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "][0]",
                              expected: "number",
                              value: elem[0],
                            }),
                          "boolean" === typeof elem[1] ||
                            $report(true, {
                              path: _path + "[" + _index1 + "][1]",
                              expected: "boolean",
                              value: elem[1],
                            }),
                          "string" === typeof elem[2] ||
                            $report(true, {
                              path: _path + "[" + _index1 + "][2]",
                              expected: "string",
                              value: elem[2],
                            }),
                          null === elem[3] ||
                            undefined === elem[3] ||
                            ("number" === typeof elem[3] &&
                              Number.isFinite(elem[3])) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "][3]",
                              expected: "(null | number | undefined)",
                              value: elem[3],
                            }),
                          null === elem[4] ||
                            undefined === elem[4] ||
                            "string" === typeof elem[4] ||
                            $report(true, {
                              path: _path + "[" + _index1 + "][4]",
                              expected: "(null | string | undefined)",
                              value: elem[4],
                            }),
                        ].every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "TupleOptional",
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
        input: TupleOptional,
      ): typia.SnakeCase<TupleOptional> => {
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            Array.isArray(elem) &&
            3 <= elem.length &&
            5 >= elem.length &&
            "number" === typeof elem[0] &&
            "boolean" === typeof elem[1] &&
            "string" === typeof elem[2] &&
            (null === elem[3] ||
              undefined === elem[3] ||
              "number" === typeof elem[3]) &&
            (null === elem[4] ||
              undefined === elem[4] ||
              "string" === typeof elem[4])
              ? ([
                  elem[0] as any,
                  elem[1] as any,
                  elem[2] as any,
                  elem[3] as any,
                  elem[4] as any,
                ] as any)
              : (elem as any),
          );
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<TupleOptional> => {
      const __is = (input: any): input is typia.SnakeCase<TupleOptional> => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              Array.isArray(elem) &&
              3 <= elem.length &&
              5 >= elem.length &&
              "number" === typeof elem[0] &&
              Number.isFinite(elem[0]) &&
              "boolean" === typeof elem[1] &&
              "string" === typeof elem[2] &&
              (null === elem[3] ||
                undefined === elem[3] ||
                ("number" === typeof elem[3] && Number.isFinite(elem[3]))) &&
              (null === elem[4] ||
                undefined === elem[4] ||
                "string" === typeof elem[4]),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<TupleOptional> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "TupleOptional",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((Array.isArray(elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                      value: elem,
                    })) &&
                    ((3 <= elem.length && 5 >= elem.length) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                        value: elem,
                      })) &&
                    (("number" === typeof elem[0] &&
                      Number.isFinite(elem[0])) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][0]",
                        expected: "number",
                        value: elem[0],
                      })) &&
                    ("boolean" === typeof elem[1] ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][1]",
                        expected: "boolean",
                        value: elem[1],
                      })) &&
                    ("string" === typeof elem[2] ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][2]",
                        expected: "string",
                        value: elem[2],
                      })) &&
                    (null === elem[3] ||
                      undefined === elem[3] ||
                      ("number" === typeof elem[3] &&
                        Number.isFinite(elem[3])) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][3]",
                        expected: "(null | number | undefined)",
                        value: elem[3],
                      })) &&
                    (null === elem[4] ||
                      undefined === elem[4] ||
                      "string" === typeof elem[4] ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][4]",
                        expected: "(null | string | undefined)",
                        value: elem[4],
                      }))) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "TupleOptional",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
