import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_protobuf_createValidateDecode_ObjectHttpAtomic =
  _test_protobuf_validateDecode("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): typia.IValidation<typia.Resolved<ObjectHttpAtomic>> => {
        const validate = (input: any): typia.IValidation<ObjectHttpAtomic> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpAtomic => {
            return (
              "object" === typeof input &&
              null !== input &&
              "boolean" === typeof (input as any).boolean &&
              "bigint" === typeof (input as any).bigint &&
              "number" === typeof (input as any).number &&
              Number.isFinite((input as any).number) &&
              "string" === typeof (input as any).string
            );
          };
          if (false === __is(input)) {
            const $report = (typia.protobuf.validateDecode as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpAtomic => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "boolean",
                      value: input.boolean,
                    }),
                  "bigint" === typeof input.bigint ||
                    $report(_exceptionable, {
                      path: _path + ".bigint",
                      expected: "bigint",
                      value: input.bigint,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "string",
                      value: input.string,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpAtomic",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpAtomic",
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
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<ObjectHttpAtomic> => {
          const $Reader = (typia.protobuf.validateDecode as any).Reader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              boolean: undefined as any,
              bigint: undefined as any,
              number: undefined as any,
              string: "" as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // bool;
                  output.boolean = reader.bool();
                  break;
                case 2:
                  // int64;
                  output.bigint = reader.int64();
                  break;
                case 3:
                  // double;
                  output.number = reader.double();
                  break;
                case 4:
                  // string;
                  output.string = reader.string();
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
        const output = decode(input);
        return validate(output) as any;
      })(input),
    encode: (input: ObjectHttpAtomic): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          writer.uint32(8);
          writer.bool(input.boolean);
          // property "bigint";
          writer.uint32(16);
          writer.int64(input.bigint);
          // property "number";
          writer.uint32(25);
          writer.double(input.number);
          // property "string";
          writer.uint32(34);
          writer.string(input.string);
        };
        //ObjectHttpAtomic;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
