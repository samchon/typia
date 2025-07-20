import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_assertEncodeCustom_ObjectPartial = (): void =>
  _test_protobuf_assertEncode(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )({
    encode: (input) =>
      typia.protobuf.assertEncode<ObjectPartial>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ObjectPartial>(),
    message: typia.protobuf.message<ObjectPartial>(),
  });
