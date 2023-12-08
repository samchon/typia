import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_createValidateEncode_DynamicTree =
  _test_protobuf_validateEncode("DynamicTree")<DynamicTree>(DynamicTree)({
    encode: (input) =>
      ((input: DynamicTree): typia.IValidation<Uint8Array> => {
        const validate = (input: any): typia.IValidation<DynamicTree> => {
          const errors = [] as any[];
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
                if (true)
                  return (
                    "object" === typeof value && null !== value && $io0(value)
                  );
                return true;
              });
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.protobuf.validateEncode as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicTree => {
              const $join = (typia.protobuf.validateEncode as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $report(_exceptionable, {
                      path: _path + ".sequence",
                      expected: "number",
                      value: input.sequence,
                    }),
                  ((("object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children)) ||
                    $report(_exceptionable, {
                      path: _path + ".children",
                      expected: "Record<string, DynamicTree>",
                      value: input.children,
                    })) &&
                    $vo1(
                      input.children,
                      _path + ".children",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".children",
                      expected: "Record<string, DynamicTree>",
                      value: input.children,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (true)
                          return (
                            ((("object" === typeof value && null !== value) ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "DynamicTree",
                                value: value,
                              })) &&
                              $vo0(
                                value,
                                _path + $join(key),
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "DynamicTree",
                              value: value,
                            })
                          );
                        return true;
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicTree",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "DynamicTree",
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
        const encode = (input: DynamicTree): Uint8Array => {
          const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
          const $Writer = (typia.protobuf.validateEncode as any).Writer;
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
                if (true)
                  return (
                    "object" === typeof value && null !== value && $io0(value)
                  );
                return true;
              });
            //DynamicTree;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        const output = validate(input) as any;
        if (output.success) output.data = encode(input);
        return output;
      })(input),
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
