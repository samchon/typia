import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_validateDecode_CommentTagTypeBigInt =
    _test_protobuf_validateDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        validateDecode:
            typia.protobuf.createValidateDecode<CommentTagTypeBigInt>(),
        encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    });
