import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobufNullable } from "../../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createValidateDecode_ArraySimpleProtobufNullable =
  _test_protobuf_validateDecode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ArraySimpleProtobufNullable>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ArraySimpleProtobufNullable> => {
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
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
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
                      expected: "(Array<ArraySimpleProtobufNullable> | null)",
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
      };
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ArraySimpleProtobufNullable> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: null as any,
            int32: null as any,
            uint32: null as any,
            int64: null as any,
            uint64: null as any,
            float: null as any,
            double: null as any,
            string: null as any,
            bytes: null as any,
            object: null as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<boolean>;
                output.boolean ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.boolean.push(reader.bool());
                } else output.boolean.push(reader.bool());
                break;
              case 2:
                // type: Array<(number & Type<"int32">)>;
                output.int32 ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.int32.push(reader.int32());
                } else output.int32.push(reader.int32());
                break;
              case 3:
                // type: Array<(number & Type<"uint32">)>;
                output.uint32 ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.uint32.push(reader.uint32());
                } else output.uint32.push(reader.uint32());
                break;
              case 4:
                // type: Array<(bigint & Type<"int64">)>;
                output.int64 ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.int64.push(reader.int64());
                } else output.int64.push(reader.int64());
                break;
              case 5:
                // type: Array<(bigint & Type<"uint64">)>;
                output.uint64 ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.uint64.push(reader.uint64());
                } else output.uint64.push(reader.uint64());
                break;
              case 6:
                // type: Array<(number & Type<"float">)>;
                output.float ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.float.push(reader.float());
                } else output.float.push(reader.float());
                break;
              case 7:
                // type: Array<(number & Type<"double">)>;
                output.double ??= [] as any[];
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.double.push(reader.double());
                } else output.double.push(reader.double());
                break;
              case 8:
                // type: Array<string>;
                output.string ??= [] as any[];
                output.string.push(reader.string());
                break;
              case 9:
                // type: Array<Uint8Array>;
                output.bytes ??= [] as any[];
                output.bytes.push(reader.bytes());
                break;
              case 10:
                // type: Array<ArraySimpleProtobufNullable>;
                output.object ??= [] as any[];
                output.object.push($pdo0(reader, reader.uint32()));
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      return validate(output) as any;
    },
    encode: (input: ArraySimpleProtobufNullable): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (null !== input.boolean) {
            if (0 !== input.boolean.length) {
              writer.uint32(10);
              writer.fork();
              for (const elem of input.boolean) {
                writer.bool(elem);
              }
              writer.ldelim();
            }
          }
          // property "int32";
          if (null !== input.int32) {
            if (0 !== input.int32.length) {
              writer.uint32(18);
              writer.fork();
              for (const elem of input.int32) {
                writer.int32(elem);
              }
              writer.ldelim();
            }
          }
          // property "uint32";
          if (null !== input.uint32) {
            if (0 !== input.uint32.length) {
              writer.uint32(26);
              writer.fork();
              for (const elem of input.uint32) {
                writer.uint32(elem);
              }
              writer.ldelim();
            }
          }
          // property "int64";
          if (null !== input.int64) {
            if (0 !== input.int64.length) {
              writer.uint32(34);
              writer.fork();
              for (const elem of input.int64) {
                writer.int64(elem);
              }
              writer.ldelim();
            }
          }
          // property "uint64";
          if (null !== input.uint64) {
            if (0 !== input.uint64.length) {
              writer.uint32(42);
              writer.fork();
              for (const elem of input.uint64) {
                writer.uint64(elem);
              }
              writer.ldelim();
            }
          }
          // property "float";
          if (null !== input.float) {
            if (0 !== input.float.length) {
              writer.uint32(50);
              writer.fork();
              for (const elem of input.float) {
                writer.float(elem);
              }
              writer.ldelim();
            }
          }
          // property "double";
          if (null !== input.double) {
            if (0 !== input.double.length) {
              writer.uint32(58);
              writer.fork();
              for (const elem of input.double) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          }
          // property "string";
          if (null !== input.string) {
            if (0 !== input.string.length) {
              for (const elem of input.string) {
                writer.uint32(66);
                writer.string(elem);
              }
            }
          }
          // property "bytes";
          if (null !== input.bytes) {
            if (0 !== input.bytes.length) {
              for (const elem of input.bytes) {
                writer.uint32(74);
                writer.bytes(elem);
              }
            }
          }
          // property "object";
          if (null !== input.object) {
            if (0 !== input.object.length) {
              for (const elem of input.object) {
                // 10 -> ArraySimpleProtobufNullable;
                writer.uint32(82);
                writer.fork();
                $peo0(elem);
                writer.ldelim();
              }
            }
          }
        };
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
                (elem: any) => "number" === typeof elem && true,
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
        //ArraySimpleProtobufNullable;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
