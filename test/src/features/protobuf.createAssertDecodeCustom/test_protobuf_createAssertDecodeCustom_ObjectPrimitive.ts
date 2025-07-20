import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createAssertDecodeCustom_ObjectPrimitive =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ObjectPrimitive",
    )<ObjectPrimitive>(ObjectPrimitive)({
      decode: typia.protobuf.createAssertDecode<ObjectPrimitive>(
        (p) => new CustomGuardError(p),
      ),
      encode: typia.protobuf.createEncode<ObjectPrimitive>(),
    });
