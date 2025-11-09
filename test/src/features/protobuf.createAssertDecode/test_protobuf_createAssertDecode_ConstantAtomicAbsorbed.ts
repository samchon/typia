import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createAssertDecode_ConstantAtomicAbsorbed =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
      decode: typia.protobuf.createAssertDecode<ConstantAtomicAbsorbed>(),
      encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
    });
