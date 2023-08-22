import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_protobuf_isDecode_TagTypeBigInt = _test_protobuf_isDecode(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    isDecode: (input) => typia.protobuf.isDecode<TagTypeBigInt>(input),
    encode: typia.protobuf.createEncode<TagTypeBigInt>(),
});
