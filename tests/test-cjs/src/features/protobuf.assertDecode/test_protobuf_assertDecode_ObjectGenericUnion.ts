import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_assertDecode_ObjectGenericUnion = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)({
    decode: (input) => typia.protobuf.assertDecode<ObjectGenericUnion>(input),
    encode: typia.protobuf.createEncode<ObjectGenericUnion>(),
  });
