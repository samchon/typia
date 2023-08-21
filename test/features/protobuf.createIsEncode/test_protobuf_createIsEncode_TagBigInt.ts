import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_isEncode_TagBigInt = _test_protobuf_isEncode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    isEncode: typia.protobuf.createIsEncode<TagBigInt>(),
    message: typia.protobuf.message<TagBigInt>(),
});
