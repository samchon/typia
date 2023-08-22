import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_isDecode_TagType = _test_protobuf_isDecode(
    "TagType",
)<TagType>(TagType)({
    isDecode: typia.protobuf.createIsDecode<TagType>(),
    encode: typia.protobuf.createEncode<TagType>(),
});
