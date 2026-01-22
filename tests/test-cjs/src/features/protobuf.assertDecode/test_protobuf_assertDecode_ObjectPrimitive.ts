import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_assertDecode_ObjectPrimitive = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)({
    decode: (input) => typia.protobuf.assertDecode<ObjectPrimitive>(input),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
