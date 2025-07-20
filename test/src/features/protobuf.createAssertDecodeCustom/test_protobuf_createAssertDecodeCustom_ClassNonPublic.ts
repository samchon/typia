import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createAssertDecodeCustom_ClassNonPublic = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "ClassNonPublic",
  )<ClassNonPublic>(ClassNonPublic)({
    decode: typia.protobuf.createAssertDecode<ClassNonPublic>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
