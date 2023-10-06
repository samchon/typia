import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createIsEncode_CommentTagPattern = _test_protobuf_isEncode(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
    encode: typia.protobuf.createIsEncode<CommentTagPattern>(),
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    message: typia.protobuf.message<CommentTagPattern>(),
});
