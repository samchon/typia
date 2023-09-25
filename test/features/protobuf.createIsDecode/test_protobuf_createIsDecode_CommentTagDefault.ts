import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_protobuf_createIsDecode_CommentTagDefault =
    _test_protobuf_isDecode("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )({
        isDecode: typia.protobuf.createIsDecode<CommentTagDefault>(),
        encode: typia.protobuf.createEncode<CommentTagDefault>(),
    });
