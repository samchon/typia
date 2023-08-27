import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_validateEncode_CommentTagRangeBigInt =
    _test_protobuf_validateEncode(
        "CommentTagRangeBigInt",
    )<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
        validateEncode:
            typia.protobuf.createValidateEncode<CommentTagRangeBigInt>(),
        message: typia.protobuf.message<CommentTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    });
