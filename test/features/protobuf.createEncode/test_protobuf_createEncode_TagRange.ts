import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagRange } from "../../structures/TagRange";

export const test_protobuf_encode_TagRange = _test_protobuf_encode<TagRange>(
    TagRange,
)({
    encode: typia.protobuf.createEncode<TagRange>(),
    message: typia.protobuf.message<TagRange>(),
});
