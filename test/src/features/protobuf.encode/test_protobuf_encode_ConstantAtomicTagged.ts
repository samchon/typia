import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_createEncode_ConstantAtomicTagged =
  _test_protobuf_encode("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )({
    encode: (input) => typia.protobuf.encode<ConstantAtomicTagged>(input),
    decode: typia.protobuf.createDecode<ConstantAtomicTagged>(),
    message: typia.protobuf.message<ConstantAtomicTagged>(),
  });
