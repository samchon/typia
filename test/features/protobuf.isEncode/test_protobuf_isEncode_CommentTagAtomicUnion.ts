import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_isEncode_CommentTagAtomicUnion =
    _test_protobuf_isEncode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )({
        isEncode: (input) =>
            typia.protobuf.isEncode<CommentTagAtomicUnion>(input),
        message: typia.protobuf.message<CommentTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    });
