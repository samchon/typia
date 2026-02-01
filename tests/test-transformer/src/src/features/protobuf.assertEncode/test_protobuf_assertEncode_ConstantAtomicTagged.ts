import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_ConstantAtomicTagged = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  encode: (input) => typia.protobuf.assertEncode<ConstantAtomicTagged>(input),
  decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
  message: typia.protobuf.message<ConstantAtomicTagged>(),
});
