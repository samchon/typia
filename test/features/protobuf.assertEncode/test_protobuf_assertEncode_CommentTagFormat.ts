import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createAssertEncode_CommentTagFormat = _test_protobuf_assertEncode(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)({
    encode: (input) => typia.protobuf.assertEncode<CommentTagFormat>(input),
    decode: typia.protobuf.createDecode<CommentTagFormat>(),
    message: typia.protobuf.message<CommentTagFormat>(),
});
