import typia from "typia";

import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_protobuf_createValidateEncode_TypeTagDefault =
  _test_protobuf_validateEncode("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )({
    encode: (input) =>
      ((input: TypeTagDefault): typia.IValidation<Uint8Array> => {
        const validate = (input: any): typia.IValidation<TypeTagDefault> => {
          const errors = [] as any[];
          const __is = (input: any): input is TypeTagDefault => {
            const $io0 = (input: any): boolean =>
              "boolean" === typeof input.boolean &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              "string" === typeof input.text &&
              (("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
                "string" === typeof input.boolean_and_number_and_string ||
                "boolean" === typeof input.boolean_and_number_and_string) &&
              ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean) &&
              ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number) &&
              (("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
                "string" === typeof input.union_but_string ||
                "boolean" === typeof input.union_but_string) &&
              null !== input.boolean_and_number_and_template &&
              undefined !== input.boolean_and_number_and_template &&
              (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                  RegExp(/^prefix_(.*)/).test(
                    input.boolean_and_number_and_template,
                  )));
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
            ): input is TypeTagDefault => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "(boolean & Default<false>)",
                      value: input.boolean,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "(number & Default<1>)",
                      value: input.number,
                    }),
                  "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: '(string & Default<"two">)',
                      value: input.string,
                    }),
                  "string" === typeof input.text ||
                    $report(_exceptionable, {
                      path: _path + ".text",
                      expected:
                        '(string & Default<"Very long text, can you understand it?">)',
                      value: input.text,
                    }),
                  ("number" === typeof input.boolean_and_number_and_string &&
                    Number.isFinite(input.boolean_and_number_and_string)) ||
                    "string" === typeof input.boolean_and_number_and_string ||
                    "boolean" === typeof input.boolean_and_number_and_string ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_string",
                      expected:
                        '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                      value: input.boolean_and_number_and_string,
                    }),
                  "string" === typeof input.union_but_boolean ||
                    ("number" === typeof input.union_but_boolean &&
                      Number.isFinite(input.union_but_boolean)) ||
                    "boolean" === typeof input.union_but_boolean ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_boolean",
                      expected:
                        "((boolean & Default<false>) | number | string)",
                      value: input.union_but_boolean,
                    }),
                  "string" === typeof input.union_but_number ||
                    ("number" === typeof input.union_but_number &&
                      Number.isFinite(input.union_but_number)) ||
                    "boolean" === typeof input.union_but_number ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_number",
                      expected: "((number & Default<1>) | boolean | string)",
                      value: input.union_but_number,
                    }),
                  ("number" === typeof input.union_but_string &&
                    Number.isFinite(input.union_but_string)) ||
                    "string" === typeof input.union_but_string ||
                    "boolean" === typeof input.union_but_string ||
                    $report(_exceptionable, {
                      path: _path + ".union_but_string",
                      expected:
                        '((string & Default<"two">) | boolean | number)',
                      value: input.union_but_string,
                    }),
                  (null !== input.boolean_and_number_and_template ||
                    $report(_exceptionable, {
                      path: _path + ".boolean_and_number_and_template",
                      expected:
                        "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                      value: input.boolean_and_number_and_template,
                    })) &&
                    (undefined !== input.boolean_and_number_and_template ||
                      $report(_exceptionable, {
                        path: _path + ".boolean_and_number_and_template",
                        expected:
                          "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                        value: input.boolean_and_number_and_template,
                      })) &&
                    (("number" ===
                      typeof input.boolean_and_number_and_template &&
                      Number.isFinite(input.boolean_and_number_and_template)) ||
                      "boolean" ===
                        typeof input.boolean_and_number_and_template ||
                      ("string" ===
                        typeof input.boolean_and_number_and_template &&
                        RegExp(/^prefix_(.*)/).test(
                          input.boolean_and_number_and_template,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".boolean_and_number_and_template",
                        expected:
                          "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                        value: input.boolean_and_number_and_template,
                      })),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagDefault",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagDefault",
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
        const encode = (input: TypeTagDefault): Uint8Array => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $throws = require("typia/lib/functional/$throws").$throws(
            "typia.protobuf.validateEncode",
          );
          const $ProtobufSizer =
            require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
          const $ProtobufWriter =
            require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
          const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
              // property "boolean";
              writer.uint32(8);
              writer.bool(input.boolean);
              // property "number";
              writer.uint32(17);
              writer.double(input.number);
              // property "string";
              writer.uint32(26);
              writer.string(input.string);
              // property "text";
              writer.uint32(34);
              writer.string(input.text);
              // property "boolean_and_number_and_string";
              if ("boolean" === typeof input.boolean_and_number_and_string) {
                writer.uint32(40);
                writer.bool(input.boolean_and_number_and_string);
              } else if (
                "number" === typeof input.boolean_and_number_and_string
              ) {
                writer.uint32(49);
                writer.double(input.boolean_and_number_and_string);
              } else if (
                "string" === typeof input.boolean_and_number_and_string
              ) {
                writer.uint32(58);
                writer.string(input.boolean_and_number_and_string);
              } else
                $throws({
                  expected:
                    '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                  value: input.boolean_and_number_and_string,
                });
              // property "union_but_boolean";
              if ("boolean" === typeof input.union_but_boolean) {
                writer.uint32(64);
                writer.bool(input.union_but_boolean);
              } else if ("number" === typeof input.union_but_boolean) {
                writer.uint32(73);
                writer.double(input.union_but_boolean);
              } else if ("string" === typeof input.union_but_boolean) {
                writer.uint32(82);
                writer.string(input.union_but_boolean);
              } else
                $throws({
                  expected: "((boolean & Default<false>) | number | string)",
                  value: input.union_but_boolean,
                });
              // property "union_but_number";
              if ("boolean" === typeof input.union_but_number) {
                writer.uint32(88);
                writer.bool(input.union_but_number);
              } else if ("number" === typeof input.union_but_number) {
                writer.uint32(97);
                writer.double(input.union_but_number);
              } else if ("string" === typeof input.union_but_number) {
                writer.uint32(106);
                writer.string(input.union_but_number);
              } else
                $throws({
                  expected: "((number & Default<1>) | boolean | string)",
                  value: input.union_but_number,
                });
              // property "union_but_string";
              if ("boolean" === typeof input.union_but_string) {
                writer.uint32(112);
                writer.bool(input.union_but_string);
              } else if ("number" === typeof input.union_but_string) {
                writer.uint32(121);
                writer.double(input.union_but_string);
              } else if ("string" === typeof input.union_but_string) {
                writer.uint32(130);
                writer.string(input.union_but_string);
              } else
                $throws({
                  expected: '((string & Default<"two">) | boolean | number)',
                  value: input.union_but_string,
                });
              // property "boolean_and_number_and_template";
              if ("boolean" === typeof input.boolean_and_number_and_template) {
                writer.uint32(136);
                writer.bool(input.boolean_and_number_and_template);
              } else if (
                "number" === typeof input.boolean_and_number_and_template
              ) {
                writer.uint32(145);
                writer.double(input.boolean_and_number_and_template);
              } else if (
                "string" === typeof input.boolean_and_number_and_template
              ) {
                writer.uint32(154);
                writer.string(input.boolean_and_number_and_template);
              } else
                $throws({
                  expected:
                    "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                  value: input.boolean_and_number_and_template,
                });
            };
            //TypeTagDefault;
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
      })(input),
    decode: (input: Uint8Array): typia.Resolved<TypeTagDefault> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          boolean: undefined as any,
          number: undefined as any,
          string: "" as any,
          text: "" as any,
          boolean_and_number_and_string: "" as any,
          union_but_boolean: "" as any,
          union_but_number: "" as any,
          union_but_string: "" as any,
          boolean_and_number_and_template: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // bool;
              output.boolean = reader.bool();
              break;
            case 2:
              // double;
              output.number = reader.double();
              break;
            case 3:
              // string;
              output.string = reader.string();
              break;
            case 4:
              // string;
              output.text = reader.string();
              break;
            case 5:
              // bool;
              output.boolean_and_number_and_string = reader.bool();
              break;
            case 6:
              // double;
              output.boolean_and_number_and_string = reader.double();
              break;
            case 7:
              // string;
              output.boolean_and_number_and_string = reader.string();
              break;
            case 8:
              // bool;
              output.union_but_boolean = reader.bool();
              break;
            case 9:
              // double;
              output.union_but_boolean = reader.double();
              break;
            case 10:
              // string;
              output.union_but_boolean = reader.string();
              break;
            case 11:
              // bool;
              output.union_but_number = reader.bool();
              break;
            case 12:
              // double;
              output.union_but_number = reader.double();
              break;
            case 13:
              // string;
              output.union_but_number = reader.string();
              break;
            case 14:
              // bool;
              output.union_but_string = reader.bool();
              break;
            case 15:
              // double;
              output.union_but_string = reader.double();
              break;
            case 16:
              // string;
              output.union_but_string = reader.string();
              break;
            case 17:
              // bool;
              output.boolean_and_number_and_template = reader.bool();
              break;
            case 18:
              // double;
              output.boolean_and_number_and_template = reader.double();
              break;
            case 19:
              // string;
              output.boolean_and_number_and_template = reader.string();
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
      'syntax = "proto3";\n\nmessage TypeTagDefault {\n    required bool boolean = 1;\n    required double number = 2;\n    required string string = 3;\n    required string text = 4;\n    oneof boolean_and_number_and_string {\n        bool v5 = 5;\n        double v6 = 6;\n        string v7 = 7;\n    }\n    oneof union_but_boolean {\n        bool v8 = 8;\n        double v9 = 9;\n        string v10 = 10;\n    }\n    oneof union_but_number {\n        bool v11 = 11;\n        double v12 = 12;\n        string v13 = 13;\n    }\n    oneof union_but_string {\n        bool v14 = 14;\n        double v15 = 15;\n        string v16 = 16;\n    }\n    oneof boolean_and_number_and_template {\n        bool v17 = 17;\n        double v18 = 18;\n        string v19 = 19;\n    }\n}',
  });
