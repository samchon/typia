import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_validateDecode_ConstantAtomicAbsorbed = (): void =>
  _test_protobuf_validateDecode(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    decode: (input) =>
      typia.protobuf.validateDecode<ConstantAtomicAbsorbed>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
