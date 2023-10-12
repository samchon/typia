import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createAssertEncode_ObjectHttpCommentTag =
    _test_protobuf_assertEncode("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )({
        encode: (input) =>
            typia.protobuf.assertEncode<ObjectHttpCommentTag>(input),
        decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
        message: typia.protobuf.message<ObjectHttpCommentTag>(),
    });
