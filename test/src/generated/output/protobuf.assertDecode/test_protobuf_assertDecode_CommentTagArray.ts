import typia from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_protobuf_createAssertDecode_CommentTagArray =
  _test_protobuf_assertDecode("CommentTagArray")<CommentTagArray>(
    CommentTagArray,
  )({
    decode: (input) =>
      ((input: Uint8Array): typia.Resolved<CommentTagArray> => {
        const decode = (input: Uint8Array): typia.Resolved<CommentTagArray> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // type: Array<CommentTagArray.Type>;
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
                  // type: Array<string>;
                  output.items.push(reader.string());
                  break;
                case 2:
                  // type: Array<number>;
                  if (2 === (tag & 7)) {
                    const piece = reader.uint32() + reader.index();
                    while (reader.index() < piece)
                      output.minItems.push(reader.double());
                  } else output.minItems.push(reader.double());
                  break;
                case 3:
                  // type: Array<string>;
                  output.both.push(reader.string());
                  break;
                case 4:
                  // type: Array<number>;
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
          const reader = new $ProtobufReader(input);
          return $pdo0(reader);
        };
        const assert = (input: any): CommentTagArray => {
          const __is = (input: any): input is CommentTagArray => {
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
              input.items.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.minItems) &&
              3 <= input.minItems.length &&
              input.minItems.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ) &&
              Array.isArray(input.both) &&
              3 <= input.both.length &&
              input.both.length <= 7 &&
              input.both.every((elem: any) => "string" === typeof elem) &&
              Array.isArray(input.equal) &&
              10 <= input.equal.length &&
              input.equal.length <= 10 &&
              input.equal.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagArray => {
              // @ts-ignore;
              declare const require: (lib: string) => any;
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.protobuf.assertDecode",
              );
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<CommentTagArray.Type>",
                    value: input.value,
                  })) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "CommentTagArray.Type",
                          value: elem,
                        })) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "CommentTagArray.Type",
                        value: elem,
                      }),
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<CommentTagArray.Type>",
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
                    expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
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
                      "string" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + ".items[" + _index2 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".items",
                    expected: "(Array<string> & MinItems<3> & MaxItems<3>)",
                    value: input.items,
                  })) &&
                (((Array.isArray(input.minItems) ||
                  $guard(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "(Array<number> & MinItems<3>)",
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
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(_exceptionable, {
                        path: _path + ".minItems[" + _index3 + "]",
                        expected: "number",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "(Array<number> & MinItems<3>)",
                    value: input.minItems,
                  })) &&
                (((Array.isArray(input.both) ||
                  $guard(_exceptionable, {
                    path: _path + ".both",
                    expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
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
                      "string" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + ".both[" + _index4 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".both",
                    expected: "(Array<string> & MinItems<3> & MaxItems<7>)",
                    value: input.both,
                  })) &&
                (((Array.isArray(input.equal) ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "(Array<number> & MinItems<10> & MaxItems<10>)",
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
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(_exceptionable, {
                        path: _path + ".equal[" + _index5 + "]",
                        expected: "number",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".equal",
                    expected: "(Array<number> & MinItems<10> & MaxItems<10>)",
                    value: input.equal,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "CommentTagArray",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "CommentTagArray",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output) as any;
      })(input),
    encode: (input: CommentTagArray): Uint8Array => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> CommentTagArray.Type;
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
          input.items.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every((elem: any) => "number" === typeof elem) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.equal) &&
          10 <= input.equal.length &&
          input.equal.length <= 10 &&
          input.equal.every((elem: any) => "number" === typeof elem);
        //CommentTagArray;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
