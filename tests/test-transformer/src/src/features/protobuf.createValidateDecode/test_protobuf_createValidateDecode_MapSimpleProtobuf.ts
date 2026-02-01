import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createValidateDecode_MapSimpleProtobuf = (): void => _test_protobuf_validateDecode(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  decode: typia.protobuf.createValidateDecode<MapSimpleProtobuf>(),
  encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
