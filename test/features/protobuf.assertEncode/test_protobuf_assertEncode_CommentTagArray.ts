import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_assertEncode_CommentTagArray =
    _test_protobuf_assertEncode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagArray>(input),
        message: typia.protobuf.message<CommentTagArray>(),
        decode: typia.protobuf.createDecode<CommentTagArray>(),
    });
