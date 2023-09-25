import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_protobuf_createAssertEncode_CommentTagRangeBigInt =
    _test_protobuf_assertEncode("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt,
    )({
        assertEncode:
            typia.protobuf.createAssertEncode<CommentTagRangeBigInt>(),
        message: typia.protobuf.message<CommentTagRangeBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagRangeBigInt>(),
    });
