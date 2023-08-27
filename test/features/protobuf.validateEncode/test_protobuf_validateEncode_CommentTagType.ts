import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_validateEncode_CommentTagType =
    _test_protobuf_validateEncode("CommentTagType")<CommentTagType>(
        CommentTagType,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagType>(input),
        message: typia.protobuf.message<CommentTagType>(),
        decode: typia.protobuf.createDecode<CommentTagType>(),
    });
