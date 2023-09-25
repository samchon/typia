import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createIsDecode_CommentTagArray =
    _test_protobuf_isDecode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        isDecode: typia.protobuf.createIsDecode<CommentTagArray>(),
        encode: typia.protobuf.createEncode<CommentTagArray>(),
    });
