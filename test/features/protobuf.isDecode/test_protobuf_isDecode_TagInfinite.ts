import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_isDecode_TagInfinite = _test_protobuf_isDecode(
    "TagInfinite",
)<TagInfinite>(TagInfinite)({
    isDecode: (input) => typia.protobuf.isDecode<TagInfinite>(input),
    encode: typia.protobuf.createEncode<TagInfinite>(),
});
