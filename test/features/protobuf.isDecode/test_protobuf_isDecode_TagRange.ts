import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_isDecode_TagRange = _test_protobuf_isDecode(
    "TagRange",
)<TagRange>(TagRange)({
    isDecode: (input) => typia.protobuf.isDecode<TagRange>(input),
    encode: typia.protobuf.createEncode<TagRange>(),
});
