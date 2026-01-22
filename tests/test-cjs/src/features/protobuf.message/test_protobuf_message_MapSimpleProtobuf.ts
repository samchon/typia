import typia from "typia";

import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_message_MapSimpleProtobuf = (): void =>
  _test_protobuf_message("MapSimpleProtobuf")(
    typia.protobuf.message<MapSimpleProtobuf>(),
  );
