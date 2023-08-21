import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_isEncode_ObjectJsonTag = _test_protobuf_isEncode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectJsonTag>(input),
    message: typia.protobuf.message<ObjectJsonTag>(),
});
