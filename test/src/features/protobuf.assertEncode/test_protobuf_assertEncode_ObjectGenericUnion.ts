import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ObjectGenericUnion = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)({
  encode: (input) => typia.protobuf.assertEncode<ObjectGenericUnion>(input),
  decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
  message: typia.protobuf.message<ObjectGenericUnion>(),
});
