import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_decode_TagArray = _test_protobuf_decode(
    "TagArray",
)<TagArray>(TagArray)({
    decode: (input) => typia.protobuf.decode<TagArray>(input),
    encode: typia.protobuf.createEncode<TagArray>(),
});
