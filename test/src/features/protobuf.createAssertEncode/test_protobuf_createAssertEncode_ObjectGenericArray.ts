import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectGenericArray = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
  encode: typia.protobuf.createAssertEncode<ObjectGenericArray>(),
  decode: typia.protobuf.createDecode<ObjectGenericArray>(),
  message: typia.protobuf.message<ObjectGenericArray>(),
});
