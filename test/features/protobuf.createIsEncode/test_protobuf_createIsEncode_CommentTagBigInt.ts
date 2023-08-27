import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_isEncode_CommentTagBigInt = _test_protobuf_isEncode(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
    isEncode: typia.protobuf.createIsEncode<CommentTagBigInt>(),
    message: typia.protobuf.message<CommentTagBigInt>(),
    decode: typia.protobuf.createDecode<CommentTagBigInt>(),
});
