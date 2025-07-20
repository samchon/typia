import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_assertDecodeCustom_ConstantAtomicAbsorbed =
  (): void =>
    _test_protobuf_assertDecode(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
      decode: (input) =>
        typia.protobuf.assertDecode<ConstantAtomicAbsorbed>(
          input,
          (p) => new CustomGuardError(p),
        ),
      encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
    });
