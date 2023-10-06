import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createEncode_ObjectPrimitive = _test_protobuf_encode(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    encode: (input) => typia.protobuf.encode<ObjectPrimitive>(input),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
});
