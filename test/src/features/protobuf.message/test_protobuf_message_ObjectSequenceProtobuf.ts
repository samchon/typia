import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_protobuf_message_ObjectSequenceProtobuf = (): void =>
  _test_protobuf_message("ObjectSequenceProtobuf")(
    typia.protobuf.message<ObjectSequenceProtobuf>(),
  );
