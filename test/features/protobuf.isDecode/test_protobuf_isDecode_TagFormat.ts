import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TagFormat } from "../../structures/TagFormat";

export const test_protobuf_isDecode_TagFormat = _test_protobuf_isDecode(
    "TagFormat",
)<TagFormat>(TagFormat)({
    isDecode: (input) => typia.protobuf.isDecode<TagFormat>(input),
    encode: typia.protobuf.createEncode<TagFormat>(),
});
