import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_protobuf_createAssertEncode_CommentTagArray =
    _test_protobuf_assertEncode("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )({
        encode: typia.protobuf.createAssertEncode<CommentTagArray>(),
        decode: typia.protobuf.createDecode<CommentTagArray>(),
        message: typia.protobuf.message<CommentTagArray>(),
    });
