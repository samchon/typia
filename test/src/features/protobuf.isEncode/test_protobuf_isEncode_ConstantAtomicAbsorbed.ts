import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_isEncode_ConstantAtomicAbsorbed = (): void =>
  _test_protobuf_isEncode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    encode: (input) => typia.protobuf.isEncode<ConstantAtomicAbsorbed>(input),
    decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
    message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
  });
