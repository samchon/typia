import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_protobuf_createDecode_CommentTagLength =
    _test_protobuf_decode("CommentTagLength")<CommentTagLength>(
        CommentTagLength,
    )({
        decode: typia.protobuf.createDecode<CommentTagLength>(),
        encode: typia.protobuf.createEncode<CommentTagLength>(),
    });
