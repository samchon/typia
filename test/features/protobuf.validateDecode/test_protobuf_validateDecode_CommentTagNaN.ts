import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_validateDecode_CommentTagNaN =
    _test_protobuf_validateDecode("CommentTagNaN")<CommentTagNaN>(
        CommentTagNaN,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<CommentTagNaN>(input),
        encode: typia.protobuf.createEncode<CommentTagNaN>(),
    });
