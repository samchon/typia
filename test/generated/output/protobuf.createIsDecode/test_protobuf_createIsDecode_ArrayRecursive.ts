import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_protobuf_isDecode_ArrayRecursive = _test_protobuf_isDecode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    isDecode: (input: Uint8Array): ArrayRecursive | null => {
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
        const decode = (input: Uint8Array): ArrayRecursive => {
            const $Reader = (typia.protobuf.createIsDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    children: [] as any,
                    id: undefined as any,
                    code: "" as any,
                    sequence: undefined as any,
                    created_at: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<ArrayRecursive.ICategory>;
                            output.children.push(
                                $pdo0(reader, reader.uint32()),
                            );
                            break;
                        case 2:
                            // number;
                            output.id = reader.double();
                            break;
                        case 3:
                            // string;
                            output.code = reader.string();
                            break;
                        case 4:
                            // number;
                            output.sequence = reader.double();
                            break;
                        case 5:
                            // ArrayRecursive.ITimestamp;
                            output.created_at = $pdo1(reader, reader.uint32());
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
                    time: undefined as any,
                    zone: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // number;
                            output.time = reader.double();
                            break;
                        case 2:
                            // number;
                            output.zone = reader.double();
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
    },
    encode: (input: ArrayRecursive): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "children";
                if (0 !== input.children.length) {
                    for (const elem of input.children) {
                        // 1 -> ArrayRecursive.ICategory;
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
                // 5 -> ArrayRecursive.ITimestamp;
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
                        "object" === typeof elem && null !== elem && $io0(elem),
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
            //ArrayRecursive.ICategory;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
