import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createAssertEncode_CommentTagNaN =
    _test_protobuf_assertEncode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
        encode: (input) => typia.protobuf.assertEncode<CommentTagNaN>(input),
        decode: typia.protobuf.createDecode<CommentTagNaN>(),
        message: typia.protobuf.message<CommentTagNaN>(),
    });
