import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_validateDecode_CommentTagArray =
    _test_protobuf_validateDecode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        validateDecode: typia.protobuf.createValidateDecode<CommentTagArray>(),
        encode: typia.protobuf.createEncode<CommentTagArray>(),
    });
