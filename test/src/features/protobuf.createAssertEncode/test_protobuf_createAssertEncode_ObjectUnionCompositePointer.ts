import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectUnionCompositePointer = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
  encode: typia.protobuf.createAssertEncode<ObjectUnionCompositePointer>(),
  decode: typia.protobuf.createDecode<ObjectUnionCompositePointer>(),
  message: typia.protobuf.message<ObjectUnionCompositePointer>(),
});
