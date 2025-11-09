import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createAssertEncode_ConstantAtomicTagged = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "ConstantAtomicTagged",
  )<ConstantAtomicTagged>(ConstantAtomicTagged)({
    encode: typia.protobuf.createAssertEncode<ConstantAtomicTagged>(),
    decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
    message: typia.protobuf.message<ConstantAtomicTagged>(),
  });
