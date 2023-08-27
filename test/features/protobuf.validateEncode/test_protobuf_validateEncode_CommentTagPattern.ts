import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_protobuf_validateEncode_CommentTagPattern =
    _test_protobuf_validateEncode("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagPattern>(input),
        message: typia.protobuf.message<CommentTagPattern>(),
        decode: typia.protobuf.createDecode<CommentTagPattern>(),
    });
