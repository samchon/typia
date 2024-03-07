import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectGenericAlias =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)({
    encode: typia.protobuf.createAssertEncode<ObjectGenericAlias>(),
    decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
    message: typia.protobuf.message<ObjectGenericAlias>(),
  });
