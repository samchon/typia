import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_encode_TagType = _test_protobuf_encode(
    "TagType",
)<TagType>(TagType)({
    encode: typia.protobuf.createEncode<TagType>(),
    message: typia.protobuf.message<TagType>(),
    decode: typia.protobuf.createDecode<TagType>(),
});
