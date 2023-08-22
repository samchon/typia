import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_assertEncode_TagNaN = _test_protobuf_assertEncode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    assertEncode: (input) => typia.protobuf.assertEncode<TagNaN>(input),
    message: typia.protobuf.message<TagNaN>(),
    decode: typia.protobuf.createDecode<TagNaN>(),
});
