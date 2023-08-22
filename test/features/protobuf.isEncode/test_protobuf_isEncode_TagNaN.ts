import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_isEncode_TagNaN = _test_protobuf_isEncode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    isEncode: (input) => typia.protobuf.isEncode<TagNaN>(input),
    message: typia.protobuf.message<TagNaN>(),
    decode: typia.protobuf.createDecode<TagNaN>(),
});
