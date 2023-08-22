import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_encode_ObjectPrimitive = _test_protobuf_encode(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
});
