import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_assertEncode_CommentTagFormat =
    _test_protobuf_assertEncode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagFormat>(input),
        message: typia.protobuf.message<CommentTagFormat>(),
        decode: typia.protobuf.createDecode<CommentTagFormat>(),
    });
