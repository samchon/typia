import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_protobuf_isDecode_TagAtomicUnion = _test_protobuf_isDecode(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    isDecode: (input) =>
        ((input: Uint8Array): TagAtomicUnion | null => {
            const is = (input: any): input is TagAtomicUnion => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const decode = (input: Uint8Array): TagAtomicUnion => {
                const $Reader = (typia.protobuf.isDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value.push(
                                    $pdo1(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo1 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value = reader.double();
                                break;
                            case 2:
                                output.value = reader.string();
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
            if (!is(output)) return null;
            return output;
        })(input),
    encode: (input: TagAtomicUnion): Uint8Array => {
        const $throws = (typia.protobuf.createEncode as any).throws;
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
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
                // property "value";
                if ("number" === typeof input.value) {
                    writer.uint32(9);
                    writer.double(input.value);
                } else if ("string" === typeof input.value) {
                    writer.uint32(18);
                    writer.string(input.value);
                } else
                    $throws({
                        expected: "(number | string)",
                        value: input.value,
                    });
            };
            const $io1 = (input: any): boolean =>
                ("string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length) ||
                ("number" === typeof input.value && 3 <= input.value);
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
