import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_isEncode_CommentTagPattern = _test_protobuf_isEncode(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
    isEncode: (input) => typia.protobuf.isEncode<CommentTagPattern>(input),
    message: typia.protobuf.message<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
});
