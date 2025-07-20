import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_protobuf_message_ConstantAtomicTagged = (): void =>
  _test_protobuf_message("ConstantAtomicTagged")(
    typia.protobuf.message<ConstantAtomicTagged>(),
  );
