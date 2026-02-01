import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_ObjectGenericAlias = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
  decode: typia.protobuf.createAssertDecode<ObjectGenericAlias>(),
  encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
});
