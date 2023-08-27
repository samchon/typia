import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_decode_CommentTagTypeBigInt = _test_protobuf_decode(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
    decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
});
