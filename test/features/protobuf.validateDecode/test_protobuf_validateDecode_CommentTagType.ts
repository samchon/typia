import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createValidateDecode_CommentTagType = _test_protobuf_validateDecode(
    "CommentTagType",
)<CommentTagType>(CommentTagType)({
    decode: (input) => typia.protobuf.validateDecode<CommentTagType>(input),
    encode: typia.protobuf.createEncode<CommentTagType>(),
});
