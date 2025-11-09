import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createEncode_ConstantAtomicAbsorbed = (): void =>
  _test_protobuf_encode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
    decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
    message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
  });
