import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createAssertDecode_ConstantAtomicTagged =
  _test_protobuf_assertDecode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    decode: (input) => typia.protobuf.assertDecode<ConstantAtomicTagged>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
