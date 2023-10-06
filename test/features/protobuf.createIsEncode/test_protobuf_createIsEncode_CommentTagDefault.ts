import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createIsEncode_CommentTagDefault = _test_protobuf_isEncode(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)({
    encode: typia.protobuf.createIsEncode<CommentTagDefault>(),
    decode: typia.protobuf.createDecode<CommentTagDefault>(),
    message: typia.protobuf.message<CommentTagDefault>(),
});
