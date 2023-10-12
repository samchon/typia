import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_protobuf_createEncode_CommentTagFormat =
    _test_protobuf_encode("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )({
        encode: (input) => typia.protobuf.encode<CommentTagFormat>(input),
        decode: typia.protobuf.createDecode<CommentTagFormat>(),
        message: typia.protobuf.message<CommentTagFormat>(),
    });
