import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_protobuf_createIsEncode_CommentTagNaN =
    _test_protobuf_isEncode("CommentTagNaN")<CommentTagNaN>(CommentTagNaN)({
        isEncode: typia.protobuf.createIsEncode<CommentTagNaN>(),
        message: typia.protobuf.message<CommentTagNaN>(),
        decode: typia.protobuf.createDecode<CommentTagNaN>(),
    });
