import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_createAssertDecodeCustom_ClassNonPublic =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ClassNonPublic",
  )<ClassNonPublic>(ClassNonPublic)({
    decode: (
      input: Uint8Array,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<ClassNonPublic> => {
      const decode = (
        input: Uint8Array,
      ): import("typia").Resolved<ClassNonPublic> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
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
      };
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
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
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
      const output = decode(input);
      return assert(output, errorFactory) as any;
    },
    encode: (input: ClassNonPublic): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
  });
