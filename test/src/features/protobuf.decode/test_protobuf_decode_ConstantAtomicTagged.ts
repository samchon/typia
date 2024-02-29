import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createDecode_ConstantAtomicTagged =
  _test_protobuf_decode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    decode: (input) => typia.protobuf.decode<ConstantAtomicTagged>(input),
    encode: typia.protobuf.createEncode<ConstantAtomicTagged>(),
  });
