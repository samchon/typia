import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_protobuf_createValidateEncode_ObjectHttpCommentTag =
  _test_protobuf_validateEncode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )({
    encode: (input) =>
      ((input: ObjectHttpCommentTag): typia.IValidation<Uint8Array> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectHttpCommentTag> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpCommentTag => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.int &&
              Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647 &&
              "bigint" === typeof input.uint64 &&
              BigInt(0) <= input.uint64 &&
              "string" === typeof input.uuid &&
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input.uuid,
              ) &&
              Array.isArray(input.items) &&
              10 <= input.items.length &&
              input.items.length <= 100 &&
              input.items.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
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
            ): input is ObjectHttpCommentTag => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.int &&
                    ((Math.floor(input.int) === input.int &&
                      -2147483648 <= input.int &&
                      input.int <= 2147483647) ||
                      $report(_exceptionable, {
                        path: _path + ".int",
                        expected: 'number & Type<"int32">',
                        value: input.int,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".int",
                      expected: '(number & Type<"int32">)',
                      value: input.int,
                    }),
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: 'bigint & Type<"uint64">',
                        value: input.uint64,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: '(bigint & Type<"uint64">)',
                      value: input.uint64,
                    }),
                  ("string" === typeof input.uuid &&
                    (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                      input.uuid,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".uuid",
                        expected: 'string & Format<"uuid">',
                        value: input.uuid,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uuid",
                      expected: '(string & Format<"uuid">)',
                      value: input.uuid,
                    }),
                  ((Array.isArray(input.items) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        "(Array<number> & MinItems<10> & MaxItems<100>)",
                      value: input.items,
                    })) &&
                    (10 <= input.items.length ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MinItems<10>",
                        value: input.items,
                      })) &&
                    (input.items.length <= 100 ||
                      $report(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<> & MaxItems<100>",
                        value: input.items,
                      })) &&
                    input.items
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".items[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".items",
                      expected:
                        "(Array<number> & MinItems<10> & MaxItems<100>)",
                      value: input.items,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpCommentTag",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpCommentTag",
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
        const encode = (input: ObjectHttpCommentTag): Uint8Array => {
          const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
          const $Writer = (typia.protobuf.validateEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "int";
              writer.uint32(8);
              writer.int32(input.int);
              // property "uint64";
              writer.uint32(16);
              writer.uint64(input.uint64);
              // property "uuid";
              writer.uint32(26);
              writer.string(input.uuid);
              // property "items";
              if (0 !== input.items.length) {
                writer.uint32(34);
                writer.fork();
                for (const elem of input.items) {
                  writer.double(elem);
                }
                writer.ldelim();
              }
            };
            //ObjectHttpCommentTag;
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
    decode: (input: Uint8Array): typia.Resolved<ObjectHttpCommentTag> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          int: undefined as any,
          uint64: undefined as any,
          uuid: "" as any,
          items: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // int32;
              output.int = reader.int32();
              break;
            case 2:
              // uint64;
              output.uint64 = reader.uint64();
              break;
            case 3:
              // string;
              output.uuid = reader.string();
              break;
            case 4:
              // type: Array<number>;
              if (2 === (tag & 7)) {
                const piece = reader.uint32() + reader.index();
                while (reader.index() < piece)
                  output.items.push(reader.double());
              } else output.items.push(reader.double());
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
      'syntax = "proto3";\n\nmessage ObjectHttpCommentTag {\n    required int32 int = 1;\n    required uint64 uint64 = 2;\n    required string uuid = 3;\n    repeated double items = 4;\n}',
  });
