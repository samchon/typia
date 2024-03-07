import typia from "typia";
import { _test_functional_validateParameters } from "../../../internal/_test_functional_validateParameters";
import { ArraySimpleProtobufNullable } from "../../../structures/ArraySimpleProtobufNullable";
export const test_functional_validateParameters_ArraySimpleProtobufNullable =
  _test_functional_validateParameters("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )(
    (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
      (
        input: ArraySimpleProtobufNullable,
      ): import("typia").IValidation<ArraySimpleProtobufNullable> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArraySimpleProtobufNullable> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArraySimpleProtobufNullable => {
              const $io0 = (input: any): boolean =>
                (null === input.boolean ||
                  (Array.isArray(input.boolean) &&
                    input.boolean.every(
                      (elem: any) => "boolean" === typeof elem,
                    ))) &&
                (null === input.int32 ||
                  (Array.isArray(input.int32) &&
                    input.int32.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Math.floor(elem) === elem &&
                        -2147483648 <= elem &&
                        elem <= 2147483647,
                    ))) &&
                (null === input.uint32 ||
                  (Array.isArray(input.uint32) &&
                    input.uint32.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Math.floor(elem) === elem &&
                        0 <= elem &&
                        elem <= 4294967295,
                    ))) &&
                (null === input.int64 ||
                  (Array.isArray(input.int64) &&
                    input.int64.every(
                      (elem: any) => "bigint" === typeof elem && true,
                    ))) &&
                (null === input.uint64 ||
                  (Array.isArray(input.uint64) &&
                    input.uint64.every(
                      (elem: any) =>
                        "bigint" === typeof elem && BigInt(0) <= elem,
                    ))) &&
                (null === input.float ||
                  (Array.isArray(input.float) &&
                    input.float.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        -1.175494351e38 <= elem &&
                        elem <= 3.4028235e38,
                    ))) &&
                (null === input.double ||
                  (Array.isArray(input.double) &&
                    input.double.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        true,
                    ))) &&
                (null === input.string ||
                  (Array.isArray(input.string) &&
                    input.string.every(
                      (elem: any) => "string" === typeof elem,
                    ))) &&
                (null === input.bytes ||
                  (Array.isArray(input.bytes) &&
                    input.bytes.every(
                      (elem: any) => elem instanceof Uint8Array,
                    ))) &&
                (null === input.object ||
                  (Array.isArray(input.object) &&
                    input.object.every(
                      (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                    )));
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
              ): input is ArraySimpleProtobufNullable => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    null === input.boolean ||
                      ((Array.isArray(input.boolean) ||
                        $report(_exceptionable, {
                          path: _path + ".boolean",
                          expected: "(Array<boolean> | null)",
                          value: input.boolean,
                        })) &&
                        input.boolean
                          .map(
                            (elem: any, _index1: number) =>
                              "boolean" === typeof elem ||
                              $report(_exceptionable, {
                                path: _path + ".boolean[" + _index1 + "]",
                                expected: "boolean",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "(Array<boolean> | null)",
                        value: input.boolean,
                      }),
                    null === input.int32 ||
                      ((Array.isArray(input.int32) ||
                        $report(_exceptionable, {
                          path: _path + ".int32",
                          expected: '(Array<number & Type<"int32">> | null)',
                          value: input.int32,
                        })) &&
                        input.int32
                          .map(
                            (elem: any, _index2: number) =>
                              ("number" === typeof elem &&
                                ((Math.floor(elem) === elem &&
                                  -2147483648 <= elem &&
                                  elem <= 2147483647) ||
                                  $report(_exceptionable, {
                                    path: _path + ".int32[" + _index2 + "]",
                                    expected: 'number & Type<"int32">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".int32[" + _index2 + "]",
                                expected: '(number & Type<"int32">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".int32",
                        expected: '(Array<number & Type<"int32">> | null)',
                        value: input.int32,
                      }),
                    null === input.uint32 ||
                      ((Array.isArray(input.uint32) ||
                        $report(_exceptionable, {
                          path: _path + ".uint32",
                          expected: '(Array<number & Type<"uint32">> | null)',
                          value: input.uint32,
                        })) &&
                        input.uint32
                          .map(
                            (elem: any, _index3: number) =>
                              ("number" === typeof elem &&
                                ((Math.floor(elem) === elem &&
                                  0 <= elem &&
                                  elem <= 4294967295) ||
                                  $report(_exceptionable, {
                                    path: _path + ".uint32[" + _index3 + "]",
                                    expected: 'number & Type<"uint32">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".uint32[" + _index3 + "]",
                                expected: '(number & Type<"uint32">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".uint32",
                        expected: '(Array<number & Type<"uint32">> | null)',
                        value: input.uint32,
                      }),
                    null === input.int64 ||
                      ((Array.isArray(input.int64) ||
                        $report(_exceptionable, {
                          path: _path + ".int64",
                          expected: '(Array<bigint & Type<"int64">> | null)',
                          value: input.int64,
                        })) &&
                        input.int64
                          .map(
                            (elem: any, _index4: number) =>
                              ("bigint" === typeof elem &&
                                (true ||
                                  $report(_exceptionable, {
                                    path: _path + ".int64[" + _index4 + "]",
                                    expected: 'bigint & Type<"int64">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".int64[" + _index4 + "]",
                                expected: '(bigint & Type<"int64">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".int64",
                        expected: '(Array<bigint & Type<"int64">> | null)',
                        value: input.int64,
                      }),
                    null === input.uint64 ||
                      ((Array.isArray(input.uint64) ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected: '(Array<bigint & Type<"uint64">> | null)',
                          value: input.uint64,
                        })) &&
                        input.uint64
                          .map(
                            (elem: any, _index5: number) =>
                              ("bigint" === typeof elem &&
                                (BigInt(0) <= elem ||
                                  $report(_exceptionable, {
                                    path: _path + ".uint64[" + _index5 + "]",
                                    expected: 'bigint & Type<"uint64">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".uint64[" + _index5 + "]",
                                expected: '(bigint & Type<"uint64">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: '(Array<bigint & Type<"uint64">> | null)',
                        value: input.uint64,
                      }),
                    null === input.float ||
                      ((Array.isArray(input.float) ||
                        $report(_exceptionable, {
                          path: _path + ".float",
                          expected: '(Array<number & Type<"float">> | null)',
                          value: input.float,
                        })) &&
                        input.float
                          .map(
                            (elem: any, _index6: number) =>
                              ("number" === typeof elem &&
                                ((-1.175494351e38 <= elem &&
                                  elem <= 3.4028235e38) ||
                                  $report(_exceptionable, {
                                    path: _path + ".float[" + _index6 + "]",
                                    expected: 'number & Type<"float">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".float[" + _index6 + "]",
                                expected: '(number & Type<"float">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".float",
                        expected: '(Array<number & Type<"float">> | null)',
                        value: input.float,
                      }),
                    null === input.double ||
                      ((Array.isArray(input.double) ||
                        $report(_exceptionable, {
                          path: _path + ".double",
                          expected: '(Array<number & Type<"double">> | null)',
                          value: input.double,
                        })) &&
                        input.double
                          .map(
                            (elem: any, _index7: number) =>
                              ("number" === typeof elem &&
                                (Number.isFinite(elem) ||
                                  $report(_exceptionable, {
                                    path: _path + ".double[" + _index7 + "]",
                                    expected: "number",
                                    value: elem,
                                  })) &&
                                (true ||
                                  $report(_exceptionable, {
                                    path: _path + ".double[" + _index7 + "]",
                                    expected: 'number & Type<"double">',
                                    value: elem,
                                  }))) ||
                              $report(_exceptionable, {
                                path: _path + ".double[" + _index7 + "]",
                                expected: '(number & Type<"double">)',
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".double",
                        expected: '(Array<number & Type<"double">> | null)',
                        value: input.double,
                      }),
                    null === input.string ||
                      ((Array.isArray(input.string) ||
                        $report(_exceptionable, {
                          path: _path + ".string",
                          expected: "(Array<string> | null)",
                          value: input.string,
                        })) &&
                        input.string
                          .map(
                            (elem: any, _index8: number) =>
                              "string" === typeof elem ||
                              $report(_exceptionable, {
                                path: _path + ".string[" + _index8 + "]",
                                expected: "string",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".string",
                        expected: "(Array<string> | null)",
                        value: input.string,
                      }),
                    null === input.bytes ||
                      ((Array.isArray(input.bytes) ||
                        $report(_exceptionable, {
                          path: _path + ".bytes",
                          expected: "(Array<Uint8Array> | null)",
                          value: input.bytes,
                        })) &&
                        input.bytes
                          .map(
                            (elem: any, _index9: number) =>
                              elem instanceof Uint8Array ||
                              $report(_exceptionable, {
                                path: _path + ".bytes[" + _index9 + "]",
                                expected: "Uint8Array",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".bytes",
                        expected: "(Array<Uint8Array> | null)",
                        value: input.bytes,
                      }),
                    null === input.object ||
                      ((Array.isArray(input.object) ||
                        $report(_exceptionable, {
                          path: _path + ".object",
                          expected:
                            "(Array<ArraySimpleProtobufNullable> | null)",
                          value: input.object,
                        })) &&
                        input.object
                          .map(
                            (elem: any, _index10: number) =>
                              ((("object" === typeof elem && null !== elem) ||
                                $report(_exceptionable, {
                                  path: _path + ".object[" + _index10 + "]",
                                  expected: "ArraySimpleProtobufNullable",
                                  value: elem,
                                })) &&
                                $vo0(
                                  elem,
                                  _path + ".object[" + _index10 + "]",
                                  true && _exceptionable,
                                )) ||
                              $report(_exceptionable, {
                                path: _path + ".object[" + _index10 + "]",
                                expected: "ArraySimpleProtobufNullable",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected: "(Array<ArraySimpleProtobufNullable> | null)",
                        value: input.object,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ArraySimpleProtobufNullable",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArraySimpleProtobufNullable",
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
          data: p(input),
          errors: [],
        };
      },
  );
