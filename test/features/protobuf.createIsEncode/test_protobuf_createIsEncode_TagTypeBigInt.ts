import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_isEncode_TagTypeBigInt = _test_protobuf_isEncode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    isEncode: typia.protobuf.createIsEncode<TagTypeBigInt>(),
    message: typia.protobuf.message<TagTypeBigInt>(),
    decode: typia.protobuf.createDecode<TagTypeBigInt>(),
});
