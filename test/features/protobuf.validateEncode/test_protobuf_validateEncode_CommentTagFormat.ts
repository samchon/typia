import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_validateEncode_CommentTagFormat =
    _test_protobuf_validateEncode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagFormat>(input),
        message: typia.protobuf.message<CommentTagFormat>(),
        decode: typia.protobuf.createDecode<CommentTagFormat>(),
    });
