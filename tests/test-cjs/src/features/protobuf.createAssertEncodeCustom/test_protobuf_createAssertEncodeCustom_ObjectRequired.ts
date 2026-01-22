import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_protobuf_createAssertEncodeCustom_ObjectRequired = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)({
    encode: typia.protobuf.createAssertEncode<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
    message: typia.protobuf.message<ObjectRequired>(),
  });
