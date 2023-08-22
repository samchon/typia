import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_encode_TagRangeBigInt = _test_protobuf_encode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    encode: typia.protobuf.createEncode<TagRangeBigInt>(),
    message: typia.protobuf.message<TagRangeBigInt>(),
    decode: typia.protobuf.createDecode<TagRangeBigInt>(),
});
