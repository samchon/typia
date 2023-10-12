import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createDecode_CommentTagRangeBigInt =
    _test_protobuf_decode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )({
        decode: (input) => typia.protobuf.decode<CommentTagRangeBigInt>(input),
        encode: typia.protobuf.createEncode<CommentTagRangeBigInt>(),
    });
