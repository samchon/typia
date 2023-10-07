import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createAssertDecode_CommentTagLength =
    _test_protobuf_assertDecode("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )({
        decode: typia.protobuf.createAssertDecode<CommentTagLength>(),
        encode: typia.protobuf.createEncode<CommentTagLength>(),
    });
