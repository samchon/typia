import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ObjectGenericUnion = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  encode: typia.protobuf.createAssertEncode<ObjectGenericUnion>((p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
  message: typia.protobuf.message<ObjectGenericUnion>(),
});
