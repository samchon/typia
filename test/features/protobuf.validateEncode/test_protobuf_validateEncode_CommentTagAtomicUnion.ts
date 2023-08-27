import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_protobuf_validateEncode_CommentTagAtomicUnion =
    _test_protobuf_validateEncode(
        "CommentTagAtomicUnion",
    )<CommentTagAtomicUnion>(CommentTagAtomicUnion)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<CommentTagAtomicUnion>(input),
        message: typia.protobuf.message<CommentTagAtomicUnion>(),
        decode: typia.protobuf.createDecode<CommentTagAtomicUnion>(),
    });
