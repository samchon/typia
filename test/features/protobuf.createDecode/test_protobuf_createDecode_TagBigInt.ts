import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_decode_TagBigInt = _test_protobuf_decode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    decode: typia.protobuf.createDecode<TagBigInt>(),
    encode: typia.protobuf.createEncode<TagBigInt>(),
});
