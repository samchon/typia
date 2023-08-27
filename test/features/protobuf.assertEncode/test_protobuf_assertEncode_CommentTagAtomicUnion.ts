import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_assertEncode_CommentTagAtomicUnion =
    _test_protobuf_assertEncode("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<CommentTagAtomicUnion>(input),
        message: typia.protobuf.message<CommentTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    });
