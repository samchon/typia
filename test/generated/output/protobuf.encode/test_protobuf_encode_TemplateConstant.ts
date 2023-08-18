import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_protobuf_encode_TemplateConstant =
    _test_protobuf_encode<TemplateConstant>(TemplateConstant)({
        encode: (input) =>
            ((input: TemplateConstant): Uint8Array => {
                const $Sizer = (typia.protobuf.encode as any).Sizer;
                const $Writer = (typia.protobuf.encode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
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
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            })(input),
        message:
            'syntax = "proto3";\n\nmessage TemplateConstant {\n    repeated TemplateConstant.Type value = 1;\n    message Type {\n        required string prefix = 1;\n        required string postfix = 2;\n        required string combined = 3;\n    }\n}',
    });
