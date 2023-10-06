import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createValidateEncode_CommentTagNaN = _test_protobuf_validateEncode(
    "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)({
    encode: (input) => typia.protobuf.validateEncode<CommentTagNaN>(input),
    decode: typia.protobuf.createDecode<CommentTagNaN>(),
    message: typia.protobuf.message<CommentTagNaN>(),
});
