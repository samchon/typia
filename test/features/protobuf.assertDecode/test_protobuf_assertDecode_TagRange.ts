import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_assertDecode_TagRange = _test_protobuf_assertDecode(
    "TagRange",
)<TagRange>(TagRange)({
    assertDecode: (input) => typia.protobuf.assertDecode<TagRange>(input),
    encode: typia.protobuf.createEncode<TagRange>(),
});
