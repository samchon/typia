import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_isEncode_ObjectJsonTag = _test_protobuf_isEncode(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    isEncode: typia.protobuf.createIsEncode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
});
