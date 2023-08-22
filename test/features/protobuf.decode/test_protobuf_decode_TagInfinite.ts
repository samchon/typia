import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_decode_TagInfinite = _test_protobuf_decode(
    "TagInfinite",
)<TagInfinite>(TagInfinite)({
    decode: (input) => typia.protobuf.decode<TagInfinite>(input),
    encode: typia.protobuf.createEncode<TagInfinite>(),
});
