import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_encode_CommentTagNaN = _test_protobuf_encode(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
    encode: (input) => typia.protobuf.encode<CommentTagNaN>(input),
    message: typia.protobuf.message<CommentTagNaN>(),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
});
