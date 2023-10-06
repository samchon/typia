import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_createIsEncode_ObjectHttpCommentTag = _test_protobuf_isEncode(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    encode: typia.protobuf.createIsEncode<ObjectHttpCommentTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
});
