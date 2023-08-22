import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_isDecode_TagInfinite = _test_protobuf_isDecode(
    "TagInfinite",
)<TagInfinite>(TagInfinite)({
    isDecode: typia.protobuf.createIsDecode<TagInfinite>(),
    encode: typia.protobuf.createEncode<TagInfinite>(),
});
