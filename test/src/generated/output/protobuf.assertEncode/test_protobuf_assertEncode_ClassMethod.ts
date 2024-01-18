import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_createAssertEncode_ClassMethod =
  _test_protobuf_assertEncode("ClassMethod")<ClassMethod>(ClassMethod)({
    encode: (input) =>
      ((input: any): Uint8Array => {
        const assert = (input: any): ClassMethod => {
          const __is = (input: any): input is ClassMethod => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).name &&
              "number" === typeof (input as any).age &&
              Number.isFinite((input as any).age)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassMethod => {
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
                ("string" === typeof input.name ||
                  $guard(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  })) &&
                (("number" === typeof input.age &&
                  Number.isFinite(input.age)) ||
                  $guard(_exceptionable, {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ClassMethod.Animal",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ClassMethod.Animal",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: ClassMethod): Uint8Array => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $ProtobufSizer =
            require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
          const $ProtobufWriter =
            require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "name";
              writer.uint32(10);
              writer.string(input.name);
              // property "age";
              writer.uint32(17);
              writer.double(input.age);
            };
            //ClassMethod.Animal;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $ProtobufSizer());
          const writer = encoder(new $ProtobufWriter(sizer));
          return writer.buffer();
        };
        return encode(assert(input));
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ClassMethod> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          name: "" as any,
          age: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.name = reader.string();
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
      const reader = new $ProtobufReader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ClassMethod {\n    message Animal {\n        required string name = 1;\n        required double age = 2;\n    }\n}',
  });
