import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_isEncode_TagNaN = _test_protobuf_isEncode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    isEncode: typia.protobuf.createIsEncode<TagNaN>(),
    message: typia.protobuf.message<TagNaN>(),
});
