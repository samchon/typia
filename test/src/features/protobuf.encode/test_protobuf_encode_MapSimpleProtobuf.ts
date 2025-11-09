import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_encode_MapSimpleProtobuf = (): void => _test_protobuf_encode(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  encode: (input) => typia.protobuf.encode<MapSimpleProtobuf>(input),
  decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
  message: typia.protobuf.message<MapSimpleProtobuf>(),
});
