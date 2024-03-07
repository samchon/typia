import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ClassNonPublic =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ClassNonPublic",
  )<ClassNonPublic>(ClassNonPublic)({
    encode: typia.protobuf.createAssertEncode<ClassNonPublic>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ClassNonPublic>(),
    message: typia.protobuf.message<ClassNonPublic>(),
  });
