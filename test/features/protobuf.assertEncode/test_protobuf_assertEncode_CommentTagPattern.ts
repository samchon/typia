import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_assertEncode_CommentTagPattern =
    _test_protobuf_assertEncode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagPattern>(input),
        message: typia.protobuf.message<CommentTagPattern>(),
        decode: typia.protobuf.createDecode<CommentTagPattern>(),
    });
