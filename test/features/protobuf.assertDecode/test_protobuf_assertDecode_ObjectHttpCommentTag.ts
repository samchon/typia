import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createAssertDecode_ObjectHttpCommentTag =
    _test_protobuf_assertDecode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )({
        decode: (input) =>
            typia.protobuf.assertDecode<ObjectHttpCommentTag>(input),
        encode: typia.protobuf.createEncode<ObjectHttpCommentTag>(),
    });
