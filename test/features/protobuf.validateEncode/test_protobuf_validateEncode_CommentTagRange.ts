import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_createValidateEncode_CommentTagRange =
    _test_protobuf_validateEncode("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )({
        encode: (input) =>
            typia.protobuf.validateEncode<CommentTagRange>(input),
        decode: typia.protobuf.createDecode<CommentTagRange>(),
        message: typia.protobuf.message<CommentTagRange>(),
    });
