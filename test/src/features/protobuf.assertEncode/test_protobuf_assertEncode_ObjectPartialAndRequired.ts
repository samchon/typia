import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_assertEncode_ObjectPartialAndRequired = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectPartialAndRequired>(input),
    decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    message: typia.protobuf.message<ObjectPartialAndRequired>(),
  });
