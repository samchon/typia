import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectOptional = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
  encode: typia.protobuf.createAssertEncode<ObjectOptional>(),
  decode: typia.protobuf.createDecode<ObjectOptional>(),
  message: typia.protobuf.message<ObjectOptional>(),
});
