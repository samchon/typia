import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_assertEncode_ObjectHttpCommentTag =
    _test_protobuf_assertEncode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpCommentTag>(input),
        message: typia.protobuf.message<ObjectHttpCommentTag>(),
        decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    });
