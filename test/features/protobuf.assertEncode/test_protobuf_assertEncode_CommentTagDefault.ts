import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createAssertEncode_CommentTagDefault =
    _test_protobuf_assertEncode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        encode: (input) =>
            typia.protobuf.assertEncode<CommentTagDefault>(input),
        decode: typia.protobuf.createDecode<CommentTagDefault>(),
        message: typia.protobuf.message<CommentTagDefault>(),
    });
