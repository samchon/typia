import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createValidateDecode_ConstantAtomicAbsorbed =
  _test_protobuf_validateDecode(
    "ConstantAtomicAbsorbed",
  )<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
    decode: typia.protobuf.createValidateDecode<ConstantAtomicAbsorbed>(),
    encode: typia.protobuf.createEncode<ConstantAtomicAbsorbed>(),
  });
