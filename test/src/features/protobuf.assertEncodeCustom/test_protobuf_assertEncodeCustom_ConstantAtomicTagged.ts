import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ConstantAtomicTagged = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  encode: (input) => typia.protobuf.assertEncode<ConstantAtomicTagged>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
  message: typia.protobuf.message<ConstantAtomicTagged>(),
});
