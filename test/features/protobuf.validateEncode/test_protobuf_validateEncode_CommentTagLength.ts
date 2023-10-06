import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createValidateEncode_CommentTagLength = _test_protobuf_validateEncode(
    "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
    encode: (input) => typia.protobuf.validateEncode<CommentTagLength>(input),
    decode: typia.protobuf.createDecode<CommentTagLength>(),
    message: typia.protobuf.message<CommentTagLength>(),
});
