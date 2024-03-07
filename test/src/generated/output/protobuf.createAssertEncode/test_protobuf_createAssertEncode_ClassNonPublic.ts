import typia from "typia";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
import { TypeGuardError } from "typia";
export const test_protobuf_createAssertEncode_ClassNonPublic =
  _test_protobuf_assertEncode(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )({
    encode: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ClassNonPublic => {
        const __is = (input: any): input is ClassNonPublic => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).implicit &&
            "string" === typeof (input as any).shown
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ClassNonPublic => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.implicit ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".implicit",
                    expected: "string",
                    value: input.implicit,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.shown ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".shown",
                    expected: "string",
                    value: input.shown,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassNonPublic.Accessor",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ClassNonPublic.Accessor",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: ClassNonPublic): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
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
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input, errorFactory));
    },
    decode: (input: Uint8Array): import("typia").Resolved<ClassNonPublic> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ClassNonPublic {\n  message Accessor {\n    required string implicit = 1;\n    required string shown = 2;\n  }\n}',
  });
