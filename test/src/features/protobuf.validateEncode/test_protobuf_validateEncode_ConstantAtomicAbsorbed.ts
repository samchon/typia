import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_validateEncode_ConstantAtomicAbsorbed = (): void =>
  _test_protobuf_validateEncode(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    encode: (input) =>
      typia.protobuf.validateEncode<ConstantAtomicAbsorbed>(input),
    decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
    message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
  });
