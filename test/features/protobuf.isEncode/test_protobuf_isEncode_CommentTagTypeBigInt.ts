import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_isEncode_CommentTagTypeBigInt =
    _test_protobuf_isEncode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        isEncode: (input) =>
            typia.protobuf.isEncode<CommentTagTypeBigInt>(input),
        message: typia.protobuf.message<CommentTagTypeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagTypeBigInt>(),
    });
