import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagArray } from "../../structures/TagArray";

export const test_protobuf_isDecode_TagArray = _test_protobuf_isDecode(
    "TagArray",
)<TagArray>(TagArray)({
    isDecode: (input) => typia.protobuf.isDecode<TagArray>(input),
    encode: typia.protobuf.createEncode<TagArray>(),
});
