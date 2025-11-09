import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_protobuf_assertEncodeCustom_ObjectHttpArray = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectHttpArray>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectHttpArray>(),
    message: typia.protobuf.message<ObjectHttpArray>(),
  });
