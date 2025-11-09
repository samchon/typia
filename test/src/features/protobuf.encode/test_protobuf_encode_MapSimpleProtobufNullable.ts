import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_encode_MapSimpleProtobufNullable = (): void => _test_protobuf_encode(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  encode: (input) => typia.protobuf.encode<MapSimpleProtobufNullable>(input),
  decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
  message: typia.protobuf.message<MapSimpleProtobufNullable>(),
});
