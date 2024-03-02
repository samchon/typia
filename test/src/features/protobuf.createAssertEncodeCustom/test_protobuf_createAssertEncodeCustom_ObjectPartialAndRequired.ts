import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_createAssertEncodeCustom_ObjectPartialAndRequired =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
    encode: typia.protobuf.createAssertEncode<ObjectPartialAndRequired>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
    message: typia.protobuf.message<ObjectPartialAndRequired>(),
  });
