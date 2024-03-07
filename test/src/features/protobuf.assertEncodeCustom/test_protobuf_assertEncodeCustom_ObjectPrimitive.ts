import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectPrimitive =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectPrimitive>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
  });
