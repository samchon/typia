import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_encode_CommentTagBigInt = _test_protobuf_encode(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
    encode: typia.protobuf.createEncode<CommentTagBigInt>(),
    message: typia.protobuf.message<CommentTagBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagBigInt>(),
});
