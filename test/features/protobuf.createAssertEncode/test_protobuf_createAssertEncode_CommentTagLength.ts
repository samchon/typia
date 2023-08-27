import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_assertEncode_CommentTagLength =
    _test_protobuf_assertEncode("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagLength>(),
        message: typia.protobuf.message<CommentTagLength>(),
        decode: typia.protobuf.createDecode<CommentTagLength>(),
    });
