import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertEncodeCustom_ClassPropertyAssignment =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)({
    encode: (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ClassPropertyAssignment => {
        const __is = (input: any): input is ClassPropertyAssignment => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "assignment" === input.note &&
            false === input.editable &&
            "boolean" === typeof input.incremental;
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ClassPropertyAssignment => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              ("assignment" === input.note ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".note",
                    expected: '"assignment"',
                    value: input.note,
                  },
                  errorFactory,
                )) &&
              (false === input.editable ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".editable",
                    expected: "false",
                    value: input.editable,
                  },
                  errorFactory,
                )) &&
              ("boolean" === typeof input.incremental ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".incremental",
                    expected: "boolean",
                    value: input.incremental,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassPropertyAssignment",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ClassPropertyAssignment",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: ClassPropertyAssignment): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "note";
            writer.uint32(26);
            writer.string(input.note);
            // property "editable";
            writer.uint32(32);
            writer.bool(input.editable);
            // property "incremental";
            writer.uint32(40);
            writer.bool(input.incremental);
          };
          //ClassPropertyAssignment;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input, errorFactory));
    },
    decode: (input: Uint8Array): typia.Resolved<ClassPropertyAssignment> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          note: undefined as any,
          editable: undefined as any,
          incremental: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.note = reader.string();
              break;
            case 4:
              // bool;
              output.editable = reader.bool();
              break;
            case 5:
              // bool;
              output.incremental = reader.bool();
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
      'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    required double id = 1;\n    required string name = 2;\n    required string note = 3;\n    required bool editable = 4;\n    required bool incremental = 5;\n}',
  });
