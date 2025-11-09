import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_isEncode_ConstantAtomicTagged = (): void => _test_protobuf_isEncode(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  encode: (input) => typia.protobuf.isEncode<ConstantAtomicTagged>(input),
  decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
  message: typia.protobuf.message<ConstantAtomicTagged>(),
});
