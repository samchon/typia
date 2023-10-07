import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_protobuf_createAssertDecode_CommentTagType =
    _test_protobuf_assertDecode("CommentTagType")<CommentTagType>(
        CommentTagType,
    )({
        decode: typia.protobuf.createAssertDecode<CommentTagType>(),
        encode: typia.protobuf.createEncode<CommentTagType>(),
    });
