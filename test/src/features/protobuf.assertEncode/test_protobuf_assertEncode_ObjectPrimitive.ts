import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_assertEncode_ObjectPrimitive = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)({
    encode: (input) => typia.protobuf.assertEncode<ObjectPrimitive>(input),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
  });
