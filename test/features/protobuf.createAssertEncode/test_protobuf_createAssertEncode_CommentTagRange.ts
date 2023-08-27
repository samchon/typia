import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_assertEncode_CommentTagRange =
    _test_protobuf_assertEncode("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )({
        assertEncode: typia.protobuf.createAssertEncode<CommentTagRange>(),
        message: typia.protobuf.message<CommentTagRange>(),
        decode: typia.protobuf.createDecode<CommentTagRange>(),
    });
