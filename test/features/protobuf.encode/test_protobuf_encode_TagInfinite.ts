import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_encode_TagInfinite = _test_protobuf_encode(
    "TagInfinite",
)<TagInfinite>(TagInfinite)({
    encode: (input) => typia.protobuf.encode<TagInfinite>(input),
    message: typia.protobuf.message<TagInfinite>(),
    decode: typia.protobuf.createDecode<TagInfinite>(),
});
