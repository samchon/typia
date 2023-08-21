import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_assertEncode_TagLength = _test_protobuf_assertEncode(
    "TagLength",
)<TagLength>(TagLength)({
    assertEncode: typia.protobuf.createAssertEncode<TagLength>(),
    message: typia.protobuf.message<TagLength>(),
});
