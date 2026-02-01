import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectUnionExplicitPointer = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
  encode: typia.protobuf.createAssertEncode<ObjectUnionExplicitPointer>(),
  decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
  message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
});
