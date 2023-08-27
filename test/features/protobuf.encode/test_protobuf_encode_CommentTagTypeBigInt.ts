import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_encode_CommentTagTypeBigInt = _test_protobuf_encode(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    encode: (input) => typia.protobuf.encode<CommentTagTypeBigInt>(input),
    message: typia.protobuf.message<CommentTagTypeBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
});
