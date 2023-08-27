import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_assertEncode_CommentTagBigInt =
    _test_protobuf_assertEncode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagBigInt>(input),
        message: typia.protobuf.message<CommentTagBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagBigInt>(),
    });
