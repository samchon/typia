import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_encode_CommentTagPattern = _test_protobuf_encode(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
    encode: (input) => typia.protobuf.encode<CommentTagPattern>(input),
    message: typia.protobuf.message<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
});
