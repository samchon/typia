import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_assertDecode_TagBigInt = _test_protobuf_assertDecode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    assertDecode: typia.protobuf.createAssertDecode<TagBigInt>(),
    encode: typia.protobuf.createEncode<TagBigInt>(),
});
