import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_isEncode_TagBigInt = _test_protobuf_isEncode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    isEncode: (input) => typia.protobuf.isEncode<TagBigInt>(input),
    message: typia.protobuf.message<TagBigInt>(),
    decode: typia.protobuf.createDecode<TagBigInt>(),
});
