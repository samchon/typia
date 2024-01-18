import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateEncode_ObjectHttpAtomic =
  _test_protobuf_validateEncode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    encode: (input) =>
      ((input: ObjectHttpAtomic): typia.IValidation<Uint8Array> => {
        const validate = (input: any): typia.IValidation<ObjectHttpAtomic> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpAtomic => {
            return (
              "object" === typeof input &&
              null !== input &&
              "boolean" === typeof (input as any).boolean &&
              "bigint" === typeof (input as any).bigint &&
              "number" === typeof (input as any).number &&
              Number.isFinite((input as any).number) &&
              "string" === typeof (input as any).string
            );
          };
          if (false === __is(input)) {
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpAtomic => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "boolean",
                      value: input.boolean,
                    }),
                  "bigint" === typeof input.bigint ||
                    $report(_exceptionable, {
                      path: _path + ".bigint",
                      expected: "bigint",
                      value: input.bigint,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "string",
                      value: input.string,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpAtomic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpAtomic",
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
        const encode = (input: ObjectHttpAtomic): Uint8Array => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufSizer =
            require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
          const $ProtobufWriter =
            require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "boolean";
              writer.uint32(8);
              writer.bool(input.boolean);
              // property "bigint";
              writer.uint32(16);
              writer.int64(input.bigint);
              // property "number";
              writer.uint32(25);
              writer.double(input.number);
              // property "string";
              writer.uint32(34);
              writer.string(input.string);
            };
            //ObjectHttpAtomic;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $ProtobufSizer());
          const writer = encoder(new $ProtobufWriter(sizer));
          return writer.buffer();
        };
        const output = validate(input) as any;
        if (output.success) output.data = encode(input);
        return output;
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpAtomic> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          boolean: undefined as any,
          bigint: undefined as any,
          number: undefined as any,
          string: "" as any,
        } as any;
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
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $ProtobufReader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ObjectHttpAtomic {\n    required bool boolean = 1;\n    required int64 bigint = 2;\n    required double number = 3;\n    required string string = 4;\n}',
  });
