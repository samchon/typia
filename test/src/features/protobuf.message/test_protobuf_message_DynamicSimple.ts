import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_message_DynamicSimple = (): void =>
  _test_protobuf_message("DynamicSimple")(
    typia.protobuf.message<DynamicSimple>(),
  );
