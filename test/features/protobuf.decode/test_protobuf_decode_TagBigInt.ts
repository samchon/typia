import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_protobuf_decode_TagBigInt = _test_protobuf_decode(
    "TagBigInt",
)<TagBigInt>(TagBigInt)({
    decode: (input) => typia.protobuf.decode<TagBigInt>(input),
    encode: typia.protobuf.createEncode<TagBigInt>(),
});
