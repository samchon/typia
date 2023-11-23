import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertDecode_MapSimpleProtobuf =
  _test_protobuf_assertDecode("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )({
    decode: (input: Uint8Array): typia.Resolved<MapSimpleProtobuf> => {
      const decode = (input: Uint8Array): typia.Resolved<MapSimpleProtobuf> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: new Map() as any,
            int32: new Map() as any,
            bigint: new Map() as any,
            double: new Map() as any,
            string: new Map() as any,
            bytes: new Map() as any,
            objects: new Map() as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Map<string, boolean>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: undefined as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // bool;
                        entry.value = reader.bool();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.boolean.set(entry.key, entry.value);
                })();
                break;
              case 2:
                // type: Map<string, (number & Type<"int32">)>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: undefined as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // int32;
                        entry.value = reader.int32();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.int32.set(entry.key, entry.value);
                })();
                break;
              case 3:
                // type: Map<string, bigint>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: undefined as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // int64;
                        entry.value = reader.int64();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.bigint.set(entry.key, entry.value);
                })();
                break;
              case 4:
                // type: Map<string, number>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: undefined as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // double;
                        entry.value = reader.double();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.double.set(entry.key, entry.value);
                })();
                break;
              case 5:
                // type: Map<string, (string & MinLength<1>)>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: "" as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // string;
                        entry.value = reader.string();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.string.set(entry.key, entry.value);
                })();
                break;
              case 6:
                // type: Map<string, Uint8Array>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: new Uint8Array() as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // bytes;
                        entry.value = reader.bytes();
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.bytes.set(entry.key, entry.value);
                })();
                break;
              case 7:
                // type: Map<string, MapSimpleProtobuf>;
                (() => {
                  const piece = reader.uint32() + reader.index();
                  const entry = {
                    key: "" as any,
                    value: undefined as any,
                  } as any;
                  while (reader.index() < piece) {
                    const kind = reader.uint32();
                    switch (kind >>> 3) {
                      case 1:
                        // string;
                        entry.key = reader.string();
                        break;
                      case 2:
                        // MapSimpleProtobuf;
                        entry.value = $pdo0(reader, reader.uint32());
                        break;
                      default:
                        reader.skipType(kind & 7);
                        break;
                    }
                  }
                  output.objects.set(entry.key, entry.value);
                })();
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
      const assert = (input: any): MapSimpleProtobuf => {
        const __is = (input: any): input is MapSimpleProtobuf => {
          const $io0 = (input: any): boolean =>
            input.boolean instanceof Map &&
            (() =>
              [...input.boolean].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "boolean" === typeof elem[1],
              ))() &&
            input.int32 instanceof Map &&
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
              ))() &&
            input.bigint instanceof Map &&
            (() =>
              [...input.bigint].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "bigint" === typeof elem[1],
              ))() &&
            input.double instanceof Map &&
            (() =>
              [...input.double].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "number" === typeof elem[1] &&
                  Number.isFinite(elem[1]),
              ))() &&
            input.string instanceof Map &&
            (() =>
              [...input.string].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "string" === typeof elem[1] &&
                  1 <= elem[1].length,
              ))() &&
            input.bytes instanceof Map &&
            (() =>
              [...input.bytes].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  elem[1] instanceof Uint8Array,
              ))() &&
            input.objects instanceof Map &&
            (() =>
              [...input.objects].every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.length === 2 &&
                  "string" === typeof elem[0] &&
                  "object" === typeof elem[1] &&
                  null !== elem[1] &&
                  $io0(elem[1]),
              ))();
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is MapSimpleProtobuf => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((input.boolean instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "Map<string, boolean>",
                  value: input.boolean,
                })) &&
                (() =>
                  [...input.boolean].every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "[string, boolean]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".boolean[" + _index1 + "]",
                            expected: "[string, boolean]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".boolean[" + _index1 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        ("boolean" === typeof elem[1] ||
                          $guard(_exceptionable, {
                            path: _path + ".boolean[" + _index1 + "][1]",
                            expected: "boolean",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".boolean[" + _index1 + "]",
                        expected: "[string, boolean]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".boolean",
                  expected: "Map<string, boolean>",
                  value: input.boolean,
                })) &&
              (((input.int32 instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".int32",
                  expected: 'Map<string, (number & Type<"int32">)>',
                  value: input.int32,
                })) &&
                (() =>
                  [...input.int32].every(
                    (elem: any, _index2: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".int32[" + _index2 + "]",
                          expected: '[string, (number & Type<"int32">)]',
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".int32[" + _index2 + "]",
                            expected: '[string, (number & Type<"int32">)]',
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".int32[" + _index2 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        (("number" === typeof elem[1] &&
                          ((Math.floor(elem[1]) === elem[1] &&
                            -2147483648 <= elem[1] &&
                            elem[1] <= 2147483647) ||
                            $guard(_exceptionable, {
                              path: _path + ".int32[" + _index2 + "][1]",
                              expected: 'number & Type<"int32">',
                              value: elem[1],
                            }))) ||
                          $guard(_exceptionable, {
                            path: _path + ".int32[" + _index2 + "][1]",
                            expected: '(number & Type<"int32">)',
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".int32[" + _index2 + "]",
                        expected: '[string, (number & Type<"int32">)]',
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".int32",
                  expected: 'Map<string, (number & Type<"int32">)>',
                  value: input.int32,
                })) &&
              (((input.bigint instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".bigint",
                  expected: "Map<string, bigint>",
                  value: input.bigint,
                })) &&
                (() =>
                  [...input.bigint].every(
                    (elem: any, _index3: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".bigint[" + _index3 + "]",
                          expected: "[string, bigint]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".bigint[" + _index3 + "]",
                            expected: "[string, bigint]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".bigint[" + _index3 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        ("bigint" === typeof elem[1] ||
                          $guard(_exceptionable, {
                            path: _path + ".bigint[" + _index3 + "][1]",
                            expected: "bigint",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".bigint[" + _index3 + "]",
                        expected: "[string, bigint]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".bigint",
                  expected: "Map<string, bigint>",
                  value: input.bigint,
                })) &&
              (((input.double instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".double",
                  expected: "Map<string, number>",
                  value: input.double,
                })) &&
                (() =>
                  [...input.double].every(
                    (elem: any, _index4: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".double[" + _index4 + "]",
                          expected: "[string, number]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".double[" + _index4 + "]",
                            expected: "[string, number]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".double[" + _index4 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        (("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $guard(_exceptionable, {
                            path: _path + ".double[" + _index4 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".double[" + _index4 + "]",
                        expected: "[string, number]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".double",
                  expected: "Map<string, number>",
                  value: input.double,
                })) &&
              (((input.string instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "Map<string, (string & MinLength<1>)>",
                  value: input.string,
                })) &&
                (() =>
                  [...input.string].every(
                    (elem: any, _index5: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".string[" + _index5 + "]",
                          expected: "[string, (string & MinLength<1>)]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".string[" + _index5 + "]",
                            expected: "[string, (string & MinLength<1>)]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".string[" + _index5 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        (("string" === typeof elem[1] &&
                          (1 <= elem[1].length ||
                            $guard(_exceptionable, {
                              path: _path + ".string[" + _index5 + "][1]",
                              expected: "string & MinLength<1>",
                              value: elem[1],
                            }))) ||
                          $guard(_exceptionable, {
                            path: _path + ".string[" + _index5 + "][1]",
                            expected: "(string & MinLength<1>)",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".string[" + _index5 + "]",
                        expected: "[string, (string & MinLength<1>)]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".string",
                  expected: "Map<string, (string & MinLength<1>)>",
                  value: input.string,
                })) &&
              (((input.bytes instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".bytes",
                  expected: "Map<string, Uint8Array>",
                  value: input.bytes,
                })) &&
                (() =>
                  [...input.bytes].every(
                    (elem: any, _index6: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".bytes[" + _index6 + "]",
                          expected: "[string, Uint8Array]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".bytes[" + _index6 + "]",
                            expected: "[string, Uint8Array]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".bytes[" + _index6 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        (elem[1] instanceof Uint8Array ||
                          $guard(_exceptionable, {
                            path: _path + ".bytes[" + _index6 + "][1]",
                            expected: "Uint8Array",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".bytes[" + _index6 + "]",
                        expected: "[string, Uint8Array]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".bytes",
                  expected: "Map<string, Uint8Array>",
                  value: input.bytes,
                })) &&
              (((input.objects instanceof Map ||
                $guard(_exceptionable, {
                  path: _path + ".objects",
                  expected: "Map<string, MapSimpleProtobuf>",
                  value: input.objects,
                })) &&
                (() =>
                  [...input.objects].every(
                    (elem: any, _index7: number) =>
                      ((Array.isArray(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".objects[" + _index7 + "]",
                          expected: "[string, MapSimpleProtobuf]",
                          value: elem,
                        })) &&
                        (elem.length === 2 ||
                          $guard(_exceptionable, {
                            path: _path + ".objects[" + _index7 + "]",
                            expected: "[string, MapSimpleProtobuf]",
                            value: elem,
                          })) &&
                        ("string" === typeof elem[0] ||
                          $guard(_exceptionable, {
                            path: _path + ".objects[" + _index7 + "][0]",
                            expected: "string",
                            value: elem[0],
                          })) &&
                        (((("object" === typeof elem[1] && null !== elem[1]) ||
                          $guard(_exceptionable, {
                            path: _path + ".objects[" + _index7 + "][1]",
                            expected: "MapSimpleProtobuf",
                            value: elem[1],
                          })) &&
                          $ao0(
                            elem[1],
                            _path + ".objects[" + _index7 + "][1]",
                            true && _exceptionable,
                          )) ||
                          $guard(_exceptionable, {
                            path: _path + ".objects[" + _index7 + "][1]",
                            expected: "MapSimpleProtobuf",
                            value: elem[1],
                          }))) ||
                      $guard(_exceptionable, {
                        path: _path + ".objects[" + _index7 + "]",
                        expected: "[string, MapSimpleProtobuf]",
                        value: elem,
                      }),
                  ))()) ||
                $guard(_exceptionable, {
                  path: _path + ".objects",
                  expected: "Map<string, MapSimpleProtobuf>",
                  value: input.objects,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "MapSimpleProtobuf",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "MapSimpleProtobuf",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output) as any;
    },
    encode: (input: MapSimpleProtobuf): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          for (const [key, value] of input.boolean) {
            writer.uint32(10);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(16);
            writer.bool(value);
            writer.ldelim();
          }
          // property "int32";
          for (const [key, value] of input.int32) {
            writer.uint32(18);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(16);
            writer.int32(value);
            writer.ldelim();
          }
          // property "bigint";
          for (const [key, value] of input.bigint) {
            writer.uint32(26);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(16);
            writer.int64(value);
            writer.ldelim();
          }
          // property "double";
          for (const [key, value] of input.double) {
            writer.uint32(34);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(17);
            writer.double(value);
            writer.ldelim();
          }
          // property "string";
          for (const [key, value] of input.string) {
            writer.uint32(42);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(18);
            writer.string(value);
            writer.ldelim();
          }
          // property "bytes";
          for (const [key, value] of input.bytes) {
            writer.uint32(50);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            writer.uint32(18);
            writer.bytes(value);
            writer.ldelim();
          }
          // property "objects";
          for (const [key, value] of input.objects) {
            writer.uint32(58);
            writer.fork();
            writer.uint32(10);
            writer.string(key);
            // 2 -> MapSimpleProtobuf;
            writer.uint32(18);
            writer.fork();
            $peo0(value);
            writer.ldelim();
            writer.ldelim();
          }
        };
        const $io0 = (input: any): boolean =>
          input.boolean instanceof Map &&
          (() =>
            [...input.boolean].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "boolean" === typeof elem[1],
            ))() &&
          input.int32 instanceof Map &&
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
            ))() &&
          input.bigint instanceof Map &&
          (() =>
            [...input.bigint].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "bigint" === typeof elem[1],
            ))() &&
          input.double instanceof Map &&
          (() =>
            [...input.double].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "number" === typeof elem[1],
            ))() &&
          input.string instanceof Map &&
          (() =>
            [...input.string].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "string" === typeof elem[1] &&
                1 <= elem[1].length,
            ))() &&
          input.bytes instanceof Map &&
          (() =>
            [...input.bytes].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                elem[1] instanceof Uint8Array,
            ))() &&
          input.objects instanceof Map &&
          (() =>
            [...input.objects].every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.length === 2 &&
                "string" === typeof elem[0] &&
                "object" === typeof elem[1] &&
                null !== elem[1] &&
                $io0(elem[1]),
            ))();
        //MapSimpleProtobuf;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
