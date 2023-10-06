import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createEncode_CommentTagLength = _test_protobuf_encode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    encode: typia.protobuf.createEncode<CommentTagLength>(),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
    message: typia.protobuf.message<CommentTagLength>(),
});
