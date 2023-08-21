import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_isEncode_ObjectPrimitive = _test_protobuf_isEncode(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectPrimitive>(input),
    message: typia.protobuf.message<ObjectPrimitive>(),
});
