import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_protobuf_assertEncode_TypeTagAtomicUnion =
  _test_protobuf_assertEncode(TypeGuardError)(
    "TypeTagAtomicUnion",
  )<TypeTagAtomicUnion>(TypeTagAtomicUnion)({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: import("typia").TypeGuardError.IProps,
        ): TypeTagAtomicUnion => {
          const $guard = (typia.protobuf.assertEncode as any).guard(
            errorFactory,
          );
          const __is = (input: any): input is TypeTagAtomicUnion => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7) ||
              ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagAtomicUnion => {
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TypeTagAtomicUnion.Type>",
                    value: input.value,
                  })) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagAtomicUnion.Type",
                          value: elem,
                        })) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TypeTagAtomicUnion.Type",
                        value: elem,
                      }),
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<TypeTagAtomicUnion.Type>",
                  value: input.value,
                });
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.value &&
                  (3 <= input.value.length ||
                    $guard(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MinLength<3>",
                      value: input.value,
                    })) &&
                  (input.value.length <= 7 ||
                    $guard(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MaxLength<7>",
                      value: input.value,
                    }))) ||
                ("number" === typeof input.value &&
                  (Number.isFinite(input.value) ||
                    $guard(_exceptionable, {
                      path: _path + ".value",
                      expected: "number",
                      value: input.value,
                    })) &&
                  (3 <= input.value ||
                    $guard(_exceptionable, {
                      path: _path + ".value",
                      expected: "number & Minimum<3>",
                      value: input.value,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected:
                    "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                  value: input.value,
                });
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "TypeTagAtomicUnion",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TypeTagAtomicUnion",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: TypeTagAtomicUnion): Uint8Array => {
          const $throws = (typia.protobuf.assertEncode as any).throws;
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "value";
              if (0 !== input.value.length) {
                for (const elem of input.value) {
                  // 1 -> TypeTagAtomicUnion.Type;
                  writer.uint32(10);
                  writer.fork();
                  $peo1(elem);
                  writer.ldelim();
                }
              }
            };
            const $peo1 = (input: any): any => {
              // property "value";
              if ("number" === typeof input.value) {
                writer.uint32(9);
                writer.double(input.value);
              } else if ("string" === typeof input.value) {
                writer.uint32(18);
                writer.string(input.value);
              } else
                $throws({
                  expected:
                    "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                  value: input.value,
                });
            };
            const $io1 = (input: any): boolean =>
              ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7) ||
              ("number" === typeof input.value && 3 <= input.value);
            //TypeTagAtomicUnion;
            $peo0(input);
            return writer;
          };
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input),
    decode: (input: Uint8Array): typia.Resolved<TypeTagAtomicUnion> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<TypeTagAtomicUnion.Type>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.value = reader.double();
              break;
            case 2:
              // string;
              output.value = reader.string();
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
      'syntax = "proto3";\n\nmessage TypeTagAtomicUnion {\n    repeated TypeTagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
  });
