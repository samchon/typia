import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_protobuf_encode_ObjectHttpCommentTag = _test_protobuf_encode(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    encode: (input) => typia.protobuf.encode<ObjectHttpCommentTag>(input),
    message: typia.protobuf.message<ObjectHttpCommentTag>(),
    decode: typia.protobuf.createDecode<ObjectHttpCommentTag>(),
});
