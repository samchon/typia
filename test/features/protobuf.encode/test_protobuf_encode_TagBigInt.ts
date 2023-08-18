import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_encode_TagBigInt = _test_protobuf_encode<TagBigInt>(
    TagBigInt,
)({
    encode: (input) => typia.protobuf.encode<TagBigInt>(input),
    message: typia.protobuf.message<TagBigInt>(),
});
