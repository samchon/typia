import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_assertEncodeCustom_ObjectOptional = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectOptional",
  )<ObjectOptional>(ObjectOptional)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectOptional>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectOptional>(),
    message: typia.protobuf.message<ObjectOptional>(),
  });
