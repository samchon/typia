import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_createIsEncode_DynamicTree = _test_protobuf_isEncode(
    "DynamicTree",
)<DynamicTree>(DynamicTree)({
    encode: (input) =>
        ((input: DynamicTree): Uint8Array | null => {
            const is = (input: any): input is DynamicTree => {
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
                        if (true)
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
                const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                const $Writer = (typia.protobuf.isEncode as any).Writer;
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
                            // 2 -> DynamicTree;
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
                            if (true)
                                return (
                                    "object" === typeof value &&
                                    null !== value &&
                                    $io0(value)
                                );
                            return true;
                        });
                    //DynamicTree;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return is(input) ? encode(input) : null;
        })(input),
    decode: (input: Uint8Array): typia.Resolved<DynamicTree> => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                id: "" as any,
                sequence: undefined as any,
                children: {} as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.id = reader.string();
                        break;
                    case 2:
                        // double;
                        output.sequence = reader.double();
                        break;
                    case 3:
                        // type: Record<string, DynamicTree>;
                        (() => {
                            const piece = reader.uint32() + reader.index();
                            const entry = {
                                key: "" as any,
                                value: undefined as any,
                            };
                            while (reader.index() < piece) {
                                const kind = reader.uint32();
                                switch (kind >>> 3) {
                                    case 1:
                                        // string;
                                        entry.key = reader.string();
                                        break;
                                    case 2:
                                        // DynamicTree;
                                        entry.value = $pdo0(
                                            reader,
                                            reader.uint32(),
                                        );
                                        break;
                                    default:
                                        reader.skipType(kind & 7);
                                        break;
                                }
                            }
                            output.children[entry.key] = entry.value;
                        })();
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
        'syntax = "proto3";\n\nmessage DynamicTree {\n    required string id = 1;\n    required double sequence = 2;\n    map<string, DynamicTree> children = 3;\n}',
});
