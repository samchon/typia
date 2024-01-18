import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_protobuf_createAssertEncode_ObjectGenericAlias =
  _test_protobuf_assertEncode("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )({
    encode: (input) =>
      ((input: any): Uint8Array => {
        const assert = (input: any): ObjectGenericAlias => {
          const __is = (input: any): input is ObjectGenericAlias => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).value
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericAlias => {
              // @ts-ignore;
              declare const require: (lib: string) => any;
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.protobuf.assertEncode",
              );
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string",
                  value: input.value,
                });
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ObjectGenericAlias.Alias",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectGenericAlias.Alias",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: ObjectGenericAlias): Uint8Array => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufSizer =
            require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
          const $ProtobufWriter =
            require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "value";
              writer.uint32(10);
              writer.string(input.value);
            };
            //ObjectGenericAlias.Alias;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $ProtobufSizer());
          const writer = encoder(new $ProtobufWriter(sizer));
          return writer.buffer();
        };
        return encode(assert(input));
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectGenericAlias> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.value = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectGenericAlias {\n    message Alias {\n        required string value = 1;\n    }\n}',
  });
