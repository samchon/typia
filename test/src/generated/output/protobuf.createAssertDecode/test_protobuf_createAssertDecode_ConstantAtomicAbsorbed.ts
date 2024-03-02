import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createAssertDecode_ConstantAtomicAbsorbed =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    decode: (
      input: Uint8Array,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.Resolved<ConstantAtomicAbsorbed> => {
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ConstantAtomicAbsorbed> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
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
      };
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantAtomicAbsorbed => {
        const __is = (input: any): input is ConstantAtomicAbsorbed => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantAtomicAbsorbed => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: '(string & Default<"something">)',
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "(number & Default<20>)",
                    value: input.age,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicAbsorbed",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicAbsorbed",
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
    encode: (input: ConstantAtomicAbsorbed): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
  });
