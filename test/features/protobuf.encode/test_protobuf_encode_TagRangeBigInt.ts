import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_encode_TagRangeBigInt = _test_protobuf_encode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    encode: (input) => typia.protobuf.encode<TagRangeBigInt>(input),
    message: typia.protobuf.message<TagRangeBigInt>(),
});
