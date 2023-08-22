import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_assertEncode_TagRange = _test_protobuf_assertEncode(
    "TagRange",
)<TagRange>(TagRange)({
    assertEncode: (input) => typia.protobuf.assertEncode<TagRange>(input),
    message: typia.protobuf.message<TagRange>(),
    decode: typia.protobuf.createDecode<TagRange>(),
});
