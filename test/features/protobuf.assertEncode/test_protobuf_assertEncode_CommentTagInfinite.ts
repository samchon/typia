import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createAssertEncode_CommentTagInfinite = _test_protobuf_assertEncode(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagInfinite>(input),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
});
