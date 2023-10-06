import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createDecode_ObjectPrimitive = _test_protobuf_decode(
    "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)({
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
});
