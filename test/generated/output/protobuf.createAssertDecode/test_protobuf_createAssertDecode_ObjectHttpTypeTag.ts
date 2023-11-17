import typia from "../../../../src";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_protobuf_createAssertDecode_ObjectHttpTypeTag =
  _test_protobuf_assertDecode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpTypeTag> => {
      const decode = (input: Uint8Array): typia.Resolved<ObjectHttpTypeTag> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            int32: undefined as any,
            uint64: undefined as any,
            uuid: "" as any,
            range: [] as any,
            length: [] as any,
          };
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // int32;
                output.int32 = reader.int32();
                break;
              case 2:
                // uint64;
                output.uint64 = reader.uint64();
                break;
              case 3:
                // string;
                output.uuid = reader.string();
                break;
              case 4:
                // type: Array<(number & Minimum<3> & Maximum<7>)>;
                if (2 === (tag & 7)) {
                  const piece = reader.uint32() + reader.index();
                  while (reader.index() < piece)
                    output.range.push(reader.double());
                } else output.range.push(reader.double());
                break;
              case 5:
                // type: Array<(string & MinLength<3> & MaxLength<7>)>;
                output.length.push(reader.string());
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
      const assert = (input: any): ObjectHttpTypeTag => {
        const __is = (input: any): input is ObjectHttpTypeTag => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.int32 &&
            Math.floor(input.int32) === input.int32 &&
            -2147483648 <= input.int32 &&
            input.int32 <= 2147483647 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            "string" === typeof input.uuid &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              input.uuid,
            ) &&
            Array.isArray(input.range) &&
            10 <= input.range.length &&
            input.range.length <= 100 &&
            input.range.every(
              (elem: any) => "number" === typeof elem && 3 <= elem && elem <= 7,
            ) &&
            Array.isArray(input.length) &&
            10 <= input.length.length &&
            input.length.length <= 100 &&
            input.length.every(
              (elem: any) =>
                "string" === typeof elem &&
                3 <= elem.length &&
                elem.length <= 7,
            );
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpTypeTag => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.int32 &&
                ((Math.floor(input.int32) === input.int32 &&
                  -2147483648 <= input.int32 &&
                  input.int32 <= 2147483647) ||
                  $guard(_exceptionable, {
                    path: _path + ".int32",
                    expected: 'number & Type<"int32">',
                    value: input.int32,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".int32",
                  expected: '(number & Type<"int32">)',
                  value: input.int32,
                })) &&
              (("bigint" === typeof input.uint64 &&
                (BigInt(0) <= input.uint64 ||
                  $guard(_exceptionable, {
                    path: _path + ".uint64",
                    expected: 'bigint & Type<"uint64">',
                    value: input.uint64,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".uint64",
                  expected: '(bigint & Type<"uint64">)',
                  value: input.uint64,
                })) &&
              (("string" === typeof input.uuid &&
                (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                  input.uuid,
                ) ||
                  $guard(_exceptionable, {
                    path: _path + ".uuid",
                    expected: 'string & Format<"uuid">',
                    value: input.uuid,
                  }))) ||
                $guard(_exceptionable, {
                  path: _path + ".uuid",
                  expected: '(string & Format<"uuid">)',
                  value: input.uuid,
                })) &&
              (((Array.isArray(input.range) ||
                $guard(_exceptionable, {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                })) &&
                (10 <= input.range.length ||
                  $guard(_exceptionable, {
                    path: _path + ".range",
                    expected: "Array<> & MinItems<10>",
                    value: input.range,
                  })) &&
                (input.range.length <= 100 ||
                  $guard(_exceptionable, {
                    path: _path + ".range",
                    expected: "Array<> & MaxItems<100>",
                    value: input.range,
                  })) &&
                input.range.every(
                  (elem: any, _index1: number) =>
                    ("number" === typeof elem &&
                      (3 <= elem ||
                        $guard(_exceptionable, {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Minimum<3>",
                          value: elem,
                        })) &&
                      (elem <= 7 ||
                        $guard(_exceptionable, {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "number & Maximum<7>",
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".range[" + _index1 + "]",
                      expected: "(number & Minimum<3> & Maximum<7>)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".range",
                  expected:
                    "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.range,
                })) &&
              (((Array.isArray(input.length) ||
                $guard(_exceptionable, {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                })) &&
                (10 <= input.length.length ||
                  $guard(_exceptionable, {
                    path: _path + ".length",
                    expected: "Array<> & MinItems<10>",
                    value: input.length,
                  })) &&
                (input.length.length <= 100 ||
                  $guard(_exceptionable, {
                    path: _path + ".length",
                    expected: "Array<> & MaxItems<100>",
                    value: input.length,
                  })) &&
                input.length.every(
                  (elem: any, _index2: number) =>
                    ("string" === typeof elem &&
                      (3 <= elem.length ||
                        $guard(_exceptionable, {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MinLength<3>",
                          value: elem,
                        })) &&
                      (elem.length <= 7 ||
                        $guard(_exceptionable, {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "string & MaxLength<7>",
                          value: elem,
                        }))) ||
                    $guard(_exceptionable, {
                      path: _path + ".length[" + _index2 + "]",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".length",
                  expected:
                    "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                  value: input.length,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectHttpTypeTag",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpTypeTag",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const output = decode(input);
      return assert(output) as any;
    },
    encode: (input: ObjectHttpTypeTag): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "int32";
          writer.uint32(8);
          writer.int32(input.int32);
          // property "uint64";
          writer.uint32(16);
          writer.uint64(input.uint64);
          // property "uuid";
          writer.uint32(26);
          writer.string(input.uuid);
          // property "range";
          if (0 !== input.range.length) {
            writer.uint32(34);
            writer.fork();
            for (const elem of input.range) {
              writer.double(elem);
            }
            writer.ldelim();
          }
          // property "length";
          if (0 !== input.length.length) {
            for (const elem of input.length) {
              writer.uint32(42);
              writer.string(elem);
            }
          }
        };
        //ObjectHttpTypeTag;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
