import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagPattern } from "../../structures/TagPattern";

export const test_protobuf_isDecode_TagPattern = _test_protobuf_isDecode(
    "TagPattern",
)<TagPattern>(TagPattern)({
    isDecode: (input) => typia.protobuf.isDecode<TagPattern>(input),
    encode: typia.protobuf.createEncode<TagPattern>(),
});
