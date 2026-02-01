import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createEncode_MapSimpleProtobufOptional = (): void => _test_protobuf_encode(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
  encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
  message: typia.protobuf.message<MapSimpleProtobufOptional>(),
});
