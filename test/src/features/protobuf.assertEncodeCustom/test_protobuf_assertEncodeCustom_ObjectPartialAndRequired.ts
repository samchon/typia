import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_protobuf_assertEncodeCustom_ObjectPartialAndRequired =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectPartialAndRequired>(
          input,
          (p) => new CustomGuardError(p),
        ),
      decode: typia.protobuf.createDecode<ObjectPartialAndRequired>(),
      message: typia.protobuf.message<ObjectPartialAndRequired>(),
    });
