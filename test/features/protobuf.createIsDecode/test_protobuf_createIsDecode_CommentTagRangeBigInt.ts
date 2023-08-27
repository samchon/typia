import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_isDecode_CommentTagRangeBigInt =
    _test_protobuf_isDecode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )({
        isDecode: typia.protobuf.createIsDecode<CommentTagRangeBigInt>(),
        encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
    });
