import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagDefault } from "../../structures/TagDefault";

export const test_protobuf_decode_TagDefault = _test_protobuf_decode(
    "TagDefault",
)<TagDefault>(TagDefault)({
    decode: typia.protobuf.createDecode<TagDefault>(),
    encode: typia.protobuf.createEncode<TagDefault>(),
});
