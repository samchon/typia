import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_protobuf_createAssertDecodeCustom_ObjectJsonTag =
  _test_protobuf_assertDecode(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )({
    decode: (
      input: Uint8Array,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
    ): typia.Resolved<ObjectJsonTag> => {
      const decode = (input: Uint8Array): typia.Resolved<ObjectJsonTag> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
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
      };
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectJsonTag => {
        const $guard = (typia.protobuf.createAssertDecode as any).guard(
          errorFactory,
        );
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
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
    encode: (input: ObjectJsonTag): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
  });
