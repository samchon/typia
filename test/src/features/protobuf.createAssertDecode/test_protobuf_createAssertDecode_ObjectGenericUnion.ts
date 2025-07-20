import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createAssertDecode_ObjectGenericUnion = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)({
    decode: typia.protobuf.createAssertDecode<ObjectGenericUnion>(),
    encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
  });
