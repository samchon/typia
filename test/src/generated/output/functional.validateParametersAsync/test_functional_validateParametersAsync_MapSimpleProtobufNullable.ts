import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { MapSimpleProtobufNullable } from "../../../structures/MapSimpleProtobufNullable";

export const test_functional_validateParametersAsync_MapSimpleProtobufNullable =
  _test_functional_validateParametersAsync("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )(
    (
      p: (
        input: MapSimpleProtobufNullable,
      ) => Promise<MapSimpleProtobufNullable>,
    ) =>
      async (
        input: MapSimpleProtobufNullable,
      ): Promise<import("typia").IValidation<MapSimpleProtobufNullable>> => {
        const paramResults = [
          ((input: any): typia.IValidation<MapSimpleProtobufNullable> => {
            const errors = [] as any[];
            const __is = (input: any): input is MapSimpleProtobufNullable => {
              const $io0 = (input: any): boolean =>
                (null === input.boolean ||
                  (input.boolean instanceof Map &&
                    (() =>
                      [...input.boolean].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "boolean" === typeof elem[1],
                      ))())) &&
                (null === input.int32 ||
                  (input.int32 instanceof Map &&
                    (() =>
                      [...input.int32].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "number" === typeof elem[1] &&
                          Math.floor(elem[1]) === elem[1] &&
                          -2147483648 <= elem[1] &&
                          elem[1] <= 2147483647,
                      ))())) &&
                (null === input.bigint ||
                  (input.bigint instanceof Map &&
                    (() =>
                      [...input.bigint].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "bigint" === typeof elem[1],
                      ))())) &&
                (null === input.double ||
                  (input.double instanceof Map &&
                    (() =>
                      [...input.double].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "number" === typeof elem[1] &&
                          Number.isFinite(elem[1]),
                      ))())) &&
                (null === input.string ||
                  (input.string instanceof Map &&
                    (() =>
                      [...input.string].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "string" === typeof elem[1] &&
                          1 <= elem[1].length,
                      ))())) &&
                (null === input.bytes ||
                  (input.bytes instanceof Map &&
                    (() =>
                      [...input.bytes].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          elem[1] instanceof Uint8Array,
                      ))())) &&
                (null === input.objects ||
                  (input.objects instanceof Map &&
                    (() =>
                      [...input.objects].every(
                        (elem: any) =>
                          Array.isArray(elem) &&
                          elem.length === 2 &&
                          "string" === typeof elem[0] &&
                          "object" === typeof elem[1] &&
                          null !== elem[1] &&
                          $io0(elem[1]),
                      ))()));
              return "object" === typeof input && null !== input && $io0(input);
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is MapSimpleProtobufNullable => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    null === input.boolean ||
                      ((input.boolean instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".boolean",
                          expected: "(Map<string, boolean> | null)",
                          value: input.boolean,
                        })) &&
                        (() =>
                          [...input.boolean]
                            .map(
                              (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".boolean[" + _index1 + "]",
                                    expected: "[string, boolean]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".boolean[" + _index1 + "]",
                                      expected: "[string, boolean]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".boolean[" +
                                          _index1 +
                                          "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    "boolean" === typeof elem[1] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".boolean[" +
                                          _index1 +
                                          "][1]",
                                        expected: "boolean",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".boolean[" + _index1 + "]",
                                  expected: "[string, boolean]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "(Map<string, boolean> | null)",
                        value: input.boolean,
                      }),
                    null === input.int32 ||
                      ((input.int32 instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".int32",
                          expected:
                            '(Map<string, (number & Type<"int32">)> | null)',
                          value: input.int32,
                        })) &&
                        (() =>
                          [...input.int32]
                            .map(
                              (elem: any, _index2: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".int32[" + _index2 + "]",
                                    expected:
                                      '[string, (number & Type<"int32">)]',
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".int32[" + _index2 + "]",
                                      expected:
                                        '[string, (number & Type<"int32">)]',
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".int32[" + _index2 + "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    ("number" === typeof elem[1] &&
                                      ((Math.floor(elem[1]) === elem[1] &&
                                        -2147483648 <= elem[1] &&
                                        elem[1] <= 2147483647) ||
                                        $report(_exceptionable, {
                                          path:
                                            _path +
                                            ".int32[" +
                                            _index2 +
                                            "][1]",
                                          expected: 'number & Type<"int32">',
                                          value: elem[1],
                                        }))) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".int32[" + _index2 + "][1]",
                                        expected: '(number & Type<"int32">)',
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".int32[" + _index2 + "]",
                                  expected:
                                    '[string, (number & Type<"int32">)]',
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".int32",
                        expected:
                          '(Map<string, (number & Type<"int32">)> | null)',
                        value: input.int32,
                      }),
                    null === input.bigint ||
                      ((input.bigint instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".bigint",
                          expected: "(Map<string, bigint> | null)",
                          value: input.bigint,
                        })) &&
                        (() =>
                          [...input.bigint]
                            .map(
                              (elem: any, _index3: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".bigint[" + _index3 + "]",
                                    expected: "[string, bigint]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".bigint[" + _index3 + "]",
                                      expected: "[string, bigint]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".bigint[" + _index3 + "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    "bigint" === typeof elem[1] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".bigint[" + _index3 + "][1]",
                                        expected: "bigint",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".bigint[" + _index3 + "]",
                                  expected: "[string, bigint]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".bigint",
                        expected: "(Map<string, bigint> | null)",
                        value: input.bigint,
                      }),
                    null === input.double ||
                      ((input.double instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".double",
                          expected: "(Map<string, number> | null)",
                          value: input.double,
                        })) &&
                        (() =>
                          [...input.double]
                            .map(
                              (elem: any, _index4: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".double[" + _index4 + "]",
                                    expected: "[string, number]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".double[" + _index4 + "]",
                                      expected: "[string, number]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".double[" + _index4 + "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    ("number" === typeof elem[1] &&
                                      Number.isFinite(elem[1])) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".double[" + _index4 + "][1]",
                                        expected: "number",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".double[" + _index4 + "]",
                                  expected: "[string, number]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".double",
                        expected: "(Map<string, number> | null)",
                        value: input.double,
                      }),
                    null === input.string ||
                      ((input.string instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".string",
                          expected:
                            "(Map<string, (string & MinLength<1>)> | null)",
                          value: input.string,
                        })) &&
                        (() =>
                          [...input.string]
                            .map(
                              (elem: any, _index5: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".string[" + _index5 + "]",
                                    expected:
                                      "[string, (string & MinLength<1>)]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".string[" + _index5 + "]",
                                      expected:
                                        "[string, (string & MinLength<1>)]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".string[" + _index5 + "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    ("string" === typeof elem[1] &&
                                      (1 <= elem[1].length ||
                                        $report(_exceptionable, {
                                          path:
                                            _path +
                                            ".string[" +
                                            _index5 +
                                            "][1]",
                                          expected: "string & MinLength<1>",
                                          value: elem[1],
                                        }))) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".string[" + _index5 + "][1]",
                                        expected: "(string & MinLength<1>)",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".string[" + _index5 + "]",
                                  expected: "[string, (string & MinLength<1>)]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".string",
                        expected:
                          "(Map<string, (string & MinLength<1>)> | null)",
                        value: input.string,
                      }),
                    null === input.bytes ||
                      ((input.bytes instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".bytes",
                          expected: "(Map<string, Uint8Array> | null)",
                          value: input.bytes,
                        })) &&
                        (() =>
                          [...input.bytes]
                            .map(
                              (elem: any, _index6: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".bytes[" + _index6 + "]",
                                    expected: "[string, Uint8Array]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".bytes[" + _index6 + "]",
                                      expected: "[string, Uint8Array]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".bytes[" + _index6 + "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    elem[1] instanceof Uint8Array ||
                                      $report(_exceptionable, {
                                        path:
                                          _path + ".bytes[" + _index6 + "][1]",
                                        expected: "Uint8Array",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".bytes[" + _index6 + "]",
                                  expected: "[string, Uint8Array]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".bytes",
                        expected: "(Map<string, Uint8Array> | null)",
                        value: input.bytes,
                      }),
                    null === input.objects ||
                      ((input.objects instanceof Map ||
                        $report(_exceptionable, {
                          path: _path + ".objects",
                          expected:
                            "(Map<string, MapSimpleProtobufNullable> | null)",
                          value: input.objects,
                        })) &&
                        (() =>
                          [...input.objects]
                            .map(
                              (elem: any, _index7: number) =>
                                ((Array.isArray(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".objects[" + _index7 + "]",
                                    expected:
                                      "[string, MapSimpleProtobufNullable]",
                                    value: elem,
                                  })) &&
                                  (elem.length === 2 ||
                                    $report(_exceptionable, {
                                      path: _path + ".objects[" + _index7 + "]",
                                      expected:
                                        "[string, MapSimpleProtobufNullable]",
                                      value: elem,
                                    })) &&
                                  [
                                    "string" === typeof elem[0] ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".objects[" +
                                          _index7 +
                                          "][0]",
                                        expected: "string",
                                        value: elem[0],
                                      }),
                                    ((("object" === typeof elem[1] &&
                                      null !== elem[1]) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".objects[" +
                                          _index7 +
                                          "][1]",
                                        expected: "MapSimpleProtobufNullable",
                                        value: elem[1],
                                      })) &&
                                      $vo0(
                                        elem[1],
                                        _path + ".objects[" + _index7 + "][1]",
                                        true && _exceptionable,
                                      )) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".objects[" +
                                          _index7 +
                                          "][1]",
                                        expected: "MapSimpleProtobufNullable",
                                        value: elem[1],
                                      }),
                                  ].every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                  path: _path + ".objects[" + _index7 + "]",
                                  expected:
                                    "[string, MapSimpleProtobufNullable]",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag))()) ||
                      $report(_exceptionable, {
                        path: _path + ".objects",
                        expected:
                          "(Map<string, MapSimpleProtobufNullable> | null)",
                        value: input.objects,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "MapSimpleProtobufNullable",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "MapSimpleProtobufNullable",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
