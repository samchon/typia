import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_decode_TagPattern = _test_protobuf_decode(
    "TagPattern",
)<TagPattern>(TagPattern)({
    decode: (input) => typia.protobuf.decode<TagPattern>(input),
    encode: typia.protobuf.createEncode<TagPattern>(),
});
