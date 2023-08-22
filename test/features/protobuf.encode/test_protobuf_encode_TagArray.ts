import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_encode_TagArray = _test_protobuf_encode(
    "TagArray",
)<TagArray>(TagArray)({
    encode: (input) => typia.protobuf.encode<TagArray>(input),
    message: typia.protobuf.message<TagArray>(),
    decode: typia.protobuf.createDecode<TagArray>(),
});
