import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_encode_TagDefault = _test_protobuf_encode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    encode: (input) => typia.protobuf.encode<TagDefault>(input),
    message: typia.protobuf.message<TagDefault>(),
    decode: typia.protobuf.createDecode<TagDefault>(),
});
