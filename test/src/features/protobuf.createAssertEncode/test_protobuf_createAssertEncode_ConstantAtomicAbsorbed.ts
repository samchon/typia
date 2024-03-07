import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_ConstantAtomicAbsorbed =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    encode: typia.protobuf.createAssertEncode<ConstantAtomicAbsorbed>(),
    decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
    message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
  });
