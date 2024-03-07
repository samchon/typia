import typia from "typia";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_protobuf_assertEncodeCustom_TypeTagDefault =
  _test_protobuf_assertEncode(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)({
    encode: (input) =>
      ((
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): Uint8Array => {
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): TypeTagDefault => {
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
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagDefault => {
              const $guard = (typia.protobuf.assertEncode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("boolean" === typeof input.boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(boolean & Default<false>)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number",
                      expected: "(number & Default<1>)",
                      value: input.number,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: '(string & Default<"two">)',
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.text ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".text",
                      expected:
                        '(string & Default<"Very long text, can you understand it?">)',
                      value: input.text,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.boolean_and_number_and_string &&
                  Number.isFinite(input.boolean_and_number_and_string)) ||
                  "string" === typeof input.boolean_and_number_and_string ||
                  "boolean" === typeof input.boolean_and_number_and_string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean_and_number_and_string",
                      expected:
                        '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                      value: input.boolean_and_number_and_string,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.union_but_boolean ||
                  ("number" === typeof input.union_but_boolean &&
                    Number.isFinite(input.union_but_boolean)) ||
                  "boolean" === typeof input.union_but_boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".union_but_boolean",
                      expected:
                        "((boolean & Default<false>) | number | string)",
                      value: input.union_but_boolean,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.union_but_number ||
                  ("number" === typeof input.union_but_number &&
                    Number.isFinite(input.union_but_number)) ||
                  "boolean" === typeof input.union_but_number ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".union_but_number",
                      expected: "((number & Default<1>) | boolean | string)",
                      value: input.union_but_number,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.union_but_string &&
                  Number.isFinite(input.union_but_string)) ||
                  "string" === typeof input.union_but_string ||
                  "boolean" === typeof input.union_but_string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".union_but_string",
                      expected:
                        '((string & Default<"two">) | boolean | number)',
                      value: input.union_but_string,
                    },
                    errorFactory,
                  )) &&
                (null !== input.boolean_and_number_and_template ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean_and_number_and_template",
                      expected:
                        "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                      value: input.boolean_and_number_and_template,
                    },
                    errorFactory,
                  )) &&
                (undefined !== input.boolean_and_number_and_template ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean_and_number_and_template",
                      expected:
                        "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                      value: input.boolean_and_number_and_template,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.boolean_and_number_and_template &&
                  Number.isFinite(input.boolean_and_number_and_template)) ||
                  "boolean" === typeof input.boolean_and_number_and_template ||
                  ("string" === typeof input.boolean_and_number_and_template &&
                    RegExp(/^prefix_(.*)/).test(
                      input.boolean_and_number_and_template,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean_and_number_and_template",
                      expected:
                        "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                      value: input.boolean_and_number_and_template,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagDefault",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagDefault",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const encode = (input: TypeTagDefault): Uint8Array => {
          const $throws = (typia.protobuf.assertEncode as any).throws;
          const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
          const $Writer = (typia.protobuf.assertEncode as any).Writer;
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
          const sizer = encoder(new $Sizer());
          const writer = encoder(new $Writer(sizer));
          return writer.buffer();
        };
        return encode(assert(input, errorFactory));
      })(input, (p) => new CustomGuardError(p)),
    decode: (input: Uint8Array): import("typia").Resolved<TypeTagDefault> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
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
      const reader = new $Reader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage TypeTagDefault {\n  required bool boolean = 1;\n  required double number = 2;\n  required string string = 3;\n  required string text = 4;\n  oneof boolean_and_number_and_string {\n    bool v5 = 5;\n    double v6 = 6;\n    string v7 = 7;\n  }\n  oneof union_but_boolean {\n    bool v8 = 8;\n    double v9 = 9;\n    string v10 = 10;\n  }\n  oneof union_but_number {\n    bool v11 = 11;\n    double v12 = 12;\n    string v13 = 13;\n  }\n  oneof union_but_string {\n    bool v14 = 14;\n    double v15 = 15;\n    string v16 = 16;\n  }\n  oneof boolean_and_number_and_template {\n    bool v17 = 17;\n    double v18 = 18;\n    string v19 = 19;\n  }\n}',
  });
