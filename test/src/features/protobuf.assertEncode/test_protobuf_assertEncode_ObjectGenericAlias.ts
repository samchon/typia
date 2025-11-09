import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_assertEncode_ObjectGenericAlias = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)({
    encode: (input) => typia.protobuf.assertEncode<ObjectGenericAlias>(input),
    decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    message: typia.protobuf.message<ObjectGenericAlias>(),
  });
