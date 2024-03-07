import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ConstantAtomicAbsorbed =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    encode: typia.protobuf.createAssertEncode<ConstantAtomicAbsorbed>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
    message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
  });
