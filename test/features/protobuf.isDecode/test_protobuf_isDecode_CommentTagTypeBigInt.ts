import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_isDecode_CommentTagTypeBigInt =
    _test_protobuf_isDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        isDecode: (input) =>
            typia.protobuf.isDecode<CommentTagTypeBigInt>(input),
        encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    });
