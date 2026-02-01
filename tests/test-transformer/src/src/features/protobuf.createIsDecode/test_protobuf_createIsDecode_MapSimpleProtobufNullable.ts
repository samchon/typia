import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createIsDecode_MapSimpleProtobufNullable = (): void => _test_protobuf_isDecode(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  decode: typia.protobuf.createIsDecode<MapSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
});
