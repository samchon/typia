import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_isDecode_MapSimpleProtobuf = (): void => _test_protobuf_isDecode(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  decode: (input) => typia.protobuf.isDecode<MapSimpleProtobuf>(input),
  encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
