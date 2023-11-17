import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_protobuf_createValidateEncode_ObjectHttpNullable =
  _test_protobuf_validateEncode("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )({
    encode: (input) =>
      ((input: ObjectHttpNullable): typia.IValidation<Uint8Array> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectHttpNullable> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpNullable => {
            const $io0 = (input: any): boolean =>
              (null === input.boolean || "boolean" === typeof input.boolean) &&
              (null === input.bigint || "bigint" === typeof input.bigint) &&
              (null === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number) &&
                  1 <= input.number)) &&
              (null === input.string || "string" === typeof input.string) &&
              (null === input.constantBoolean ||
                true === input.constantBoolean) &&
              (null === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint) &&
              (null === input.constantNumber ||
                3 === input.constantNumber ||
                2 === input.constantNumber ||
                1 === input.constantNumber) &&
              (null === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                "one" === input.constantString) &&
              (null === input.nullableArray ||
                (Array.isArray(input.nullableArray) &&
                  input.nullableArray.every(
                    (elem: any) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  )));
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.protobuf.validateEncode as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpNullable => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  null === input.boolean ||
                    "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "(boolean | null)",
                      value: input.boolean,
                    }),
                  null === input.bigint ||
                    "bigint" === typeof input.bigint ||
                    $report(_exceptionable, {
                      path: _path + ".bigint",
                      expected: "(bigint | null)",
                      value: input.bigint,
                    }),
                  null === input.number ||
                    ("number" === typeof input.number &&
                      (Number.isFinite(input.number) ||
                        $report(_exceptionable, {
                          path: _path + ".number",
                          expected: "number",
                          value: input.number,
                        })) &&
                      (1 <= input.number ||
                        $report(_exceptionable, {
                          path: _path + ".number",
                          expected: "number & Minimum<1>",
                          value: input.number,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "((number & Minimum<1>) | null)",
                      value: input.number,
                    }),
                  null === input.string ||
                    "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "(null | string)",
                      value: input.string,
                    }),
                  null === input.constantBoolean ||
                    true === input.constantBoolean ||
                    $report(_exceptionable, {
                      path: _path + ".constantBoolean",
                      expected: "(null | true)",
                      value: input.constantBoolean,
                    }),
                  null === input.constantBigint ||
                    BigInt(1) === input.constantBigint ||
                    BigInt(2) === input.constantBigint ||
                    BigInt(3) === input.constantBigint ||
                    $report(_exceptionable, {
                      path: _path + ".constantBigint",
                      expected: "(1 | 2 | 3 | null)",
                      value: input.constantBigint,
                    }),
                  null === input.constantNumber ||
                    3 === input.constantNumber ||
                    2 === input.constantNumber ||
                    1 === input.constantNumber ||
                    $report(_exceptionable, {
                      path: _path + ".constantNumber",
                      expected: "(1 | 2 | 3 | null)",
                      value: input.constantNumber,
                    }),
                  null === input.constantString ||
                    "three" === input.constantString ||
                    "two" === input.constantString ||
                    "one" === input.constantString ||
                    $report(_exceptionable, {
                      path: _path + ".constantString",
                      expected: '("one" | "three" | "two" | null)',
                      value: input.constantString,
                    }),
                  null === input.nullableArray ||
                    ((Array.isArray(input.nullableArray) ||
                      $report(_exceptionable, {
                        path: _path + ".nullableArray",
                        expected: "(Array<number> | null)",
                        value: input.nullableArray,
                      })) &&
                      input.nullableArray
                        .map(
                          (elem: any, _index1: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $report(_exceptionable, {
                              path: _path + ".nullableArray[" + _index1 + "]",
                              expected: "number",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".nullableArray",
                      expected: "(Array<number> | null)",
                      value: input.nullableArray,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpNullable",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpNullable",
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
        const encode = (input: ObjectHttpNullable): Uint8Array => {
          const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
          const $Writer = (typia.protobuf.validateEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "boolean";
              if (null !== input.boolean) {
                writer.uint32(8);
                writer.bool(input.boolean);
              }
              // property "bigint";
              if (null !== input.bigint) {
                writer.uint32(16);
                writer.int64(input.bigint);
              }
              // property "number";
              if (null !== input.number) {
                writer.uint32(25);
                writer.double(input.number);
              }
              // property "string";
              if (null !== input.string) {
                writer.uint32(34);
                writer.string(input.string);
              }
              // property "constantBoolean";
              if (null !== input.constantBoolean) {
                writer.uint32(40);
                writer.bool(input.constantBoolean);
              }
              // property "constantBigint";
              if (null !== input.constantBigint) {
                writer.uint32(48);
                writer.uint64(input.constantBigint);
              }
              // property "constantNumber";
              if (null !== input.constantNumber) {
                writer.uint32(56);
                writer.int32(input.constantNumber);
              }
              // property "constantString";
              if (null !== input.constantString) {
                writer.uint32(66);
                writer.string(input.constantString);
              }
              // property "nullableArray";
              if (null !== input.nullableArray) {
                if (0 !== input.nullableArray.length) {
                  writer.uint32(74);
                  writer.fork();
                  for (const elem of input.nullableArray) {
                    writer.double(elem);
                  }
                  writer.ldelim();
                }
              }
            };
            //ObjectHttpNullable;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        const output = validate(input) as any;
        if (output.success) output.data = encode(input);
        return output;
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpNullable> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          boolean: null as any,
          bigint: null as any,
          number: null as any,
          string: null as any,
          constantBoolean: null as any,
          constantBigint: null as any,
          constantNumber: null as any,
          constantString: null as any,
          nullableArray: null as any,
        };
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // bool;
              output.boolean = reader.bool();
              break;
            case 2:
              // int64;
              output.bigint = reader.int64();
              break;
            case 3:
              // double;
              output.number = reader.double();
              break;
            case 4:
              // string;
              output.string = reader.string();
              break;
            case 5:
              // bool;
              output.constantBoolean = reader.bool();
              break;
            case 6:
              // uint64;
              output.constantBigint = reader.uint64();
              break;
            case 7:
              // int32;
              output.constantNumber = reader.int32();
              break;
            case 8:
              // string;
              output.constantString = reader.string();
              break;
            case 9:
              // type: Array<number>;
              output.nullableArray ??= [] as any[];
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.nullableArray.push(reader.double());
              } else output.nullableArray.push(reader.double());
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
      'syntax = "proto3";\n\nmessage ObjectHttpNullable {\n    optional bool boolean = 1;\n    optional int64 bigint = 2;\n    optional double number = 3;\n    optional string string = 4;\n    optional bool constantBoolean = 5;\n    optional uint64 constantBigint = 6;\n    optional int32 constantNumber = 7;\n    optional string constantString = 8;\n    repeated double nullableArray = 9;\n}',
  });
