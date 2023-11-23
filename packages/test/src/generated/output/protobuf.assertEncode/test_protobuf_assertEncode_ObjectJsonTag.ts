import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_createAssertEncode_ObjectJsonTag =
  _test_protobuf_assertEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) =>
      ((input: any): Uint8Array => {
        const assert = (input: any): ObjectJsonTag => {
          const __is = (input: any): input is ObjectJsonTag => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).vulnerable &&
              "string" === typeof (input as any).description &&
              "string" === typeof (input as any).title &&
              "string" === typeof (input as any).complicate_title
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectJsonTag => {
              const $guard = (typia.protobuf.assertEncode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.vulnerable ||
                  $guard(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "string",
                    value: input.vulnerable,
                  })) &&
                ("string" === typeof input.description ||
                  $guard(_exceptionable, {
                    path: _path + ".description",
                    expected: "string",
                    value: input.description,
                  })) &&
                ("string" === typeof input.title ||
                  $guard(_exceptionable, {
                    path: _path + ".title",
                    expected: "string",
                    value: input.title,
                  })) &&
                ("string" === typeof input.complicate_title ||
                  $guard(_exceptionable, {
                    path: _path + ".complicate_title",
                    expected: "string",
                    value: input.complicate_title,
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ObjectJsonTag",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectJsonTag",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: ObjectJsonTag): Uint8Array => {
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "vulnerable";
              writer.uint32(10);
              writer.string(input.vulnerable);
              // property "description";
              writer.uint32(18);
              writer.string(input.description);
              // property "title";
              writer.uint32(26);
              writer.string(input.title);
              // property "complicate_title";
              writer.uint32(34);
              writer.string(input.complicate_title);
            };
            //ObjectJsonTag;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input));
      })(input),
    decode: (input: Uint8Array): typia.Resolved<ObjectJsonTag> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          vulnerable: "" as any,
          description: "" as any,
          title: "" as any,
          complicate_title: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.vulnerable = reader.string();
              break;
            case 2:
              // string;
              output.description = reader.string();
              break;
            case 3:
              // string;
              output.title = reader.string();
              break;
            case 4:
              // string;
              output.complicate_title = reader.string();
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
      'syntax = "proto3";\n\nmessage ObjectJsonTag {\n    required string vulnerable = 1;\n    required string description = 2;\n    required string title = 3;\n    required string complicate_title = 4;\n}',
  });
