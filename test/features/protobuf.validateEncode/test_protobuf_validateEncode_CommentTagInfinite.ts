import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_protobuf_validateEncode_CommentTagInfinite =
    _test_protobuf_validateEncode("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagInfinite>(input),
        message: typia.protobuf.message<CommentTagInfinite>(),
        decode: typia.protobuf.createDecode<CommentTagInfinite>(),
    });
