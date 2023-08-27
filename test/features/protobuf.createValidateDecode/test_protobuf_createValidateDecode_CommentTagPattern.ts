import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_validateDecode_CommentTagPattern =
    _test_protobuf_validateDecode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<CommentTagPattern>(),
        encode: typia.protobuf.createEncode<CommentTagPattern>(),
    });
