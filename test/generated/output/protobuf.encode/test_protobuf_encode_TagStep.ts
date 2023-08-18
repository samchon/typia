import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagStep } from "../../../structures/TagStep";

export const test_protobuf_encode_TagStep = _test_protobuf_encode<TagStep>(
    TagStep,
)({
    encode: (input) =>
        ((input: TagStep): Uint8Array => {
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
                    // property "exclusiveMinimum";
                    writer.uint32(9);
                    writer.double(input.exclusiveMinimum);
                    // property "minimum";
                    writer.uint32(17);
                    writer.double(input.minimum);
                    // property "range";
                    writer.uint32(25);
                    writer.double(input.range);
                    // property "multipleOf";
                    writer.uint32(33);
                    writer.double(input.multipleOf);
                };
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.exclusiveMinimum &&
                    0 === (input.exclusiveMinimum % 5) - 3 &&
                    3 < input.exclusiveMinimum &&
                    "number" === typeof input.minimum &&
                    0 === (input.minimum % 5) - 3 &&
                    3 <= input.minimum &&
                    "number" === typeof input.range &&
                    0 === (input.range % 5) - 0 &&
                    0 < input.range &&
                    100 > input.range &&
                    "number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 5 &&
                    3 <= input.multipleOf &&
                    99 >= input.multipleOf;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        })(input),
    message:
        'syntax = "proto3";\n\nmessage TagStep {\n    repeated TagStep.Type value = 1;\n    message Type {\n        required double exclusiveMinimum = 1;\n        required double minimum = 2;\n        required double range = 3;\n        required double multipleOf = 4;\n    }\n}',
});
