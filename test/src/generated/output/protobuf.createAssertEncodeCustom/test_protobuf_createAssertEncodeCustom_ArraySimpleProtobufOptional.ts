import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertEncodeCustom_ArraySimpleProtobufOptional =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    encode: (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArraySimpleProtobufOptional => {
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
                  (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
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
                    "number" === typeof elem && Number.isFinite(elem) && true,
                ))) &&
            (undefined === input.string ||
              (Array.isArray(input.string) &&
                input.string.every((elem: any) => "string" === typeof elem))) &&
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArraySimpleProtobufOptional => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.boolean ||
                ((Array.isArray(input.boolean) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(Array<boolean> | undefined)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                  input.boolean.every(
                    (elem: any, _index1: number) =>
                      "boolean" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "boolean",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(Array<boolean> | undefined)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (undefined === input.int32 ||
                ((Array.isArray(input.int32) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: '(Array<number & Type<"int32">> | undefined)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                  input.int32.every(
                    (elem: any, _index2: number) =>
                      ("number" === typeof elem &&
                        ((Math.floor(elem) === elem &&
                          -2147483648 <= elem &&
                          elem <= 2147483647) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int32[" + _index2 + "]",
                              expected: 'number & Type<"int32">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32[" + _index2 + "]",
                          expected: '(number & Type<"int32">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int32",
                    expected: '(Array<number & Type<"int32">> | undefined)',
                    value: input.int32,
                  },
                  errorFactory,
                )) &&
              (undefined === input.uint32 ||
                ((Array.isArray(input.uint32) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: '(Array<number & Type<"uint32">> | undefined)',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                  input.uint32.every(
                    (elem: any, _index3: number) =>
                      ("number" === typeof elem &&
                        ((Math.floor(elem) === elem &&
                          0 <= elem &&
                          elem <= 4294967295) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".uint32[" + _index3 + "]",
                              expected: 'number & Type<"uint32">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint32[" + _index3 + "]",
                          expected: '(number & Type<"uint32">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint32",
                    expected: '(Array<number & Type<"uint32">> | undefined)',
                    value: input.uint32,
                  },
                  errorFactory,
                )) &&
              (undefined === input.int64 ||
                ((Array.isArray(input.int64) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: '(Array<bigint & Type<"int64">> | undefined)',
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                  input.int64.every(
                    (elem: any, _index4: number) =>
                      ("bigint" === typeof elem &&
                        (true ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".int64[" + _index4 + "]",
                              expected: 'bigint & Type<"int64">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int64[" + _index4 + "]",
                          expected: '(bigint & Type<"int64">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".int64",
                    expected: '(Array<bigint & Type<"int64">> | undefined)',
                    value: input.int64,
                  },
                  errorFactory,
                )) &&
              (undefined === input.uint64 ||
                ((Array.isArray(input.uint64) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '(Array<bigint & Type<"uint64">> | undefined)',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                  input.uint64.every(
                    (elem: any, _index5: number) =>
                      ("bigint" === typeof elem &&
                        (BigInt(0) <= elem ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".uint64[" + _index5 + "]",
                              expected: 'bigint & Type<"uint64">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint64[" + _index5 + "]",
                          expected: '(bigint & Type<"uint64">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".uint64",
                    expected: '(Array<bigint & Type<"uint64">> | undefined)',
                    value: input.uint64,
                  },
                  errorFactory,
                )) &&
              (undefined === input.float ||
                ((Array.isArray(input.float) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: '(Array<number & Type<"float">> | undefined)',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                  input.float.every(
                    (elem: any, _index6: number) =>
                      ("number" === typeof elem &&
                        ((-1.175494351e38 <= elem && elem <= 3.4028235e38) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".float[" + _index6 + "]",
                              expected: 'number & Type<"float">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".float[" + _index6 + "]",
                          expected: '(number & Type<"float">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".float",
                    expected: '(Array<number & Type<"float">> | undefined)',
                    value: input.float,
                  },
                  errorFactory,
                )) &&
              (undefined === input.double ||
                ((Array.isArray(input.double) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: '(Array<number & Type<"double">> | undefined)',
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                  input.double.every(
                    (elem: any, _index7: number) =>
                      ("number" === typeof elem &&
                        (Number.isFinite(elem) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".double[" + _index7 + "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (true ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".double[" + _index7 + "]",
                              expected: 'number & Type<"double">',
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double[" + _index7 + "]",
                          expected: '(number & Type<"double">)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".double",
                    expected: '(Array<number & Type<"double">> | undefined)',
                    value: input.double,
                  },
                  errorFactory,
                )) &&
              (undefined === input.string ||
                ((Array.isArray(input.string) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(Array<string> | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                  input.string.every(
                    (elem: any, _index8: number) =>
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".string[" + _index8 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: "(Array<string> | undefined)",
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              (undefined === input.bytes ||
                ((Array.isArray(input.bytes) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "(Array<Uint8Array> | undefined)",
                      value: input.bytes,
                    },
                    errorFactory,
                  )) &&
                  input.bytes.every(
                    (elem: any, _index9: number) =>
                      elem instanceof Uint8Array ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".bytes[" + _index9 + "]",
                          expected: "Uint8Array",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".bytes",
                    expected: "(Array<Uint8Array> | undefined)",
                    value: input.bytes,
                  },
                  errorFactory,
                )) &&
              (undefined === input.object ||
                ((Array.isArray(input.object) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".object",
                      expected:
                        "(Array<ArraySimpleProtobufOptional> | undefined)",
                      value: input.object,
                    },
                    errorFactory,
                  )) &&
                  input.object.every(
                    (elem: any, _index10: number) =>
                      ((("object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem)) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".object[" + _index10 + "]",
                            expected: "ArraySimpleProtobufOptional",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(
                          elem,
                          _path + ".object[" + _index10 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".object[" + _index10 + "]",
                          expected: "ArraySimpleProtobufOptional",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".object",
                    expected:
                      "(Array<ArraySimpleProtobufOptional> | undefined)",
                    value: input.object,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArraySimpleProtobufOptional",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArraySimpleProtobufOptional",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: ArraySimpleProtobufOptional): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "boolean";
            if (undefined !== input.boolean) {
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
            if (undefined !== input.int32) {
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
            if (undefined !== input.uint32) {
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
            if (undefined !== input.int64) {
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
            if (undefined !== input.uint64) {
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
            if (undefined !== input.float) {
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
            if (undefined !== input.double) {
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
            if (undefined !== input.string) {
              if (0 !== input.string.length) {
                for (const elem of input.string) {
                  writer.uint32(66);
                  writer.string(elem);
                }
              }
            }
            // property "bytes";
            if (undefined !== input.bytes) {
              if (0 !== input.bytes.length) {
                for (const elem of input.bytes) {
                  writer.uint32(74);
                  writer.bytes(elem);
                }
              }
            }
            // property "object";
            if (undefined !== input.object) {
              if (0 !== input.object.length) {
                for (const elem of input.object) {
                  // 10 -> ArraySimpleProtobufOptional;
                  writer.uint32(82);
                  writer.fork();
                  $peo0(elem);
                  writer.ldelim();
                }
              }
            }
          };
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
                  (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
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
                  (elem: any) => "number" === typeof elem && true,
                ))) &&
            (undefined === input.string ||
              (Array.isArray(input.string) &&
                input.string.every((elem: any) => "string" === typeof elem))) &&
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
          //ArraySimpleProtobufOptional;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input, errorFactory));
    },
    decode: (
      input: Uint8Array,
    ): typia.Resolved<ArraySimpleProtobufOptional> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {} as any;
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
              // type: Array<ArraySimpleProtobufOptional>;
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
    },
    message:
      'syntax = "proto3";\n\nmessage ArraySimpleProtobufOptional {\n    repeated bool boolean = 1;\n    repeated int32 int32 = 2;\n    repeated uint32 uint32 = 3;\n    repeated int64 int64 = 4;\n    repeated uint64 uint64 = 5;\n    repeated float float = 6;\n    repeated double double = 7;\n    repeated string string = 8;\n    repeated bytes bytes = 9;\n    repeated ArraySimpleProtobufOptional object = 10;\n}',
  });
