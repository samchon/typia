import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_isDecode_TagRangeBigInt = _test_protobuf_isDecode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    isDecode: typia.protobuf.createIsDecode<TagRangeBigInt>(),
    encode: typia.protobuf.createEncode<TagRangeBigInt>(),
});
