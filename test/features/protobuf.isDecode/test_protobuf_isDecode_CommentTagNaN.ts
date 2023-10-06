import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createIsDecode_CommentTagNaN =
    _test_protobuf_isDecode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
        decode: (input) => typia.protobuf.isDecode<CommentTagNaN>(input),
        encode: typia.protobuf.createEncode<CommentTagNaN>(),
    });
