import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_assertDecode_CommentTagLength =
    _test_protobuf_assertDecode("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<CommentTagLength>(input),
        encode: typia.protobuf.createEncode<CommentTagLength>(),
    });
