import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createValidateDecode_MapSimpleProtobufNullable = (): void => _test_protobuf_validateDecode(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  decode: typia.protobuf.createValidateDecode<MapSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
});
