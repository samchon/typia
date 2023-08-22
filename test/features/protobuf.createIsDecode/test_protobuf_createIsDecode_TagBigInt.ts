import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_isDecode_TagBigInt = _test_protobuf_isDecode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    isDecode: typia.protobuf.createIsDecode<TagBigInt>(),
    encode: typia.protobuf.createEncode<TagBigInt>(),
});
