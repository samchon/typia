import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_protobuf_createValidateEncode_TypeTagAtomicUnion =
  _test_protobuf_validateEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )({
    encode: (input: TypeTagAtomicUnion): typia.IValidation<Uint8Array> => {
      const validate = (input: any): typia.IValidation<TypeTagAtomicUnion> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagAtomicUnion => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TypeTagAtomicUnion.Type>",
                    value: input.value,
                  })) &&
                  input.value
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagAtomicUnion.Type",
                            value: elem,
                          })) &&
                          $vo1(
                            elem,
                            _path + ".value[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagAtomicUnion.Type",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TypeTagAtomicUnion.Type>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.value &&
                  (3 <= input.value.length ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MinLength<3>",
                      value: input.value,
                    })) &&
                  (input.value.length <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string & MaxLength<7>",
                      value: input.value,
                    }))) ||
                  ("number" === typeof input.value &&
                    (Number.isFinite(input.value) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "number",
                        value: input.value,
                      })) &&
                    (3 <= input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "number & Minimum<3>",
                        value: input.value,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagAtomicUnion",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagAtomicUnion",
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
      const encode = (input: TypeTagAtomicUnion): Uint8Array => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.protobuf.createValidateEncode",
        );
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
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
        const sizer = encoder(new $ProtobufSizer());
        const writer = encoder(new $ProtobufWriter(sizer));
        return writer.buffer();
      };
      const output = validate(input) as any;
      if (output.success) output.data = encode(input);
      return output;
    },
    decode: (input: Uint8Array): typia.Resolved<TypeTagAtomicUnion> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
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
      const reader = new $ProtobufReader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage TypeTagAtomicUnion {\n    repeated TypeTagAtomicUnion.Type value = 1;\n    message Type {\n        oneof value {\n            double v1 = 1;\n            string v2 = 2;\n        }\n    }\n}',
  });
