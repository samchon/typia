import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagType } from "../../structures/TagType";

export const test_protobuf_assertEncode_TagType = _test_protobuf_assertEncode(
    "TagType",
)<TagType>(TagType)({
    assertEncode: typia.protobuf.createAssertEncode<TagType>(),
    message: typia.protobuf.message<TagType>(),
    decode: typia.protobuf.createDecode<TagType>(),
});
