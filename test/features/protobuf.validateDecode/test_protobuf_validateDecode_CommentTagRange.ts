import typia from "../../../src";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createValidateDecode_CommentTagRange = _test_protobuf_validateDecode(
    "CommentTagRange",
)<CommentTagRange>(CommentTagRange)({
    decode: (input) => typia.protobuf.validateDecode<CommentTagRange>(input),
    encode: typia.protobuf.createEncode<CommentTagRange>(),
});
