import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectGenericUnion = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  encode: (input) => typia.protobuf.assertEncode<ObjectGenericUnion>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
  message: typia.protobuf.message<ObjectGenericUnion>(),
});
