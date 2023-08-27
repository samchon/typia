import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_encode_CommentTagType = _test_protobuf_encode(
    "CommentTagType",
)<CommentTagType>(CommentTagType)({
    encode: typia.protobuf.createEncode<CommentTagType>(),
    message: typia.protobuf.message<CommentTagType>(),
    decode: typia.protobuf.createDecode<CommentTagType>(),
});
