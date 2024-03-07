import typia from "typia";
import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { ArraySimpleProtobufOptional } from "../../../structures/ArraySimpleProtobufOptional";
export const test_functional_validateParametersAsync_ArraySimpleProtobufOptional =
  _test_functional_validateParametersAsync("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )(
    (
        p: (
          input: ArraySimpleProtobufOptional,
        ) => Promise<ArraySimpleProtobufOptional>,
      ) =>
      async (
        input: ArraySimpleProtobufOptional,
      ): Promise<import("typia").IValidation<ArraySimpleProtobufOptional>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArraySimpleProtobufOptional> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArraySimpleProtobufOptional => {
              const $io0 = (input: any): boolean =>
                (undefined === input.boolean ||
                  (Array.isArray(input.boolean) &&
                    input.boolean.every(
                      (elem: any) => "boolean" === typeof elem,
                    ))) &&
                (undefined === input.int32 ||
                  (Array.isArray(input.int32) &&
                    input.int32.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Math.floor(elem) === elem &&
                        -2147483648 <= elem &&
                        elem <= 2147483647,
                    ))) &&
                (undefined === input.uint32 ||
                  (Array.isArray(input.uint32) &&
                    input.uint32.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Math.floor(elem) === elem &&
                        0 <= elem &&
                        elem <= 4294967295,
                    ))) &&
                (undefined === input.int64 ||
                  (Array.isArray(input.int64) &&
                    input.int64.every(
                      (elem: any) => "bigint" === typeof elem && true,
                    ))) &&
                (undefined === input.uint64 ||
                  (Array.isArray(input.uint64) &&
                    input.uint64.every(
                      (elem: any) =>
                        "bigint" === typeof elem && BigInt(0) <= elem,
                    ))) &&
                (undefined === input.float ||
                  (Array.isArray(input.float) &&
                    input.float.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        -1.175494351e38 <= elem &&
                        elem <= 3.4028235e38,
                    ))) &&
                (undefined === input.double ||
                  (Array.isArray(input.double) &&
                    input.double.every(
                      (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        true,
                    ))) &&
                (undefined === input.string ||
                  (Array.isArray(input.string) &&
                    input.string.every(
                      (elem: any) => "string" === typeof elem,
                    ))) &&
                (undefined === input.bytes ||
                  (Array.isArray(input.bytes) &&
                    input.bytes.every(
                      (elem: any) => elem instanceof Uint8Array,
                    ))) &&
                (undefined === input.object ||
                  (Array.isArray(input.object) &&
                    input.object.every(
                      (elem: any) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $io0(elem),
                    )));
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ArraySimpleProtobufOptional => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    undefined === input.boolean ||
                      ((Array.isArray(input.boolean) ||
                        $report(_exceptionable, {
                          path: _path + ".boolean",
                          expected: "(Array<boolean> | undefined)",
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
                        expected: "(Array<boolean> | undefined)",
                        value: input.boolean,
                      }),
                    undefined === input.int32 ||
                      ((Array.isArray(input.int32) ||
                        $report(_exceptionable, {
                          path: _path + ".int32",
                          expected:
                            '(Array<number & Type<"int32">> | undefined)',
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
                        expected: '(Array<number & Type<"int32">> | undefined)',
                        value: input.int32,
                      }),
                    undefined === input.uint32 ||
                      ((Array.isArray(input.uint32) ||
                        $report(_exceptionable, {
                          path: _path + ".uint32",
                          expected:
                            '(Array<number & Type<"uint32">> | undefined)',
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
                        expected:
                          '(Array<number & Type<"uint32">> | undefined)',
                        value: input.uint32,
                      }),
                    undefined === input.int64 ||
                      ((Array.isArray(input.int64) ||
                        $report(_exceptionable, {
                          path: _path + ".int64",
                          expected:
                            '(Array<bigint & Type<"int64">> | undefined)',
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
                        expected: '(Array<bigint & Type<"int64">> | undefined)',
                        value: input.int64,
                      }),
                    undefined === input.uint64 ||
                      ((Array.isArray(input.uint64) ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected:
                            '(Array<bigint & Type<"uint64">> | undefined)',
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
                        expected:
                          '(Array<bigint & Type<"uint64">> | undefined)',
                        value: input.uint64,
                      }),
                    undefined === input.float ||
                      ((Array.isArray(input.float) ||
                        $report(_exceptionable, {
                          path: _path + ".float",
                          expected:
                            '(Array<number & Type<"float">> | undefined)',
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
                        expected: '(Array<number & Type<"float">> | undefined)',
                        value: input.float,
                      }),
                    undefined === input.double ||
                      ((Array.isArray(input.double) ||
                        $report(_exceptionable, {
                          path: _path + ".double",
                          expected:
                            '(Array<number & Type<"double">> | undefined)',
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
                        expected:
                          '(Array<number & Type<"double">> | undefined)',
                        value: input.double,
                      }),
                    undefined === input.string ||
                      ((Array.isArray(input.string) ||
                        $report(_exceptionable, {
                          path: _path + ".string",
                          expected: "(Array<string> | undefined)",
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
                        expected: "(Array<string> | undefined)",
                        value: input.string,
                      }),
                    undefined === input.bytes ||
                      ((Array.isArray(input.bytes) ||
                        $report(_exceptionable, {
                          path: _path + ".bytes",
                          expected: "(Array<Uint8Array> | undefined)",
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
                        expected: "(Array<Uint8Array> | undefined)",
                        value: input.bytes,
                      }),
                    undefined === input.object ||
                      ((Array.isArray(input.object) ||
                        $report(_exceptionable, {
                          path: _path + ".object",
                          expected:
                            "(Array<ArraySimpleProtobufOptional> | undefined)",
                          value: input.object,
                        })) &&
                        input.object
                          .map(
                            (elem: any, _index10: number) =>
                              ((("object" === typeof elem &&
                                null !== elem &&
                                false === Array.isArray(elem)) ||
                                $report(_exceptionable, {
                                  path: _path + ".object[" + _index10 + "]",
                                  expected: "ArraySimpleProtobufOptional",
                                  value: elem,
                                })) &&
                                $vo0(
                                  elem,
                                  _path + ".object[" + _index10 + "]",
                                  true && _exceptionable,
                                )) ||
                              $report(_exceptionable, {
                                path: _path + ".object[" + _index10 + "]",
                                expected: "ArraySimpleProtobufOptional",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected:
                          "(Array<ArraySimpleProtobufOptional> | undefined)",
                        value: input.object,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ArraySimpleProtobufOptional",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArraySimpleProtobufOptional",
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
