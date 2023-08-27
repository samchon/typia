import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_encode_CommentTagRangeBigInt = _test_protobuf_encode(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
    encode: (input) => typia.protobuf.encode<CommentTagRangeBigInt>(input),
    message: typia.protobuf.message<CommentTagRangeBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
});
