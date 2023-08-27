import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_assertEncode_CommentTagRangeBigInt =
    _test_protobuf_assertEncode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagRangeBigInt>(input),
        message: typia.protobuf.message<CommentTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    });
