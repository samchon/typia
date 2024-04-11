import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_assertDecodeCustom_TemplateAtomic =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)({
    decode: (input) =>
      ((
        input: Uint8Array,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): import("typia").Resolved<TemplateAtomic> => {
        const decode = (
          input: Uint8Array,
        ): import("typia").Resolved<TemplateAtomic> => {
          const $Reader = (typia.protobuf.assertDecode as any).Reader;
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
        };
        const assert = (
          input: any,
          errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
        ): TemplateAtomic => {
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
              const $guard = (typia.protobuf.assertDecode as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.prefix &&
                  RegExp(/^prefix_(.*)/).test(input.prefix)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".prefix",
                      expected: "`[object Object]${string}`",
                      value: input.prefix,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.postfix &&
                  RegExp(/(.*)_postfix$/).test(input.postfix)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".postfix",
                      expected: "`${string}[object Object]`",
                      value: input.postfix,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.middle_string &&
                  RegExp(/^the_(.*)_value$/).test(input.middle_string)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".middle_string",
                      expected: "`[object Object]${string}[object Object]`",
                      value: input.middle_string,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.middle_string_empty &&
                  RegExp(/^the_(.*)_value$/).test(input.middle_string_empty)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".middle_string_empty",
                      expected: "`[object Object]${string}[object Object]`",
                      value: input.middle_string_empty,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.middle_numeric &&
                  RegExp(
                    /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                  ).test(input.middle_numeric)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".middle_numeric",
                      expected: "`[object Object]${number}[object Object]`",
                      value: input.middle_numeric,
                    },
                    errorFactory,
                  )) &&
                ("the_false_value" === input.middle_boolean ||
                  "the_true_value" === input.middle_boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".middle_boolean",
                      expected: '("the_false_value" | "the_true_value")',
                      value: input.middle_boolean,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.ipv4 &&
                  RegExp(
                    /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(input.ipv4)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".ipv4",
                      expected:
                        "`${number}[object Object]${number}[object Object]${number}[object Object]${number}`",
                      value: input.ipv4,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.email &&
                  RegExp(/(.*)@(.*)\.(.*)/).test(input.email)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected:
                        "`${string}[object Object]${string}[object Object]${string}`",
                      value: input.email,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TemplateAtomic",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TemplateAtomic",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        };
        const output = decode(input);
        return assert(output, errorFactory) as any;
      })(input, (p) => new CustomGuardError(p)),
    encode: (input: TemplateAtomic): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
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
    },
  });
