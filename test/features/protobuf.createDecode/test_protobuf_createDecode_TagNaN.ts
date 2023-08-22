import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagNaN } from "../../structures/TagNaN";

export const test_protobuf_decode_TagNaN = _test_protobuf_decode(
    "TagNaN",
)<TagNaN>(TagNaN)({
    decode: typia.protobuf.createDecode<TagNaN>(),
    encode: typia.protobuf.createEncode<TagNaN>(),
});
