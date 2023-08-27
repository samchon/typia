import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_validateEncode_CommentTagNaN =
    _test_protobuf_validateEncode("CommentTagNaN")<CommentTagNaN>(
        CommentTagNaN,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagNaN>(input),
        message: typia.protobuf.message<CommentTagNaN>(),
        decode: typia.protobuf.createDecode<CommentTagNaN>(),
    });
