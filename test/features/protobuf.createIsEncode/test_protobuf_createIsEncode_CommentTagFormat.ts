import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_isEncode_CommentTagFormat = _test_protobuf_isEncode(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
    isEncode: typia.protobuf.createIsEncode<CommentTagFormat>(),
    message: typia.protobuf.message<CommentTagFormat>(),
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
});
