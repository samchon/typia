import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectGenericArray = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
  encode: typia.protobuf.createAssertEncode<ObjectGenericArray>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectGenericArray>(),
  message: typia.protobuf.message<ObjectGenericArray>(),
});
