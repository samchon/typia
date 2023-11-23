import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";

export const test_protobuf_createValidateDecode_ObjectHttpUndefindable =
  _test_protobuf_validateDecode(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectHttpUndefindable>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ObjectHttpUndefindable> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHttpUndefindable => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.bigint || "bigint" === typeof input.bigint) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.constantBoolean ||
              true === input.constantBoolean) &&
            (undefined === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (undefined === input.constantNumber ||
              3 === input.constantNumber ||
              2 === input.constantNumber ||
              1 === input.constantNumber) &&
            (undefined === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString ||
              "one" === input.constantString);
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHttpUndefindable => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $report(_exceptionable, {
                    path: _path + ".boolean",
                    expected: "(boolean | undefined)",
                    value: input.boolean,
                  }),
                undefined === input.bigint ||
                  "bigint" === typeof input.bigint ||
                  $report(_exceptionable, {
                    path: _path + ".bigint",
                    expected: "(bigint | undefined)",
                    value: input.bigint,
                  }),
                undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $report(_exceptionable, {
                    path: _path + ".number",
                    expected: "(number | undefined)",
                    value: input.number,
                  }),
                undefined === input.string ||
                  "string" === typeof input.string ||
                  $report(_exceptionable, {
                    path: _path + ".string",
                    expected: "(string | undefined)",
                    value: input.string,
                  }),
                undefined === input.constantBoolean ||
                  true === input.constantBoolean ||
                  $report(_exceptionable, {
                    path: _path + ".constantBoolean",
                    expected: "(true | undefined)",
                    value: input.constantBoolean,
                  }),
                undefined === input.constantBigint ||
                  BigInt(1) === input.constantBigint ||
                  BigInt(2) === input.constantBigint ||
                  BigInt(3) === input.constantBigint ||
                  $report(_exceptionable, {
                    path: _path + ".constantBigint",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantBigint,
                  }),
                undefined === input.constantNumber ||
                  3 === input.constantNumber ||
                  2 === input.constantNumber ||
                  1 === input.constantNumber ||
                  $report(_exceptionable, {
                    path: _path + ".constantNumber",
                    expected: "(1 | 2 | 3 | undefined)",
                    value: input.constantNumber,
                  }),
                undefined === input.constantString ||
                  "three" === input.constantString ||
                  "two" === input.constantString ||
                  "one" === input.constantString ||
                  $report(_exceptionable, {
                    path: _path + ".constantString",
                    expected: '("one" | "three" | "two" | undefined)',
                    value: input.constantString,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpUndefindable",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHttpUndefindable",
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
      ): typia.Resolved<ObjectHttpUndefindable> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            boolean: undefined as any,
            bigint: undefined as any,
            number: undefined as any,
            string: undefined as any,
            constantBoolean: undefined as any,
            constantBigint: undefined as any,
            constantNumber: undefined as any,
            constantString: undefined as any,
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
              case 5:
                // bool;
                output.constantBoolean = reader.bool();
                break;
              case 6:
                // uint64;
                output.constantBigint = reader.uint64();
                break;
              case 7:
                // int32;
                output.constantNumber = reader.int32();
                break;
              case 8:
                // string;
                output.constantString = reader.string();
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
    },
    encode: (input: ObjectHttpUndefindable): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "boolean";
          if (undefined !== input.boolean) {
            writer.uint32(8);
            writer.bool(input.boolean);
          }
          // property "bigint";
          if (undefined !== input.bigint) {
            writer.uint32(16);
            writer.int64(input.bigint);
          }
          // property "number";
          if (undefined !== input.number) {
            writer.uint32(25);
            writer.double(input.number);
          }
          // property "string";
          if (undefined !== input.string) {
            writer.uint32(34);
            writer.string(input.string);
          }
          // property "constantBoolean";
          if (undefined !== input.constantBoolean) {
            writer.uint32(40);
            writer.bool(input.constantBoolean);
          }
          // property "constantBigint";
          if (undefined !== input.constantBigint) {
            writer.uint32(48);
            writer.uint64(input.constantBigint);
          }
          // property "constantNumber";
          if (undefined !== input.constantNumber) {
            writer.uint32(56);
            writer.int32(input.constantNumber);
          }
          // property "constantString";
          if (undefined !== input.constantString) {
            writer.uint32(66);
            writer.string(input.constantString);
          }
        };
        //ObjectHttpUndefindable;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
