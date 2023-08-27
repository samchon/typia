import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_isEncode_CommentTagArray = _test_protobuf_isEncode(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)({
    isEncode: typia.protobuf.createIsEncode<CommentTagArray>(),
    message: typia.protobuf.message<CommentTagArray>(),
    decode: typia.protobuf.createDecode<CommentTagArray>(),
});
