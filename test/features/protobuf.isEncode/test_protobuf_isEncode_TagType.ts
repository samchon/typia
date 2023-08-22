import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_isEncode_TagType = _test_protobuf_isEncode(
    "TagType",
)<TagType>(TagType)({
    isEncode: (input) => typia.protobuf.isEncode<TagType>(input),
    message: typia.protobuf.message<TagType>(),
    decode: typia.protobuf.createDecode<TagType>(),
});
