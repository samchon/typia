import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_createAssertEncode_DynamicTree =
  _test_protobuf_assertEncode(TypeGuardError)("DynamicTree")<DynamicTree>(
    DynamicTree,
  )({
    encode: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): DynamicTree => {
        const __is = (input: any): input is DynamicTree => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children) &&
            $io1(input.children);
          const $io1 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return "object" === typeof value && null !== value && $io0(value);
            });
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicTree => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $join = (typia.protobuf.createAssertEncode as any).join;
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
                    expected: "string",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.children &&
                null !== input.children &&
                false === Array.isArray(input.children)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children,
                  },
                  errorFactory,
                )) &&
                $ao1(
                  input.children,
                  _path + ".children",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".children",
                    expected: "Record<string, DynamicTree>",
                    value: input.children,
                  },
                  errorFactory,
                ));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  ((("object" === typeof value && null !== value) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "DynamicTree",
                        value: value,
                      },
                      errorFactory,
                    )) &&
                    $ao0(value, _path + $join(key), true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "DynamicTree",
                      value: value,
                    },
                    errorFactory,
                  )
                );
              });
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "DynamicTree",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "DynamicTree",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: DynamicTree): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "id";
            writer.uint32(10);
            writer.string(input.id);
            // property "sequence";
            writer.uint32(17);
            writer.double(input.sequence);
            // property "children";
            for (const [key, value] of Object.entries(input.children)) {
              writer.uint32(26);
              writer.fork();
              writer.uint32(10);
              writer.string(key);
              // 2 -> DynamicTree;
              writer.uint32(18);
              writer.fork();
              $peo0(value);
              writer.ldelim();
              writer.ldelim();
            }
          };
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "number" === typeof input.sequence &&
            "object" === typeof input.children &&
            null !== input.children &&
            false === Array.isArray(input.children) &&
            $io1(input.children);
          const $io1 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return "object" === typeof value && null !== value && $io0(value);
            });
          //DynamicTree;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input, errorFactory));
    },
    decode: (input: Uint8Array): typia.Resolved<DynamicTree> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          sequence: undefined as any,
          children: {} as any,
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
              output.sequence = reader.double();
              break;
            case 3:
              // type: Record<string, DynamicTree>;
              (() => {
                const piece = reader.uint32() + reader.index();
                const entry = {
                  key: "" as any,
                  value: undefined as any,
                } as any;
                while (reader.index() < piece) {
                  const kind = reader.uint32();
                  switch (kind >>> 3) {
                    case 1:
                      // string;
                      entry.key = reader.string();
                      break;
                    case 2:
                      // DynamicTree;
                      entry.value = $pdo0(reader, reader.uint32());
                      break;
                    default:
                      reader.skipType(kind & 7);
                      break;
                  }
                }
                output.children[entry.key] = entry.value;
              })();
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
      'syntax = "proto3";\n\nmessage DynamicTree {\n    required string id = 1;\n    required double sequence = 2;\n    map<string, DynamicTree> children = 3;\n}',
  });
