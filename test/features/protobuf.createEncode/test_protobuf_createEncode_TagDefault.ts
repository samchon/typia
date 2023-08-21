import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_encode_TagDefault = _test_protobuf_encode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    encode: typia.protobuf.createEncode<TagDefault>(),
    message: typia.protobuf.message<TagDefault>(),
});
