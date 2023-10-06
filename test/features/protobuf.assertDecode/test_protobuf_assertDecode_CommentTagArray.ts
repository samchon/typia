import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertDecode_CommentTagArray =
    _test_protobuf_assertDecode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        decode: (input) => typia.protobuf.assertDecode<CommentTagArray>(input),
        encode: typia.protobuf.createEncode<CommentTagArray>(),
    });
