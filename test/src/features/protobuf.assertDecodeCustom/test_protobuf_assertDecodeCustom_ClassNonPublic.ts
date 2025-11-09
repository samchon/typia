import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_assertDecodeCustom_ClassNonPublic = (): void =>
  _test_protobuf_assertDecode(CustomGuardError)(
    "ClassNonPublic",
  )<ClassNonPublic>(ClassNonPublic)({
    decode: (input) =>
      typia.protobuf.assertDecode<ClassNonPublic>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
  });
