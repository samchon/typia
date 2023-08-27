import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_validateEncode_CommentTagTypeBigInt =
    _test_protobuf_validateEncode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagTypeBigInt>(input),
        message: typia.protobuf.message<CommentTagTypeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    });
