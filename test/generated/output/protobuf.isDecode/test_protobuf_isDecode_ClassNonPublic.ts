import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_isDecode_ClassNonPublic = _test_protobuf_isDecode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    isDecode: (input) =>
        ((input: Uint8Array): ClassNonPublic | null => {
            const is = (input: any): input is ClassNonPublic => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).implicit &&
                    "string" === typeof (input as any).shown
                );
            };
            const decode = (input: Uint8Array): ClassNonPublic => {
                const $Reader = (typia.protobuf.isDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        implicit: "" as any,
                        shown: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.implicit = reader.string();
                                break;
                            case 2:
                                output.shown = reader.string();
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
        })(input),
    encode: (input: ClassNonPublic): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "implicit";
                writer.uint32(10);
                writer.string(input.implicit);
                // property "shown";
                writer.uint32(18);
                writer.string(input.shown);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
});
