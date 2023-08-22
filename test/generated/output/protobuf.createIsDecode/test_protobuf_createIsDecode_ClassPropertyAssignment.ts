import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_isDecode_ClassPropertyAssignment =
    _test_protobuf_isDecode("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        isDecode: (input: Uint8Array): ClassPropertyAssignment | null => {
            const is = (input: any): input is ClassPropertyAssignment => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "assignment" === input.note &&
                    false === input.editable &&
                    "boolean" === typeof input.incremental;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const decode = (input: Uint8Array): ClassPropertyAssignment => {
                const $Reader = (typia.protobuf.createIsDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        note: undefined as any,
                        editable: undefined as any,
                        incremental: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.note = reader.string();
                                break;
                            case 4:
                                output.editable = reader.bool();
                                break;
                            case 5:
                                output.incremental = reader.bool();
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
            if (!is(input)) return null;
            const output = decode(input);
            return output;
        },
        encode: (input: ClassPropertyAssignment): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "note";
                    writer.uint32(26);
                    writer.string(input.note);
                    // property "editable";
                    writer.uint32(32);
                    writer.bool(input.editable);
                    // property "incremental";
                    writer.uint32(40);
                    writer.bool(input.incremental);
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
