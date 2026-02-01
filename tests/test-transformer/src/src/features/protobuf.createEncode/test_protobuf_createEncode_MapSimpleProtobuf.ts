import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createEncode_MapSimpleProtobuf = (): void => _test_protobuf_encode(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
  decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
  message: typia.protobuf.message<MapSimpleProtobuf>(),
});
