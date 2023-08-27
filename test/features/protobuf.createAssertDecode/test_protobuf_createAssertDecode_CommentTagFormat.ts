import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_assertDecode_CommentTagFormat =
    _test_protobuf_assertDecode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        assertDecode: typia.protobuf.createAssertDecode<CommentTagFormat>(),
        encode: typia.protobuf.createEncode<CommentTagFormat>(),
    });
