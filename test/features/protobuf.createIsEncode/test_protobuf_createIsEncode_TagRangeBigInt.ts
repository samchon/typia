import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_isEncode_TagRangeBigInt = _test_protobuf_isEncode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    isEncode: typia.protobuf.createIsEncode<TagRangeBigInt>(),
    message: typia.protobuf.message<TagRangeBigInt>(),
    decode: typia.protobuf.createDecode<TagRangeBigInt>(),
});
