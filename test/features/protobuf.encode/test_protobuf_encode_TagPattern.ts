import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_encode_TagPattern = _test_protobuf_encode(
    "TagPattern",
)<TagPattern>(TagPattern)({
    encode: (input) => typia.protobuf.encode<TagPattern>(input),
    message: typia.protobuf.message<TagPattern>(),
    decode: typia.protobuf.createDecode<TagPattern>(),
});
