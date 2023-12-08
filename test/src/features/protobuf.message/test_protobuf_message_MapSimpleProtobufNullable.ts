import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_message_MapSimpleProtobufNullable =
  _test_protobuf_message("MapSimpleProtobufNullable")(
    typia.protobuf.message<MapSimpleProtobufNullable>(),
  );
