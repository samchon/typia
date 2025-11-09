import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_validateDecode_ConstantAtomicTagged = (): void => _test_protobuf_validateDecode(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)({
  decode: (input) => typia.protobuf.validateDecode<ConstantAtomicTagged>(input),
  encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
});
