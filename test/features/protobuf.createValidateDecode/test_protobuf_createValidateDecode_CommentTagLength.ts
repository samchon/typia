import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createValidateDecode_CommentTagLength = _test_protobuf_validateDecode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    decode: typia.protobuf.createValidateDecode<CommentTagLength>(),
    encode: typia.protobuf.createEncode<CommentTagLength>(),
});
