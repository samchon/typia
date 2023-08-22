import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_decode_TagType = _test_protobuf_decode(
    "TagType",
)<TagType>(TagType)({
    decode: typia.protobuf.createDecode<TagType>(),
    encode: typia.protobuf.createEncode<TagType>(),
});
