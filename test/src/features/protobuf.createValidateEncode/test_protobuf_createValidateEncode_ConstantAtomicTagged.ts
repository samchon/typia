import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createValidateEncode_ConstantAtomicTagged =
  (): void =>
    _test_protobuf_validateEncode("ConstantAtomicTagged")<ConstantAtomicTagged>(
      ConstantAtomicTagged,
    )({
      encode: typia.protobuf.createValidateEncode<ConstantAtomicTagged>(),
      decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
      message: typia.protobuf.message<ConstantAtomicTagged>(),
    });
