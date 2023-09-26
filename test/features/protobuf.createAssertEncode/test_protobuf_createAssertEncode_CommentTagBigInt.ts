import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createAssertEncode_CommentTagBigInt =
    _test_protobuf_assertEncode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagBigInt>(),
        message: typia.protobuf.message<CommentTagBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagBigInt>(),
    });
