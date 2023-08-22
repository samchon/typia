import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_encode_TagTypeBigInt = _test_protobuf_encode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    encode: typia.protobuf.createEncode<TagTypeBigInt>(),
    message: typia.protobuf.message<TagTypeBigInt>(),
    decode: typia.protobuf.createDecode<TagTypeBigInt>(),
});
