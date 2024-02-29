import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createAssertEncode_ConstantAtomicTagged =
  _test_protobuf_assertEncode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    encode: (input) => typia.protobuf.assertEncode<ConstantAtomicTagged>(input),
    decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
    message: typia.protobuf.message<ConstantAtomicTagged>(),
  });
