import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_assertDecode_TagCustom = _test_protobuf_assertDecode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    assertDecode: typia.protobuf.createAssertDecode<TagCustom>(),
    encode: typia.protobuf.createEncode<TagCustom>(),
});
