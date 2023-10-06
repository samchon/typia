import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_createDecode_CommentTagPattern = _test_protobuf_decode(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
    decode: typia.protobuf.createDecode<CommentTagPattern>(),
    encode: typia.protobuf.createEncode<CommentTagPattern>(),
});
