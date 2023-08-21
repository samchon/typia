import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_encode_TagNaN = _test_protobuf_encode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    encode: (input) => typia.protobuf.encode<TagNaN>(input),
    message: typia.protobuf.message<TagNaN>(),
});
