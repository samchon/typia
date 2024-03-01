import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_createAssertEncode_TemplateAtomic =
  _test_protobuf_assertEncode(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )({
    encode: (input: any): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): TemplateAtomic => {
        const $guard = (typia.protobuf.createAssertEncode as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is TemplateAtomic => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.prefix &&
            RegExp(/^prefix_(.*)/).test(input.prefix) &&
            "string" === typeof input.postfix &&
            RegExp(/(.*)_postfix$/).test(input.postfix) &&
            "string" === typeof input.middle_string &&
            RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
            "string" === typeof input.middle_string_empty &&
            RegExp(/^the_(.*)_value$/).test(input.middle_string_empty) &&
            "string" === typeof input.middle_numeric &&
            RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
              input.middle_numeric,
            ) &&
            ("the_false_value" === input.middle_boolean ||
              "the_true_value" === input.middle_boolean) &&
            "string" === typeof input.ipv4 &&
            RegExp(
              /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
            ).test(input.ipv4) &&
            "string" === typeof input.email &&
            RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TemplateAtomic => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("string" === typeof input.prefix &&
                RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                $guard(_exceptionable, {
                  path: _path + ".prefix",
                  expected: "`prefix_${string}`",
                  value: input.prefix,
                })) &&
              (("string" === typeof input.postfix &&
                RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                $guard(_exceptionable, {
                  path: _path + ".postfix",
                  expected: "`${string}_postfix`",
                  value: input.postfix,
                })) &&
              (("string" === typeof input.middle_string &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_string",
                  expected: "`the_${string}_value`",
                  value: input.middle_string,
                })) &&
              (("string" === typeof input.middle_string_empty &&
                RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_string_empty",
                  expected: "`the_${string}_value`",
                  value: input.middle_string_empty,
                })) &&
              (("string" === typeof input.middle_numeric &&
                RegExp(/^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/).test(
                  input.middle_numeric,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".middle_numeric",
                  expected: "`the_${number}_value`",
                  value: input.middle_numeric,
                })) &&
              ("the_false_value" === input.middle_boolean ||
                "the_true_value" === input.middle_boolean ||
                $guard(_exceptionable, {
                  path: _path + ".middle_boolean",
                  expected: '("the_false_value" | "the_true_value")',
                  value: input.middle_boolean,
                })) &&
              (("string" === typeof input.ipv4 &&
                RegExp(
                  /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                ).test(input.ipv4)) ||
                $guard(_exceptionable, {
                  path: _path + ".ipv4",
                  expected: "`${number}.${number}.${number}.${number}`",
                  value: input.ipv4,
                })) &&
              (("string" === typeof input.email &&
                RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                $guard(_exceptionable, {
                  path: _path + ".email",
                  expected: "`${string}@${string}.${string}`",
                  value: input.email,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "TemplateAtomic",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "TemplateAtomic",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: TemplateAtomic): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "prefix";
            writer.uint32(10);
            writer.string(input.prefix);
            // property "postfix";
            writer.uint32(18);
            writer.string(input.postfix);
            // property "middle_string";
            writer.uint32(26);
            writer.string(input.middle_string);
            // property "middle_string_empty";
            writer.uint32(34);
            writer.string(input.middle_string_empty);
            // property "middle_numeric";
            writer.uint32(42);
            writer.string(input.middle_numeric);
            // property "middle_boolean";
            writer.uint32(50);
            writer.string(input.middle_boolean);
            // property "ipv4";
            writer.uint32(58);
            writer.string(input.ipv4);
            // property "email";
            writer.uint32(66);
            writer.string(input.email);
          };
          //TemplateAtomic;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input));
    },
    decode: (input: Uint8Array): typia.Resolved<TemplateAtomic> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          prefix: undefined as any,
          postfix: undefined as any,
          middle_string: undefined as any,
          middle_string_empty: undefined as any,
          middle_numeric: undefined as any,
          middle_boolean: undefined as any,
          ipv4: undefined as any,
          email: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.prefix = reader.string();
              break;
            case 2:
              // string;
              output.postfix = reader.string();
              break;
            case 3:
              // string;
              output.middle_string = reader.string();
              break;
            case 4:
              // string;
              output.middle_string_empty = reader.string();
              break;
            case 5:
              // string;
              output.middle_numeric = reader.string();
              break;
            case 6:
              // string;
              output.middle_boolean = reader.string();
              break;
            case 7:
              // string;
              output.ipv4 = reader.string();
              break;
            case 8:
              // string;
              output.email = reader.string();
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
      'syntax = "proto3";\n\nmessage TemplateAtomic {\n    required string prefix = 1;\n    required string postfix = 2;\n    required string middle_string = 3;\n    required string middle_string_empty = 4;\n    required string middle_numeric = 5;\n    required string middle_boolean = 6;\n    required string ipv4 = 7;\n    required string email = 8;\n}',
  });
