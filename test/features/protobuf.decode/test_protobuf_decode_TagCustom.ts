import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagCustom } from "../../structures/TagCustom";

export const test_protobuf_decode_TagCustom = _test_protobuf_decode(
    "TagCustom",
)<TagCustom>(TagCustom)({
    decode: (input) => typia.protobuf.decode<TagCustom>(input),
    encode: typia.protobuf.createEncode<TagCustom>(),
});
