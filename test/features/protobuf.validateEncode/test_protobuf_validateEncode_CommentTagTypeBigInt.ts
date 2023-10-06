import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_createValidateEncode_CommentTagTypeBigInt =
    _test_protobuf_validateEncode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        encode: (input) =>
            typia.protobuf.validateEncode<CommentTagTypeBigInt>(input),
        decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
        message: typia.protobuf.message<CommentTagTypeBigInt>(),
    });
