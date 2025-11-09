import typia from "typia";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";

export const test_protobuf_message_MapSimpleProtobufNullable = (): void => _test_protobuf_message(
  "MapSimpleProtobufNullable",
)(typia.protobuf.message<MapSimpleProtobufNullable>());