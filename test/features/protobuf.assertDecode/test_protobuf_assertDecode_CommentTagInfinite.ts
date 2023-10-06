import typia from "../../../src";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createAssertDecode_CommentTagInfinite = _test_protobuf_assertDecode(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
    decode: (input) => typia.protobuf.assertDecode<CommentTagInfinite>(input),
    encode: typia.protobuf.createEncode<CommentTagInfinite>(),
});
