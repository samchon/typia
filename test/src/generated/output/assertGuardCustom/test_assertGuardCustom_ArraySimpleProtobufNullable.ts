import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../../structures/ArraySimpleProtobufNullable";

export const test_assertGuardCustom_ArraySimpleProtobufNullable =
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): asserts input is ArraySimpleProtobufNullable => {
      const $guard = (typia.assertGuard as any).guard(errorFactory);
      const __is = (input: any): input is ArraySimpleProtobufNullable => {
        const $io0 = (input: any): boolean =>
          (null === input.boolean ||
            (Array.isArray(input.boolean) &&
              input.boolean.every((elem: any) => "boolean" === typeof elem))) &&
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
                (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
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
                  "number" === typeof elem && Number.isFinite(elem) && true,
              ))) &&
          (null === input.string ||
            (Array.isArray(input.string) &&
              input.string.every((elem: any) => "string" === typeof elem))) &&
          (null === input.bytes ||
            (Array.isArray(input.bytes) &&
              input.bytes.every((elem: any) => elem instanceof Uint8Array))) &&
          (null === input.object ||
            (Array.isArray(input.object) &&
              input.object.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )));
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ArraySimpleProtobufNullable => {
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.boolean ||
              ((Array.isArray(input.boolean) ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "(Array<boolean> | null)",
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
                expected: "(Array<boolean> | null)",
                value: input.boolean,
              })) &&
            (null === input.int32 ||
              ((Array.isArray(input.int32) ||
                $guard(_exceptionable, {
                  path: _path + ".int32",
                  expected: '(Array<number & Type<"int32">> | null)',
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
                expected: '(Array<number & Type<"int32">> | null)',
                value: input.int32,
              })) &&
            (null === input.uint32 ||
              ((Array.isArray(input.uint32) ||
                $guard(_exceptionable, {
                  path: _path + ".uint32",
                  expected: '(Array<number & Type<"uint32">> | null)',
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
                expected: '(Array<number & Type<"uint32">> | null)',
                value: input.uint32,
              })) &&
            (null === input.int64 ||
              ((Array.isArray(input.int64) ||
                $guard(_exceptionable, {
                  path: _path + ".int64",
                  expected: '(Array<bigint & Type<"int64">> | null)',
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
                expected: '(Array<bigint & Type<"int64">> | null)',
                value: input.int64,
              })) &&
            (null === input.uint64 ||
              ((Array.isArray(input.uint64) ||
                $guard(_exceptionable, {
                  path: _path + ".uint64",
                  expected: '(Array<bigint & Type<"uint64">> | null)',
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
                expected: '(Array<bigint & Type<"uint64">> | null)',
                value: input.uint64,
              })) &&
            (null === input.float ||
              ((Array.isArray(input.float) ||
                $guard(_exceptionable, {
                  path: _path + ".float",
                  expected: '(Array<number & Type<"float">> | null)',
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
                expected: '(Array<number & Type<"float">> | null)',
                value: input.float,
              })) &&
            (null === input.double ||
              ((Array.isArray(input.double) ||
                $guard(_exceptionable, {
                  path: _path + ".double",
                  expected: '(Array<number & Type<"double">> | null)',
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
                expected: '(Array<number & Type<"double">> | null)',
                value: input.double,
              })) &&
            (null === input.string ||
              ((Array.isArray(input.string) ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "(Array<string> | null)",
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
                expected: "(Array<string> | null)",
                value: input.string,
              })) &&
            (null === input.bytes ||
              ((Array.isArray(input.bytes) ||
                $guard(_exceptionable, {
                  path: _path + ".bytes",
                  expected: "(Array<Uint8Array> | null)",
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
                expected: "(Array<Uint8Array> | null)",
                value: input.bytes,
              })) &&
            (null === input.object ||
              ((Array.isArray(input.object) ||
                $guard(_exceptionable, {
                  path: _path + ".object",
                  expected: "(Array<ArraySimpleProtobufNullable> | null)",
                  value: input.object,
                })) &&
                input.object.every(
                  (elem: any, _index10: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".object[" + _index10 + "]",
                        expected: "ArraySimpleProtobufNullable",
                        value: elem,
                      })) &&
                      $ao0(
                        elem,
                        _path + ".object[" + _index10 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".object[" + _index10 + "]",
                      expected: "ArraySimpleProtobufNullable",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "(Array<ArraySimpleProtobufNullable> | null)",
                value: input.object,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArraySimpleProtobufNullable",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ArraySimpleProtobufNullable",
              value: input,
            })
          );
        })(input, "$input", true);
    })(input, (p) => new CustomGuardError(p)),
  );
