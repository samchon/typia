import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_encode_CommentTagDefault = _test_protobuf_encode(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
    encode: (input) => typia.protobuf.encode<CommentTagDefault>(input),
    message: typia.protobuf.message<CommentTagDefault>(),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
});
