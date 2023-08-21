import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_isEncode_TagFormat = _test_protobuf_isEncode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    isEncode: (input) => typia.protobuf.isEncode<TagFormat>(input),
    message: typia.protobuf.message<TagFormat>(),
});
