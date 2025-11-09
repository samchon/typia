import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_assertDecode_ConstantAtomicTagged = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    decode: (input) => typia.protobuf.assertDecode<ConstantAtomicTagged>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
