import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_assertEncode_CommentTagType =
    _test_protobuf_assertEncode("CommentTagType")<CommentTagType>(
        CommentTagType,
    )({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagType>(),
        message: typia.protobuf.message<CommentTagType>(),
        decode: typia.protobuf.createDecode<CommentTagType>(),
    });
