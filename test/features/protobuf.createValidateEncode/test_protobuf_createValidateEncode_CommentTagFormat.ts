import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createValidateEncode_CommentTagFormat =
    _test_protobuf_validateEncode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        validateEncode: typia.protobuf.createValidateEncode<CommentTagFormat>(),
        message: typia.protobuf.message<CommentTagFormat>(),
        decode: typia.protobuf.createDecode<CommentTagFormat>(),
    });
