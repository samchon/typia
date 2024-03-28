import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_assertDecode_ConstantAtomicAbsorbed =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    decode: (input) =>
      typia.protobuf.assertDecode<ConstantAtomicAbsorbed>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
