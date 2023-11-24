import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_protobuf_createAssertEncode_TypeTagArray =
  _test_protobuf_assertEncode("TypeTagArray")<TypeTagArray>(TypeTagArray)({
    encode: (input: any): Uint8Array => {
      const assert = (input: any): TypeTagArray => {
        const __is = (input: any): input is TypeTagArray => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 <= input.items.length &&
            input.items.length <= 3 &&
            input.items.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
              (elem: any) =>
                "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            input.equal.length <= 10 &&
            input.equal.every(
              (elem: any) =>
                "number" === typeof elem && 10 <= elem && elem <= 10,
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagArray => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<TypeTagArray.Type>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TypeTagArray.Type",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TypeTagArray.Type",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<TypeTagArray.Type>",
                value: input.value,
              });
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.items) ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected:
                    '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                  value: input.items,
                })) &&
                (3 <= input.items.length ||
                  $guard(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<> & MinItems<3>",
                    value: input.items,
                  })) &&
                (input.items.length <= 3 ||
                  $guard(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<> & MaxItems<3>",
                    value: input.items,
                  })) &&
                input.items.every(
                  (elem: any, _index2: number) =>
                    ("string" === typeof elem &&
                      (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                        elem,
                      ) ||
                        $guard(_exceptionable, {
                          path: _path + ".items[" + _index2 + "]",
                          expected: 'string & Format<"uuid">',
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".items[" + _index2 + "]",
                      expected: '(string & Format<"uuid">)',
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".items",
                  expected:
                    '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<3>)',
                  value: input.items,
                })) &&
              (((Array.isArray(input.minItems) ||
                $guard(_exceptionable, {
                  path: _path + ".minItems",
                  expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                  value: input.minItems,
                })) &&
                (3 <= input.minItems.length ||
                  $guard(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "Array<> & MinItems<3>",
                    value: input.minItems,
                  })) &&
                input.minItems.every(
                  (elem: any, _index3: number) =>
                    ("number" === typeof elem &&
                      (Number.isFinite(elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".minItems[" + _index3 + "]",
                          expected: "number",
                          value: elem,
                        })) &&
                      (3 <= elem ||
                        $guard(_exceptionable, {
                          path: _path + ".minItems[" + _index3 + "]",
                          expected: "number & Minimum<3>",
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".minItems[" + _index3 + "]",
                      expected: "(number & Minimum<3>)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".minItems",
                  expected: "(Array<number & Minimum<3>> & MinItems<3>)",
                  value: input.minItems,
                })) &&
              (((Array.isArray(input.both) ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected:
                    '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                  value: input.both,
                })) &&
                (3 <= input.both.length ||
                  $guard(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array<> & MinItems<3>",
                    value: input.both,
                  })) &&
                (input.both.length <= 7 ||
                  $guard(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array<> & MaxItems<7>",
                    value: input.both,
                  })) &&
                input.both.every(
                  (elem: any, _index4: number) =>
                    ("string" === typeof elem &&
                      (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                        elem,
                      ) ||
                        $guard(_exceptionable, {
                          path: _path + ".both[" + _index4 + "]",
                          expected: 'string & Format<"uuid">',
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".both[" + _index4 + "]",
                      expected: '(string & Format<"uuid">)',
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".both",
                  expected:
                    '(Array<string & Format<"uuid">> & MinItems<3> & MaxItems<7>)',
                  value: input.both,
                })) &&
              (((Array.isArray(input.equal) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected:
                    "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
                  value: input.equal,
                })) &&
                (10 <= input.equal.length ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "Array<> & MinItems<10>",
                    value: input.equal,
                  })) &&
                (input.equal.length <= 10 ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "Array<> & MaxItems<10>",
                    value: input.equal,
                  })) &&
                input.equal.every(
                  (elem: any, _index5: number) =>
                    ("number" === typeof elem &&
                      (10 <= elem ||
                        $guard(_exceptionable, {
                          path: _path + ".equal[" + _index5 + "]",
                          expected: "number & Minimum<10>",
                          value: elem,
                        })) &&
                      (elem <= 10 ||
                        $guard(_exceptionable, {
                          path: _path + ".equal[" + _index5 + "]",
                          expected: "number & Maximum<10>",
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".equal[" + _index5 + "]",
                      expected: "(number & Minimum<10> & Maximum<10>)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".equal",
                  expected:
                    "(Array<number & Minimum<10> & Maximum<10>> & MinItems<10> & MaxItems<10>)",
                  value: input.equal,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagArray",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagArray",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: TypeTagArray): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            if (0 !== input.value.length) {
              for (const elem of input.value) {
                // 1 -> TypeTagArray.Type;
                writer.uint32(10);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
          };
          const $peo1 = (input: any): any => {
            // property "items";
            if (0 !== input.items.length) {
              for (const elem of input.items) {
                writer.uint32(10);
                writer.string(elem);
              }
            }
            // property "minItems";
            if (0 !== input.minItems.length) {
              writer.uint32(18);
              writer.fork();
              for (const elem of input.minItems) {
                writer.double(elem);
              }
              writer.ldelim();
            }
            // property "both";
            if (0 !== input.both.length) {
              for (const elem of input.both) {
                writer.uint32(26);
                writer.string(elem);
              }
            }
            // property "equal";
            if (0 !== input.equal.length) {
              writer.uint32(34);
              writer.fork();
              for (const elem of input.equal) {
                writer.double(elem);
              }
              writer.ldelim();
            }
          };
          const $io1 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 <= input.items.length &&
            input.items.length <= 3 &&
            input.items.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
              (elem: any) => "number" === typeof elem && 3 <= elem,
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            input.both.length <= 7 &&
            input.both.every(
              (elem: any) =>
                "string" === typeof elem &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  elem,
                ),
            ) &&
            Array.isArray(input.equal) &&
            10 <= input.equal.length &&
            input.equal.length <= 10 &&
            input.equal.every(
              (elem: any) =>
                "number" === typeof elem && 10 <= elem && elem <= 10,
            );
          //TypeTagArray;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input));
    },
    decode: (input: Uint8Array): typia.Resolved<TypeTagArray> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<TypeTagArray.Type>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          items: [] as any,
          minItems: [] as any,
          both: [] as any,
          equal: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<(string & Format<"uuid">)>;
              output.items.push(reader.string());
              break;
            case 2:
              // type: Array<(number & Minimum<3>)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.minItems.push(reader.double());
              } else output.minItems.push(reader.double());
              break;
            case 3:
              // type: Array<(string & Format<"uuid">)>;
              output.both.push(reader.string());
              break;
            case 4:
              // type: Array<(number & Minimum<10> & Maximum<10>)>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.equal.push(reader.double());
              } else output.equal.push(reader.double());
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
      'syntax = "proto3";\n\nmessage TypeTagArray {\n    repeated TypeTagArray.Type value = 1;\n    message Type {\n        repeated string items = 1;\n        repeated double minItems = 2;\n        repeated string both = 3;\n        repeated double equal = 4;\n    }\n}',
  });
