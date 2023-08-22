import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_assertDecode_TagType = _test_protobuf_assertDecode(
    "TagType",
)<TagType>(TagType)({
    assertDecode: typia.protobuf.createAssertDecode<TagType>(),
    encode: typia.protobuf.createEncode<TagType>(),
});
