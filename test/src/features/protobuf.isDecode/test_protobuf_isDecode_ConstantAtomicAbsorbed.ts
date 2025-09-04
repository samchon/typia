import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_isDecode_ConstantAtomicAbsorbed = (): void =>
  _test_protobuf_isDecode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    decode: (input) => typia.protobuf.isDecode<ConstantAtomicAbsorbed>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
