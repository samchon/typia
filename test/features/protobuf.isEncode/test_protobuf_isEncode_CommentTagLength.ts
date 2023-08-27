import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_isEncode_CommentTagLength = _test_protobuf_isEncode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    isEncode: (input) => typia.protobuf.isEncode<CommentTagLength>(input),
    message: typia.protobuf.message<CommentTagLength>(),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
});
