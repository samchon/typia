import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createAssertEncodeCustom_ConstantAtomicTagged =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "ConstantAtomicTagged",
    )<ConstantAtomicTagged>(ConstantAtomicTagged)({
      encode: typia.protobuf.createAssertEncode<ConstantAtomicTagged>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
      message: typia.protobuf.message<ConstantAtomicTagged>(),
    });
