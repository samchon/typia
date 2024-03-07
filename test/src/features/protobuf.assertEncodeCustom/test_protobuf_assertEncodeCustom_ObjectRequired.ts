import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ObjectRequired =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectRequired",
  )<ObjectRequired>(ObjectRequired)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectRequired>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectRequired>(),
    message: typia.protobuf.message<ObjectRequired>(),
  });
