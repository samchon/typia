import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_isEncode_DynamicTree =
    _test_protobuf_isEncode<DynamicTree>(DynamicTree)({
        isEncode: (input: DynamicTree): Uint8Array | null => {
            const is = (input: any): input is DynamicTree => {
                const $join = (typia.protobuf.createIsEncode as any).join;
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "number" === typeof input.sequence &&
                    Number.isFinite(input.sequence) &&
                    "object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children) &&
                    $io1(input.children);
                const $io1 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "object" === typeof value &&
                                null !== value &&
                                $io0(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: DynamicTree): Uint8Array => {
                const $join = (typia.protobuf.createIsEncode as any).join;
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(10);
                        writer.string(input.id);
                        // property "sequence";
                        writer.uint32(17);
                        writer.double(input.sequence);
                        // property "children";
                        for (const [key, value] of Object.entries(
                            input.children,
                        )) {
                            writer.uint32(26);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.fork();
                            $peo0(value);
                            writer.ldelim();
                            writer.ldelim();
                        }
                    };
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "number" === typeof input.sequence &&
                        "object" === typeof input.children &&
                        null !== input.children &&
                        false === Array.isArray(input.children) &&
                        $io1(input.children);
                    const $io1 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    "object" === typeof value &&
                                    null !== value &&
                                    $io0(value)
                                );
                            return true;
                        });
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
            'syntax = "proto3";\n\nmessage DynamicTree {\n    required string id = 1;\n    required double sequence = 2;\n    map<string, DynamicTree> children = 3;\n}',
    });
