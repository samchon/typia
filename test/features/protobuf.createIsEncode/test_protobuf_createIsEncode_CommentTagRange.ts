import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_isEncode_CommentTagRange = _test_protobuf_isEncode(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    isEncode: typia.protobuf.createIsEncode<CommentTagRange>(),
    message: typia.protobuf.message<CommentTagRange>(),
    decode: typia.protobuf.createDecode<CommentTagRange>(),
});
