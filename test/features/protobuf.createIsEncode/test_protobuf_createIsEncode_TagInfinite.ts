import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_protobuf_isEncode_TagInfinite = _test_protobuf_isEncode(
    "TagInfinite",
)<TagInfinite>(TagInfinite)({
    isEncode: typia.protobuf.createIsEncode<TagInfinite>(),
    message: typia.protobuf.message<TagInfinite>(),
    decode: typia.protobuf.createDecode<TagInfinite>(),
});
