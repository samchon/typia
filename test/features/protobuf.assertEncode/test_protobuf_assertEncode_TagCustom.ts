import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_assertEncode_TagCustom = _test_protobuf_assertEncode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    assertEncode: (input) => typia.protobuf.assertEncode<TagCustom>(input),
    message: typia.protobuf.message<TagCustom>(),
});
