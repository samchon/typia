import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createAssertDecodeCustom_ConstantAtomicTagged =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    decode: typia.protobuf.createAssertDecode<ConstantAtomicTagged>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
