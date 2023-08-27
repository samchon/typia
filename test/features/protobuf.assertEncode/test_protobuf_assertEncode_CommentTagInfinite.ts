import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_assertEncode_CommentTagInfinite =
    _test_protobuf_assertEncode("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagInfinite>(input),
        message: typia.protobuf.message<CommentTagInfinite>(),
        decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    });
