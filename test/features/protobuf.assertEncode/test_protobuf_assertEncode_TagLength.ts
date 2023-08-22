import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_assertEncode_TagLength = _test_protobuf_assertEncode(
    "TagLength",
)<TagLength>(TagLength)({
    assertEncode: (input) => typia.protobuf.assertEncode<TagLength>(input),
    message: typia.protobuf.message<TagLength>(),
    decode: typia.protobuf.createDecode<TagLength>(),
});
