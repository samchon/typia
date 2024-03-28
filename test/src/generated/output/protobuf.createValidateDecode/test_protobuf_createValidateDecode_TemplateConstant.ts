import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_protobuf_createValidateDecode_TemplateConstant =
  _test_protobuf_validateDecode("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<TemplateConstant>> => {
      const validate = (input: any): typia.IValidation<TemplateConstant> => {
        const errors = [] as any[];
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
            ("1_postfix" === input.postfix ||
              "2_postfix" === input.postfix ||
              "3_postfix" === input.postfix) &&
            ("the_1_value_with_label_A" === input.combined ||
              "the_1_value_with_label_B" === input.combined ||
              "the_1_value_with_label_C" === input.combined ||
              "the_2_value_with_label_A" === input.combined ||
              "the_2_value_with_label_B" === input.combined ||
              "the_2_value_with_label_C" === input.combined ||
              "the_3_value_with_label_A" === input.combined ||
              "the_3_value_with_label_B" === input.combined ||
              "the_3_value_with_label_C" === input.combined);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.protobuf.createValidateDecode as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TemplateConstant => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.value) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TemplateConstant.Type>",
                    value: input.value,
                  })) &&
                  input.value
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TemplateConstant.Type",
                            value: elem,
                          })) &&
                          $vo1(
                            elem,
                            _path + ".value[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TemplateConstant.Type",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TemplateConstant.Type>",
                    value: input.value,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "prefix_A" === input.prefix ||
                  "prefix_B" === input.prefix ||
                  "prefix_C" === input.prefix ||
                  $report(_exceptionable, {
                    path: _path + ".prefix",
                    expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                    value: input.prefix,
                  }),
                "1_postfix" === input.postfix ||
                  "2_postfix" === input.postfix ||
                  "3_postfix" === input.postfix ||
                  $report(_exceptionable, {
                    path: _path + ".postfix",
                    expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                    value: input.postfix,
                  }),
                "the_1_value_with_label_A" === input.combined ||
                  "the_1_value_with_label_B" === input.combined ||
                  "the_1_value_with_label_C" === input.combined ||
                  "the_2_value_with_label_A" === input.combined ||
                  "the_2_value_with_label_B" === input.combined ||
                  "the_2_value_with_label_C" === input.combined ||
                  "the_3_value_with_label_A" === input.combined ||
                  "the_3_value_with_label_B" === input.combined ||
                  "the_3_value_with_label_C" === input.combined ||
                  $report(_exceptionable, {
                    path: _path + ".combined",
                    expected:
                      '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                    value: input.combined,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "TemplateConstant",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "TemplateConstant",
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
      ): import("typia").Resolved<TemplateConstant> => {
        const $Reader = (typia.protobuf.createValidateDecode as any).Reader;
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
      const output = decode(input);
      return validate(output) as any;
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
          ("1_postfix" === input.postfix ||
            "2_postfix" === input.postfix ||
            "3_postfix" === input.postfix) &&
          ("the_1_value_with_label_A" === input.combined ||
            "the_1_value_with_label_B" === input.combined ||
            "the_1_value_with_label_C" === input.combined ||
            "the_2_value_with_label_A" === input.combined ||
            "the_2_value_with_label_B" === input.combined ||
            "the_2_value_with_label_C" === input.combined ||
            "the_3_value_with_label_A" === input.combined ||
            "the_3_value_with_label_B" === input.combined ||
            "the_3_value_with_label_C" === input.combined);
        //TemplateConstant;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $Sizer());
      const writer = encoder(new $Writer(sizer));
      return writer.buffer();
    },
  });
