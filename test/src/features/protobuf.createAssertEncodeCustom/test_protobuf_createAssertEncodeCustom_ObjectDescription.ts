import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectDescription =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)({
    encode: typia.protobuf.createAssertEncode<ObjectDescription>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
