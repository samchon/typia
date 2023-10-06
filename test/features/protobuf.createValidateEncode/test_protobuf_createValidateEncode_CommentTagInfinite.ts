import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_createValidateEncode_CommentTagInfinite = _test_protobuf_validateEncode(
    "CommentTagInfinite",
)<CommentTagInfinite>(CommentTagInfinite)({
    encode: typia.protobuf.createValidateEncode<CommentTagInfinite>(),
    decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    message: typia.protobuf.message<CommentTagInfinite>(),
});
