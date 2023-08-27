import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_validateDecode_CommentTagInfinite =
    _test_protobuf_validateDecode("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<CommentTagInfinite>(input),
        encode: typia.protobuf.createEncode<CommentTagInfinite>(),
    });
