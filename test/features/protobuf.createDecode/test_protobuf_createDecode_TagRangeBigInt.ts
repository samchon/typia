import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_protobuf_decode_TagRangeBigInt = _test_protobuf_decode(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    decode: typia.protobuf.createDecode<TagRangeBigInt>(),
    encode: typia.protobuf.createEncode<TagRangeBigInt>(),
});
