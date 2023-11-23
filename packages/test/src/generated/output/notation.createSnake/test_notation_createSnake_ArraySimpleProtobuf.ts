import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobuf } from "../../../structures/ArraySimpleProtobuf";

export const test_notation_createValidateSnake_ArraySimpleProtobuf =
  _test_notation_validateGeneral("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )<typia.SnakeCase<ArraySimpleProtobuf>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ArraySimpleProtobuf>> => {
      const validate = (input: any): typia.IValidation<ArraySimpleProtobuf> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArraySimpleProtobuf => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.boolean) &&
            input.boolean.every((elem: any) => "boolean" === typeof elem) &&
            Array.isArray(input.int32) &&
            input.int32.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                -2147483648 <= elem &&
                elem <= 2147483647,
            ) &&
            Array.isArray(input.uint32) &&
            input.uint32.every(
              (elem: any) =>
                "number" === typeof elem &&
                Math.floor(elem) === elem &&
                0 <= elem &&
                elem <= 4294967295,
            ) &&
            Array.isArray(input.int64) &&
            input.int64.every(
              (elem: any) => "bigint" === typeof elem && true,
            ) &&
            Array.isArray(input.uint64) &&
            input.uint64.every(
              (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
            ) &&
            Array.isArray(input.float) &&
            input.float.every(
              (elem: any) =>
                "number" === typeof elem &&
                -1.175494351e38 <= elem &&
                elem <= 3.4028235e38,
            ) &&
            Array.isArray(input.double) &&
            input.double.every(
              (elem: any) =>
                "number" === typeof elem && Number.isFinite(elem) && true,
            ) &&
            Array.isArray(input.string) &&
            input.string.every((elem: any) => "string" === typeof elem) &&
            Array.isArray(input.bytes) &&
            input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
            Array.isArray(input.object) &&
            input.object.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArraySimpleProtobuf => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.boolean) ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "Array<boolean>",
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
                    expected: "Array<boolean>",
                    value: input.boolean,
                  }),
                ((Array.isArray(input.int32) ||
                  $report(_exceptionable, {
                    path: _path + ".int32",
                    expected: 'Array<number & Type<"int32">>',
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
                    expected: 'Array<number & Type<"int32">>',
                    value: input.int32,
                  }),
                ((Array.isArray(input.uint32) ||
                  $report(_exceptionable, {
                    path: _path + ".uint32",
                    expected: 'Array<number & Type<"uint32">>',
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
                    expected: 'Array<number & Type<"uint32">>',
                    value: input.uint32,
                  }),
                ((Array.isArray(input.int64) ||
                  $report(_exceptionable, {
                    path: _path + ".int64",
                    expected: 'Array<bigint & Type<"int64">>',
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
                    expected: 'Array<bigint & Type<"int64">>',
                    value: input.int64,
                  }),
                ((Array.isArray(input.uint64) ||
                  $report(_exceptionable, {
                    path: _path + ".uint64",
                    expected: 'Array<bigint & Type<"uint64">>',
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
                    expected: 'Array<bigint & Type<"uint64">>',
                    value: input.uint64,
                  }),
                ((Array.isArray(input.float) ||
                  $report(_exceptionable, {
                    path: _path + ".float",
                    expected: 'Array<number & Type<"float">>',
                    value: input.float,
                  })) &&
                  input.float
                    .map(
                      (elem: any, _index6: number) =>
                        ("number" === typeof elem &&
                          ((-1.175494351e38 <= elem && elem <= 3.4028235e38) ||
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
                    expected: 'Array<number & Type<"float">>',
                    value: input.float,
                  }),
                ((Array.isArray(input.double) ||
                  $report(_exceptionable, {
                    path: _path + ".double",
                    expected: 'Array<number & Type<"double">>',
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
                    expected: 'Array<number & Type<"double">>',
                    value: input.double,
                  }),
                ((Array.isArray(input.string) ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "Array<string>",
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
                    expected: "Array<string>",
                    value: input.string,
                  }),
                ((Array.isArray(input.bytes) ||
                  $report(_exceptionable, {
                    path: _path + ".bytes",
                    expected: "Array<Uint8Array>",
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
                    expected: "Array<Uint8Array>",
                    value: input.bytes,
                  }),
                ((Array.isArray(input.object) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "Array<ArraySimpleProtobuf>",
                    value: input.object,
                  })) &&
                  input.object
                    .map(
                      (elem: any, _index10: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".object[" + _index10 + "]",
                            expected: "ArraySimpleProtobuf",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".object[" + _index10 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".object[" + _index10 + "]",
                          expected: "ArraySimpleProtobuf",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".object",
                    expected: "Array<ArraySimpleProtobuf>",
                    value: input.object,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArraySimpleProtobuf",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ArraySimpleProtobuf",
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
        input: ArraySimpleProtobuf,
      ): typia.SnakeCase<ArraySimpleProtobuf> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.boolean) &&
          input.boolean.every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input.int32) &&
          input.int32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              -2147483648 <= elem &&
              elem <= 2147483647,
          ) &&
          Array.isArray(input.uint32) &&
          input.uint32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              0 <= elem &&
              elem <= 4294967295,
          ) &&
          Array.isArray(input.int64) &&
          input.int64.every((elem: any) => "bigint" === typeof elem && true) &&
          Array.isArray(input.uint64) &&
          input.uint64.every(
            (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
          ) &&
          Array.isArray(input.float) &&
          input.float.every(
            (elem: any) =>
              "number" === typeof elem &&
              -1.175494351e38 <= elem &&
              elem <= 3.4028235e38,
          ) &&
          Array.isArray(input.double) &&
          input.double.every((elem: any) => "number" === typeof elem && true) &&
          Array.isArray(input.string) &&
          input.string.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.bytes) &&
          input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
          Array.isArray(input.object) &&
          input.object.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          );
        const $cp0 = (input: any) => input.map((elem: any) => elem as any);
        const $cp1 = (input: any) => input.map((elem: any) => elem as any);
        const $cp2 = (input: any) => input.map((elem: any) => elem as any);
        const $cp3 = (input: any) => input.map((elem: any) => elem as any);
        const $cp4 = (input: any) => input.map((elem: any) => elem as any);
        const $cp5 = (input: any) => input.map((elem: any) => elem as any);
        const $cp6 = (input: any) => input.map((elem: any) => elem as any);
        const $cp7 = (input: any) => input.map((elem: any) => elem as any);
        const $cp8 = (input: any) =>
          input.map((elem: any) =>
            elem instanceof Uint8Array ? elem : (elem as any),
          );
        const $cp9 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co0(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          boolean: Array.isArray(input.boolean)
            ? $cp0(input.boolean)
            : (input.boolean as any),
          int32: Array.isArray(input.int32)
            ? $cp1(input.int32)
            : (input.int32 as any),
          uint32: Array.isArray(input.uint32)
            ? $cp2(input.uint32)
            : (input.uint32 as any),
          int64: Array.isArray(input.int64)
            ? $cp3(input.int64)
            : (input.int64 as any),
          uint64: Array.isArray(input.uint64)
            ? $cp4(input.uint64)
            : (input.uint64 as any),
          float: Array.isArray(input.float)
            ? $cp5(input.float)
            : (input.float as any),
          double: Array.isArray(input.double)
            ? $cp6(input.double)
            : (input.double as any),
          string: Array.isArray(input.string)
            ? $cp7(input.string)
            : (input.string as any),
          bytes: Array.isArray(input.bytes)
            ? $cp8(input.bytes)
            : (input.bytes as any),
          object: Array.isArray(input.object)
            ? $cp9(input.object)
            : (input.object as any),
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<ArraySimpleProtobuf> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ArraySimpleProtobuf> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.boolean) &&
          input.boolean.every((elem: any) => "boolean" === typeof elem) &&
          Array.isArray(input.int32) &&
          input.int32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              -2147483648 <= elem &&
              elem <= 2147483647,
          ) &&
          Array.isArray(input.uint32) &&
          input.uint32.every(
            (elem: any) =>
              "number" === typeof elem &&
              Math.floor(elem) === elem &&
              0 <= elem &&
              elem <= 4294967295,
          ) &&
          Array.isArray(input.int64) &&
          input.int64.every((elem: any) => "bigint" === typeof elem && true) &&
          Array.isArray(input.uint64) &&
          input.uint64.every(
            (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
          ) &&
          Array.isArray(input.float) &&
          input.float.every(
            (elem: any) =>
              "number" === typeof elem &&
              -1.175494351e38 <= elem &&
              elem <= 3.4028235e38,
          ) &&
          Array.isArray(input.double) &&
          input.double.every(
            (elem: any) =>
              "number" === typeof elem && Number.isFinite(elem) && true,
          ) &&
          Array.isArray(input.string) &&
          input.string.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.bytes) &&
          input.bytes.every((elem: any) => elem instanceof Uint8Array) &&
          Array.isArray(input.object) &&
          input.object.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArraySimpleProtobuf> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.boolean) ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "Array<boolean>",
                value: input.boolean,
              })) &&
              input.boolean.every(
                (elem: any, _index1: number) =>
                  "boolean" === typeof elem ||
                  $guard(_exceptionable, {
                    path: _path + ".boolean[" + _index1 + "]",
                    expected: "boolean",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "Array<boolean>",
                value: input.boolean,
              })) &&
            (((Array.isArray(input.int32) ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: 'Array<number & Type<"int32">>',
                value: input.int32,
              })) &&
              input.int32.every(
                (elem: any, _index2: number) =>
                  ("number" === typeof elem &&
                    ((Math.floor(elem) === elem &&
                      -2147483648 <= elem &&
                      elem <= 2147483647) ||
                      $guard(_exceptionable, {
                        path: _path + ".int32[" + _index2 + "]",
                        expected: 'number & Type<"int32">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32[" + _index2 + "]",
                    expected: '(number & Type<"int32">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".int32",
                expected: 'Array<number & Type<"int32">>',
                value: input.int32,
              })) &&
            (((Array.isArray(input.uint32) ||
              $guard(_exceptionable, {
                path: _path + ".uint32",
                expected: 'Array<number & Type<"uint32">>',
                value: input.uint32,
              })) &&
              input.uint32.every(
                (elem: any, _index3: number) =>
                  ("number" === typeof elem &&
                    ((Math.floor(elem) === elem &&
                      0 <= elem &&
                      elem <= 4294967295) ||
                      $guard(_exceptionable, {
                        path: _path + ".uint32[" + _index3 + "]",
                        expected: 'number & Type<"uint32">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".uint32[" + _index3 + "]",
                    expected: '(number & Type<"uint32">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".uint32",
                expected: 'Array<number & Type<"uint32">>',
                value: input.uint32,
              })) &&
            (((Array.isArray(input.int64) ||
              $guard(_exceptionable, {
                path: _path + ".int64",
                expected: 'Array<bigint & Type<"int64">>',
                value: input.int64,
              })) &&
              input.int64.every(
                (elem: any, _index4: number) =>
                  ("bigint" === typeof elem &&
                    (true ||
                      $guard(_exceptionable, {
                        path: _path + ".int64[" + _index4 + "]",
                        expected: 'bigint & Type<"int64">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".int64[" + _index4 + "]",
                    expected: '(bigint & Type<"int64">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".int64",
                expected: 'Array<bigint & Type<"int64">>',
                value: input.int64,
              })) &&
            (((Array.isArray(input.uint64) ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'Array<bigint & Type<"uint64">>',
                value: input.uint64,
              })) &&
              input.uint64.every(
                (elem: any, _index5: number) =>
                  ("bigint" === typeof elem &&
                    (BigInt(0) <= elem ||
                      $guard(_exceptionable, {
                        path: _path + ".uint64[" + _index5 + "]",
                        expected: 'bigint & Type<"uint64">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".uint64[" + _index5 + "]",
                    expected: '(bigint & Type<"uint64">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'Array<bigint & Type<"uint64">>',
                value: input.uint64,
              })) &&
            (((Array.isArray(input.float) ||
              $guard(_exceptionable, {
                path: _path + ".float",
                expected: 'Array<number & Type<"float">>',
                value: input.float,
              })) &&
              input.float.every(
                (elem: any, _index6: number) =>
                  ("number" === typeof elem &&
                    ((-1.175494351e38 <= elem && elem <= 3.4028235e38) ||
                      $guard(_exceptionable, {
                        path: _path + ".float[" + _index6 + "]",
                        expected: 'number & Type<"float">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".float[" + _index6 + "]",
                    expected: '(number & Type<"float">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".float",
                expected: 'Array<number & Type<"float">>',
                value: input.float,
              })) &&
            (((Array.isArray(input.double) ||
              $guard(_exceptionable, {
                path: _path + ".double",
                expected: 'Array<number & Type<"double">>',
                value: input.double,
              })) &&
              input.double.every(
                (elem: any, _index7: number) =>
                  ("number" === typeof elem &&
                    (Number.isFinite(elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".double[" + _index7 + "]",
                        expected: "number",
                        value: elem,
                      })) &&
                    (true ||
                      $guard(_exceptionable, {
                        path: _path + ".double[" + _index7 + "]",
                        expected: 'number & Type<"double">',
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".double[" + _index7 + "]",
                    expected: '(number & Type<"double">)',
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".double",
                expected: 'Array<number & Type<"double">>',
                value: input.double,
              })) &&
            (((Array.isArray(input.string) ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "Array<string>",
                value: input.string,
              })) &&
              input.string.every(
                (elem: any, _index8: number) =>
                  "string" === typeof elem ||
                  $guard(_exceptionable, {
                    path: _path + ".string[" + _index8 + "]",
                    expected: "string",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "Array<string>",
                value: input.string,
              })) &&
            (((Array.isArray(input.bytes) ||
              $guard(_exceptionable, {
                path: _path + ".bytes",
                expected: "Array<Uint8Array>",
                value: input.bytes,
              })) &&
              input.bytes.every(
                (elem: any, _index9: number) =>
                  elem instanceof Uint8Array ||
                  $guard(_exceptionable, {
                    path: _path + ".bytes[" + _index9 + "]",
                    expected: "Uint8Array",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".bytes",
                expected: "Array<Uint8Array>",
                value: input.bytes,
              })) &&
            (((Array.isArray(input.object) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "Array<ArraySimpleProtobuf>",
                value: input.object,
              })) &&
              input.object.every(
                (elem: any, _index10: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".object[" + _index10 + "]",
                      expected: "ArraySimpleProtobuf",
                      value: elem,
                    })) &&
                    $ao0(
                      elem,
                      _path + ".object[" + _index10 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".object[" + _index10 + "]",
                    expected: "ArraySimpleProtobuf",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "Array<ArraySimpleProtobuf>",
                value: input.object,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArraySimpleProtobuf",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ArraySimpleProtobuf",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
