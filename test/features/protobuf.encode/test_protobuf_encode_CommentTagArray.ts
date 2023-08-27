import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_encode_CommentTagArray = _test_protobuf_encode(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
    encode: (input) => typia.protobuf.encode<CommentTagArray>(input),
    message: typia.protobuf.message<CommentTagArray>(),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
});
