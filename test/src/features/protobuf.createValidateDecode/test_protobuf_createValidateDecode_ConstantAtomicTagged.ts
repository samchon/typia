import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createValidateDecode_ConstantAtomicTagged =
  (): void =>
    _test_protobuf_validateDecode("ConstantAtomicTagged")<ConstantAtomicTagged>(
      ConstantAtomicTagged,
    )({
      decode: typia.protobuf.createValidateDecode<ConstantAtomicTagged>(),
      encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
    });
