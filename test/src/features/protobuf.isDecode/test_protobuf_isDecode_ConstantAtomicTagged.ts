import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_isDecode_ConstantAtomicTagged =
  _test_protobuf_isDecode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    decode: (input) => typia.protobuf.isDecode<ConstantAtomicTagged>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
