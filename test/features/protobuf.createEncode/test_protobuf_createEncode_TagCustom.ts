import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_encode_TagCustom = _test_protobuf_encode<TagCustom>(
    TagCustom,
)({
    encode: typia.protobuf.createEncode<TagCustom>(),
    message: typia.protobuf.message<TagCustom>(),
});
