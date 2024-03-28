import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_assertEncodeCustom_ClassNonPublic =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ClassNonPublic",
  )<ClassNonPublic>(ClassNonPublic)({
    encode: (input) =>
      typia.protobuf.assertEncode<ClassNonPublic>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ClassNonPublic>(),
    message: typia.protobuf.message<ClassNonPublic>(),
  });
