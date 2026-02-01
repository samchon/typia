import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_createIsEncode_ConstantAtomicAbsorbed = (): void => _test_protobuf_isEncode(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)({
  encode: typia.protobuf.createIsEncode<ConstantAtomicAbsorbed>(),
  decode: typia.protobuf.createDecode<ConstantAtomicAbsorbed>(),
  message: typia.protobuf.message<ConstantAtomicAbsorbed>(),
});
