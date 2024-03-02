import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../../internal/_test_protobuf_assertDecode";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_protobuf_createAssertDecode_TemplateConstant =
  _test_protobuf_assertDecode(TypeGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)({
    decode: (
      input: Uint8Array,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.Resolved<TemplateConstant> => {
      const decode = (input: Uint8Array): typia.Resolved<TemplateConstant> => {
        const $Reader = (typia.protobuf.createAssertDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            value: [] as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // type: Array<TemplateConstant.Type>;
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
            prefix: undefined as any,
            postfix: undefined as any,
            combined: undefined as any,
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
                output.combined = reader.string();
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
      ): TemplateConstant => {
        const __is = (input: any): input is TemplateConstant => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            ("prefix_A" === input.prefix ||
              "prefix_B" === input.prefix ||
              "prefix_C" === input.prefix) &&
            ("3_postfix" === input.postfix ||
              "2_postfix" === input.postfix ||
              "1_postfix" === input.postfix) &&
            ("the_3_value_with_label_A" === input.combined ||
              "the_3_value_with_label_B" === input.combined ||
              "the_3_value_with_label_C" === input.combined ||
              "the_2_value_with_label_A" === input.combined ||
              "the_2_value_with_label_B" === input.combined ||
              "the_2_value_with_label_C" === input.combined ||
              "the_1_value_with_label_A" === input.combined ||
              "the_1_value_with_label_B" === input.combined ||
              "the_1_value_with_label_C" === input.combined);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TemplateConstant => {
            const $guard = (typia.protobuf.createAssertDecode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TemplateConstant.Type>",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TemplateConstant.Type",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "TemplateConstant.Type",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<TemplateConstant.Type>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("prefix_A" === input.prefix ||
                "prefix_B" === input.prefix ||
                "prefix_C" === input.prefix ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".prefix",
                    expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                    value: input.prefix,
                  },
                  errorFactory,
                )) &&
              ("3_postfix" === input.postfix ||
                "2_postfix" === input.postfix ||
                "1_postfix" === input.postfix ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".postfix",
                    expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                    value: input.postfix,
                  },
                  errorFactory,
                )) &&
              ("the_3_value_with_label_A" === input.combined ||
                "the_3_value_with_label_B" === input.combined ||
                "the_3_value_with_label_C" === input.combined ||
                "the_2_value_with_label_A" === input.combined ||
                "the_2_value_with_label_B" === input.combined ||
                "the_2_value_with_label_C" === input.combined ||
                "the_1_value_with_label_A" === input.combined ||
                "the_1_value_with_label_B" === input.combined ||
                "the_1_value_with_label_C" === input.combined ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".combined",
                    expected:
                      '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                    value: input.combined,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TemplateConstant",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TemplateConstant",
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
    },
    encode: (input: TemplateConstant): Uint8Array => {
      const $Sizer = (typia.protobuf.createEncode as any).Sizer;
      const $Writer = (typia.protobuf.createEncode as any).Writer;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> TemplateConstant.Type;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "prefix";
          writer.uint32(10);
          writer.string(input.prefix);
          // property "postfix";
          writer.uint32(18);
          writer.string(input.postfix);
          // property "combined";
          writer.uint32(26);
          writer.string(input.combined);
        };
        const $io1 = (input: any): boolean =>
          ("prefix_A" === input.prefix ||
            "prefix_B" === input.prefix ||
            "prefix_C" === input.prefix) &&
          ("3_postfix" === input.postfix ||
            "2_postfix" === input.postfix ||
            "1_postfix" === input.postfix) &&
          ("the_3_value_with_label_A" === input.combined ||
            "the_3_value_with_label_B" === input.combined ||
            "the_3_value_with_label_C" === input.combined ||
            "the_2_value_with_label_A" === input.combined ||
            "the_2_value_with_label_B" === input.combined ||
            "the_2_value_with_label_C" === input.combined ||
            "the_1_value_with_label_A" === input.combined ||
            "the_1_value_with_label_B" === input.combined ||
            "the_1_value_with_label_C" === input.combined);
        //TemplateConstant;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
