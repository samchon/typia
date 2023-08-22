import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_isDecode_TagNaN = _test_protobuf_isDecode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    isDecode: typia.protobuf.createIsDecode<TagNaN>(),
    encode: typia.protobuf.createEncode<TagNaN>(),
});
