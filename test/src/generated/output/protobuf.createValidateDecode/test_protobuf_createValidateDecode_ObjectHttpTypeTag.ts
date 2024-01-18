import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_protobuf_createValidateDecode_ObjectHttpTypeTag =
  _test_protobuf_validateDecode("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectHttpTypeTag>> => {
      const validate = (input: any): typia.IValidation<ObjectHttpTypeTag> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpTypeTag => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.int32 &&
                  ((Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647) ||
                    $report(_exceptionable, {
                      path: _path + ".int32",
                      expected: 'number & Type<"int32">',
                      value: input.int32,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".int32",
                    expected: '(number & Type<"int32">)',
                    value: input.int32,
                  }),
                ("bigint" === typeof input.uint64 &&
                  (BigInt(0) <= input.uint64 ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: 'bigint & Type<"uint64">',
                      value: input.uint64,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".uint64",
                    expected: '(bigint & Type<"uint64">)',
                    value: input.uint64,
                  }),
                ("string" === typeof input.uuid &&
                  (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    input.uuid,
                  ) ||
                    $report(_exceptionable, {
                      path: _path + ".uuid",
                      expected: 'string & Format<"uuid">',
                      value: input.uuid,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".uuid",
                    expected: '(string & Format<"uuid">)',
                    value: input.uuid,
                  }),
                ((Array.isArray(input.range) ||
                  $report(_exceptionable, {
                    path: _path + ".range",
                    expected:
                      "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                    value: input.range,
                  })) &&
                  (10 <= input.range.length ||
                    $report(_exceptionable, {
                      path: _path + ".range",
                      expected: "Array<> & MinItems<10>",
                      value: input.range,
                    })) &&
                  (input.range.length <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".range",
                      expected: "Array<> & MaxItems<100>",
                      value: input.range,
                    })) &&
                  input.range
                    .map(
                      (elem: any, _index1: number) =>
                        ("number" === typeof elem &&
                          (3 <= elem ||
                            $report(_exceptionable, {
                              path: _path + ".range[" + _index1 + "]",
                              expected: "number & Minimum<3>",
                              value: elem,
                            })) &&
                          (elem <= 7 ||
                            $report(_exceptionable, {
                              path: _path + ".range[" + _index1 + "]",
                              expected: "number & Maximum<7>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + ".range[" + _index1 + "]",
                          expected: "(number & Minimum<3> & Maximum<7>)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".range",
                    expected:
                      "(Array<number & Minimum<3> & Maximum<7>> & MinItems<10> & MaxItems<100>)",
                    value: input.range,
                  }),
                ((Array.isArray(input.length) ||
                  $report(_exceptionable, {
                    path: _path + ".length",
                    expected:
                      "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                    value: input.length,
                  })) &&
                  (10 <= input.length.length ||
                    $report(_exceptionable, {
                      path: _path + ".length",
                      expected: "Array<> & MinItems<10>",
                      value: input.length,
                    })) &&
                  (input.length.length <= 100 ||
                    $report(_exceptionable, {
                      path: _path + ".length",
                      expected: "Array<> & MaxItems<100>",
                      value: input.length,
                    })) &&
                  input.length
                    .map(
                      (elem: any, _index2: number) =>
                        ("string" === typeof elem &&
                          (3 <= elem.length ||
                            $report(_exceptionable, {
                              path: _path + ".length[" + _index2 + "]",
                              expected: "string & MinLength<3>",
                              value: elem,
                            })) &&
                          (elem.length <= 7 ||
                            $report(_exceptionable, {
                              path: _path + ".length[" + _index2 + "]",
                              expected: "string & MaxLength<7>",
                              value: elem,
                            }))) ||
                        $report(_exceptionable, {
                          path: _path + ".length[" + _index2 + "]",
                          expected: "(string & MinLength<3> & MaxLength<7>)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".length",
                    expected:
                      "(Array<string & MinLength<3> & MaxLength<7>> & MinItems<10> & MaxItems<100>)",
                    value: input.length,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpTypeTag",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpTypeTag",
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
      const decode = (input: Uint8Array): typia.Resolved<ObjectHttpTypeTag> => {
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            int32: undefined as any,
            uint64: undefined as any,
            uuid: "" as any,
            range: [] as any,
            length: [] as any,
          } as any;
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
        const reader = new $ProtobufReader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      return validate(output) as any;
    },
    encode: (input: ObjectHttpTypeTag): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
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
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
