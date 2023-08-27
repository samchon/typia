import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_isEncode_CommentTagDefault = _test_protobuf_isEncode(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
    isEncode: (input) => typia.protobuf.isEncode<CommentTagDefault>(input),
    message: typia.protobuf.message<CommentTagDefault>(),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
});
