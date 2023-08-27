import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_protobuf_validateEncode_CommentTagRange =
    _test_protobuf_validateEncode("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagRange>(input),
        message: typia.protobuf.message<CommentTagRange>(),
        decode: typia.protobuf.createDecode<CommentTagRange>(),
    });
