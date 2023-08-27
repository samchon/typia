import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_validateDecode_CommentTagDefault =
    _test_protobuf_validateDecode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<CommentTagDefault>(),
        encode: typia.protobuf.createEncode<CommentTagDefault>(),
    });
