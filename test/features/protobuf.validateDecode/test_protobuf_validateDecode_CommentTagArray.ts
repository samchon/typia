import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createValidateDecode_CommentTagArray =
    _test_protobuf_validateDecode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        decode: (input) =>
            typia.protobuf.validateDecode<CommentTagArray>(input),
        encode: typia.protobuf.createEncode<CommentTagArray>(),
    });
