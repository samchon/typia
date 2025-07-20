import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_protobuf_createAssertEncode_ObjectDescription = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)({
    encode: typia.protobuf.createAssertEncode<ObjectDescription>(),
    decode: typia.protobuf.createDecode<ObjectDescription>(),
    message: typia.protobuf.message<ObjectDescription>(),
  });
