import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_encode_CommentTagLength = _test_protobuf_encode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    encode: (input) => typia.protobuf.encode<CommentTagLength>(input),
    message: typia.protobuf.message<CommentTagLength>(),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
});
