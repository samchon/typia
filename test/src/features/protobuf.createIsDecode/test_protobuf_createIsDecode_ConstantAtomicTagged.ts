import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createIsDecode_ConstantAtomicTagged = (): void => _test_protobuf_isDecode(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  decode: typia.protobuf.createIsDecode<ConstantAtomicTagged>(),
  encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
});
