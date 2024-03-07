import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ConstantAtomicTagged =
  _test_protobuf_assertDecode(CustomGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    decode: (input) =>
      typia.protobuf.assertDecode<ConstantAtomicTagged>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
