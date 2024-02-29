import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_protobuf_message_ConstantAtomicAbsorbed =
  _test_protobuf_message("ConstantAtomicAbsorbed")(
    typia.protobuf.message<ConstantAtomicAbsorbed>(),
  );
