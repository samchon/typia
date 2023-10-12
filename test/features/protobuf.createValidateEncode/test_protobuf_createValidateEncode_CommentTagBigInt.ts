import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createValidateEncode_CommentTagBigInt =
    _test_protobuf_validateEncode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        encode: typia.protobuf.createValidateEncode<CommentTagBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagBigInt>(),
        message: typia.protobuf.message<CommentTagBigInt>(),
    });
