import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createAssertEncode_ObjectGenericUnion = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)({
    encode: typia.protobuf.createAssertEncode<ObjectGenericUnion>(),
    decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
    message: typia.protobuf.message<ObjectGenericUnion>(),
  });
