import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_assertDecode_TagFormat = _test_protobuf_assertDecode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    assertDecode: (input) => typia.protobuf.assertDecode<TagFormat>(input),
    encode: typia.protobuf.createEncode<TagFormat>(),
});
