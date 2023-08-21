import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_protobuf_isEncode_ArrayRecursive = _test_protobuf_isEncode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    isEncode: (input: ArrayRecursive): Uint8Array | null => {
        const is = (input: any): input is ArrayRecursive => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof (input.created_at as any).time &&
                Number.isFinite((input.created_at as any).time) &&
                "number" === typeof (input.created_at as any).zone &&
                Number.isFinite((input.created_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const encode = (input: ArrayRecursive): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "children";
                    if (0 !== input.children.length) {
                        for (const elem of input.children) {
                            writer.uint32(10);
                            writer.fork();
                            $peo0(elem);
                            writer.ldelim();
                        }
                    }
                    // property "id";
                    writer.uint32(17);
                    writer.double(input.id);
                    // property "code";
                    writer.uint32(26);
                    writer.string(input.code);
                    // property "sequence";
                    writer.uint32(33);
                    writer.double(input.sequence);
                    // property "created_at";
                    writer.uint32(42);
                    writer.fork();
                    $peo1(input.created_at);
                    writer.ldelim();
                };
                const $peo1 = (input: any): any => {
                    // property "time";
                    writer.uint32(9);
                    writer.double(input.time);
                    // property "zone";
                    writer.uint32(17);
                    writer.double(input.zone);
                };
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        };
        return is(input) ? encode(input) : null;
    },
    message:
        'syntax = "proto3";\n\nmessage ArrayRecursive {\n    message ICategory {\n        repeated ArrayRecursive.ICategory children = 1;\n        required double id = 2;\n        required string code = 3;\n        required double sequence = 4;\n        required ArrayRecursive.ITimestamp created_at = 5;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n}',
});
