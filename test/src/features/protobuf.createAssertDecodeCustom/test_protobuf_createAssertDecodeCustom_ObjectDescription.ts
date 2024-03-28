import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createAssertDecodeCustom_ObjectDescription =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)({
    decode: typia.protobuf.createAssertDecode<ObjectDescription>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ObjectDescription>(),
  });
