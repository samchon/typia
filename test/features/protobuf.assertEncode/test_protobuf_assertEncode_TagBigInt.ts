import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_assertEncode_TagBigInt = _test_protobuf_assertEncode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    assertEncode: (input) => typia.protobuf.assertEncode<TagBigInt>(input),
    message: typia.protobuf.message<TagBigInt>(),
    decode: typia.protobuf.createDecode<TagBigInt>(),
});
