import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_message_ObjectSimpleProtobufOptional = (): void =>
  _test_protobuf_message("ObjectSimpleProtobufOptional")(
    typia.protobuf.message<ObjectSimpleProtobufOptional>(),
  );
