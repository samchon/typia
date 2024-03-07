import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ObjectPartialAndRequired =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    encode: typia.protobuf.createAssertEncode<ObjectPartialAndRequired>(),
    decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    message: typia.protobuf.message<ObjectPartialAndRequired>(),
  });
