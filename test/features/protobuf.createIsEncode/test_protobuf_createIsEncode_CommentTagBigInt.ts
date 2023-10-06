import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_protobuf_createIsEncode_CommentTagBigInt =
    _test_protobuf_isEncode("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt,
    )({
        encode: typia.protobuf.createIsEncode<CommentTagBigInt>(),
        decode: typia.protobuf.createDecode<CommentTagBigInt>(),
        message: typia.protobuf.message<CommentTagBigInt>(),
    });
