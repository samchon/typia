import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_assertDecode_TagType = _test_protobuf_assertDecode(
    "TagType",
)<TagType>(TagType)({
    assertDecode: (input) => typia.protobuf.assertDecode<TagType>(input),
    encode: typia.protobuf.createEncode<TagType>(),
});
