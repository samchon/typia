import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_ConstantAtomicAbsorbed = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
  decode: typia.protobuf.createAssertDecode<ConstantAtomicAbsorbed>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
});
