import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_assertEncodeCustom_ObjectPrimitive = (): void =>
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
