import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ObjectPrimitive =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)({
    decode: typia.protobuf.createAssertDecode<ObjectPrimitive>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectPrimitive>(),
  });
