import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_isEncode_CommentTagRangeBigInt =
    _test_protobuf_isEncode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )({
        isEncode: (input) =>
            typia.protobuf.isEncode<CommentTagRangeBigInt>(input),
        message: typia.protobuf.message<CommentTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    });
