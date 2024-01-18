import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_createValidateEncode_ClassNonPublic =
  _test_protobuf_validateEncode("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    encode: (input: ClassNonPublic): typia.IValidation<Uint8Array> => {
      const validate = (input: any): typia.IValidation<ClassNonPublic> => {
        const errors = [] as any[];
        const __is = (input: any): input is ClassNonPublic => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).implicit &&
            "string" === typeof (input as any).shown
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
          ): input is ClassNonPublic => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.implicit ||
                  $report(_exceptionable, {
                    path: _path + ".implicit",
                    expected: "string",
                    value: input.implicit,
                  }),
                "string" === typeof input.shown ||
                  $report(_exceptionable, {
                    path: _path + ".shown",
                    expected: "string",
                    value: input.shown,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassNonPublic.Accessor",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ClassNonPublic.Accessor",
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
      const encode = (input: ClassNonPublic): Uint8Array => {
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "implicit";
            writer.uint32(10);
            writer.string(input.implicit);
            // property "shown";
            writer.uint32(18);
            writer.string(input.shown);
          };
          //ClassNonPublic.Accessor;
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
    },
    decode: (input: Uint8Array): typia.Resolved<ClassNonPublic> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          implicit: "" as any,
          shown: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.implicit = reader.string();
              break;
            case 2:
              // string;
              output.shown = reader.string();
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
      'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
  });
