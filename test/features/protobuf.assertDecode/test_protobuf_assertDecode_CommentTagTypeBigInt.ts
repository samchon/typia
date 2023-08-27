import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_protobuf_assertDecode_CommentTagTypeBigInt =
    _test_protobuf_assertDecode("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
        CommentTagTypeBigInt,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagTypeBigInt>(input),
        encode: typia.protobuf.createEncode<CommentTagTypeBigInt>(),
    });
