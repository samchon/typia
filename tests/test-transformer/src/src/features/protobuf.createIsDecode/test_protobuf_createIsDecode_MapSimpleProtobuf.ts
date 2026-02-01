import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createIsDecode_MapSimpleProtobuf = (): void => _test_protobuf_isDecode(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  decode: typia.protobuf.createIsDecode<MapSimpleProtobuf>(),
  encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
