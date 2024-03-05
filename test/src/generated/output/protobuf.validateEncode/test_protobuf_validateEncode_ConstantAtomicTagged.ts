import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_protobuf_validateEncode_ConstantAtomicTagged =
  _test_protobuf_validateEncode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    encode: (input) =>
      ((input: ConstantAtomicTagged): typia.IValidation<Uint8Array> => {
        const validate = (
          input: any,
        ): typia.IValidation<ConstantAtomicTagged> => {
          const errors = [] as any[];
          const __is = (input: any): input is ConstantAtomicTagged => {
            const $io0 = (input: any): boolean =>
              ("latest" === input.id ||
                ("string" === typeof input.id &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ))) &&
              (-1 === input.age ||
                ("number" === typeof input.age &&
                  Math.floor(input.age) === input.age &&
                  0 <= input.age &&
                  input.age <= 4294967295 &&
                  input.age <= 100));
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
            ): input is ConstantAtomicTagged => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "latest" === input.id ||
                    ("string" === typeof input.id &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        input.id,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '("latest" | (string & Format<"uuid">))',
                      value: input.id,
                    }),
                  -1 === input.age ||
                    ("number" === typeof input.age &&
                      ((Math.floor(input.age) === input.age &&
                        0 <= input.age &&
                        input.age <= 4294967295) ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: 'number & Type<"uint32">',
                          value: input.age,
                        })) &&
                      (input.age <= 100 ||
                        $report(_exceptionable, {
                          path: _path + ".age",
                          expected: "number & Maximum<100>",
                          value: input.age,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected:
                        '((number & Type<"uint32"> & Maximum<100>) | -1)',
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicTagged",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicTagged",
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
        const encode = (input: ConstantAtomicTagged): Uint8Array => {
          const $throws = (typia.protobuf.validateEncode as any).throws;
          const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
          const $Writer = (typia.protobuf.validateEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "id";
              writer.uint32(10);
              writer.string(input.id);
              // property "age";
              if (
                "number" === typeof input.age &&
                Math.floor(input.age) === input.age &&
                -2147483648 <= input.age &&
                input.age <= 2147483647
              ) {
                writer.uint32(16);
                writer.int32(input.age);
              } else if (
                "number" === typeof input.age &&
                Math.floor(input.age) === input.age &&
                0 <= input.age &&
                input.age <= 4294967295
              ) {
                writer.uint32(24);
                writer.uint32(input.age);
              } else
                $throws({
                  expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
                  value: input.age,
                });
            };
            //ConstantAtomicTagged;
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
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<ConstantAtomicTagged> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          age: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.id = reader.string();
              break;
            case 2:
              // int32;
              output.age = reader.int32();
              break;
            case 3:
              // uint32;
              output.age = reader.uint32();
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
      'syntax = "proto3";\n\nmessage ConstantAtomicTagged {\n  required string id = 1;\n  oneof age {\n    int32 v2 = 2;\n    uint32 v3 = 3;\n  }\n}',
  });
