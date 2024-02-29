import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createValidateEncode_ConstantAtomicTagged =
  _test_protobuf_validateEncode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    encode: (input) =>
      typia.protobuf.validateEncode<ConstantAtomicTagged>(input),
    decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
    message: typia.protobuf.message<ConstantAtomicTagged>(),
  });
