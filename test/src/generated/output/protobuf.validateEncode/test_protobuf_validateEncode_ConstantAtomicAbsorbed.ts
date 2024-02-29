import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createValidateEncode_ConstantAtomicAbsorbed =
  _test_protobuf_validateEncode(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    encode: (input) =>
      ((input: ConstantAtomicAbsorbed): typia.IValidation<Uint8Array> => {
        const validate = (
          input: any,
        ): typia.IValidation<ConstantAtomicAbsorbed> => {
          const errors = [] as any[];
          const __is = (input: any): input is ConstantAtomicAbsorbed => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).id &&
              "number" === typeof (input as any).age &&
              Number.isFinite((input as any).age)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.protobuf.validateEncode as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantAtomicAbsorbed => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '(string & Default<"something">)',
                      value: input.id,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "(number & Default<20>)",
                      value: input.age,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantAtomicAbsorbed",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantAtomicAbsorbed",
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
        const encode = (input: ConstantAtomicAbsorbed): Uint8Array => {
          const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
          const $Writer = (typia.protobuf.validateEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "id";
              writer.uint32(10);
              writer.string(input.id);
              // property "age";
              writer.uint32(17);
              writer.double(input.age);
            };
            //ConstantAtomicAbsorbed;
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
    decode: (input: Uint8Array): typia.Resolved<ConstantAtomicAbsorbed> => {
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
              // double;
              output.age = reader.double();
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
      'syntax = "proto3";\n\nmessage ConstantAtomicAbsorbed {\n    required string id = 1;\n    required double age = 2;\n}',
  });
