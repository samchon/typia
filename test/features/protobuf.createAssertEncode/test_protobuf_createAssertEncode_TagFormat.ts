import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_assertEncode_TagFormat = _test_protobuf_assertEncode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    assertEncode: typia.protobuf.createAssertEncode<TagFormat>(),
    message: typia.protobuf.message<TagFormat>(),
    decode: typia.protobuf.createDecode<TagFormat>(),
});
