import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createAssertDecode_ConstantAtomicAbsorbed =
  _test_protobuf_assertDecode("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )({
    decode: typia.protobuf.createAssertDecode<ConstantAtomicAbsorbed>(),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
