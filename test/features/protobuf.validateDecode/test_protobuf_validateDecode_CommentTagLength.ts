import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_validateDecode_CommentTagLength =
    _test_protobuf_validateDecode("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<CommentTagLength>(input),
        encode: typia.protobuf.createEncode<CommentTagLength>(),
    });
