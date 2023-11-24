import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_protobuf_createValidateEncode_TypeTagLength =
  _test_protobuf_validateEncode("TypeTagLength")<TypeTagLength>(TypeTagLength)({
    encode: (input: TypeTagLength): typia.IValidation<Uint8Array> => {
      const validate = (input: any): typia.IValidation<TypeTagLength> => {
        const errors = [] as any[];
        const __is = (input: any): input is TypeTagLength => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 <= input.fixed.length &&
            input.fixed.length <= 5 &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            input.maximum.length <= 7 &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            input.minimum_and_maximum.length <= 7 &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            input.equal.length <= 19;
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateEncode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagLength => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TypeTagLength.Type>",
                    value: input.value,
                  })) &&
                  input.value
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagLength.Type",
                            value: elem,
                          })) &&
                          $vo1(
                            elem,
                            _path + ".value[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagLength.Type",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TypeTagLength.Type>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("string" === typeof input.fixed &&
                  (5 <= input.fixed.length ||
                    $report(_exceptionable, {
                      path: _path + ".fixed",
                      expected: "string & MinLength<5>",
                      value: input.fixed,
                    })) &&
                  (input.fixed.length <= 5 ||
                    $report(_exceptionable, {
                      path: _path + ".fixed",
                      expected: "string & MaxLength<5>",
                      value: input.fixed,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".fixed",
                    expected: "(string & MinLength<5> & MaxLength<5>)",
                    value: input.fixed,
                  }),
                ("string" === typeof input.minimum &&
                  (3 <= input.minimum.length ||
                    $report(_exceptionable, {
                      path: _path + ".minimum",
                      expected: "string & MinLength<3>",
                      value: input.minimum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum",
                    expected: "(string & MinLength<3>)",
                    value: input.minimum,
                  }),
                ("string" === typeof input.maximum &&
                  (input.maximum.length <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".maximum",
                      expected: "string & MaxLength<7>",
                      value: input.maximum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".maximum",
                    expected: "(string & MaxLength<7>)",
                    value: input.maximum,
                  }),
                ("string" === typeof input.minimum_and_maximum &&
                  (3 <= input.minimum_and_maximum.length ||
                    $report(_exceptionable, {
                      path: _path + ".minimum_and_maximum",
                      expected: "string & MinLength<3>",
                      value: input.minimum_and_maximum,
                    })) &&
                  (input.minimum_and_maximum.length <= 7 ||
                    $report(_exceptionable, {
                      path: _path + ".minimum_and_maximum",
                      expected: "string & MaxLength<7>",
                      value: input.minimum_and_maximum,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".minimum_and_maximum",
                    expected: "(string & MinLength<3> & MaxLength<7>)",
                    value: input.minimum_and_maximum,
                  }),
                ("string" === typeof input.equal &&
                  (10 <= input.equal.length ||
                    $report(_exceptionable, {
                      path: _path + ".equal",
                      expected: "string & MinLength<10>",
                      value: input.equal,
                    })) &&
                  (input.equal.length <= 19 ||
                    $report(_exceptionable, {
                      path: _path + ".equal",
                      expected: "string & MaxLength<19>",
                      value: input.equal,
                    }))) ||
                  $report(_exceptionable, {
                    path: _path + ".equal",
                    expected: "(string & MinLength<10> & MaxLength<19>)",
                    value: input.equal,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagLength",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TypeTagLength",
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
      const encode = (input: TypeTagLength): Uint8Array => {
        const $Sizer = (typia.protobuf.createValidateEncode as any).Sizer;
        const $Writer = (typia.protobuf.createValidateEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            if (0 !== input.value.length) {
              for (const elem of input.value) {
                // 1 -> TypeTagLength.Type;
                writer.uint32(10);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
          };
          const $peo1 = (input: any): any => {
            // property "fixed";
            writer.uint32(10);
            writer.string(input.fixed);
            // property "minimum";
            writer.uint32(18);
            writer.string(input.minimum);
            // property "maximum";
            writer.uint32(26);
            writer.string(input.maximum);
            // property "minimum_and_maximum";
            writer.uint32(34);
            writer.string(input.minimum_and_maximum);
            // property "equal";
            writer.uint32(42);
            writer.string(input.equal);
          };
          const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 <= input.fixed.length &&
            input.fixed.length <= 5 &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            input.maximum.length <= 7 &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            input.minimum_and_maximum.length <= 7 &&
            "string" === typeof input.equal &&
            10 <= input.equal.length &&
            input.equal.length <= 19;
          //TypeTagLength;
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
    },
    decode: (input: Uint8Array): typia.Resolved<TypeTagLength> => {
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
              // type: Array<TypeTagLength.Type>;
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
          fixed: "" as any,
          minimum: "" as any,
          maximum: "" as any,
          minimum_and_maximum: "" as any,
          equal: "" as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.fixed = reader.string();
              break;
            case 2:
              // string;
              output.minimum = reader.string();
              break;
            case 3:
              // string;
              output.maximum = reader.string();
              break;
            case 4:
              // string;
              output.minimum_and_maximum = reader.string();
              break;
            case 5:
              // string;
              output.equal = reader.string();
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
      'syntax = "proto3";\n\nmessage TypeTagLength {\n    repeated TypeTagLength.Type value = 1;\n    message Type {\n        required string fixed = 1;\n        required string minimum = 2;\n        required string maximum = 3;\n        required string minimum_and_maximum = 4;\n        required string equal = 5;\n    }\n}',
  });
