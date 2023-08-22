import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_encode_TagType = _test_protobuf_encode(
    "TagType",
)<TagType>(TagType)({
    encode: (input) => typia.protobuf.encode<TagType>(input),
    message: typia.protobuf.message<TagType>(),
    decode: typia.protobuf.createDecode<TagType>(),
});
