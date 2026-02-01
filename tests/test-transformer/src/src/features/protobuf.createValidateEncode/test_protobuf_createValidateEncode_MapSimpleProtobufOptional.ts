import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createValidateEncode_MapSimpleProtobufOptional = (): void => _test_protobuf_validateEncode(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
  encode: typia.protobuf.createValidateEncode<MapSimpleProtobufOptional>(),
  decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
  message: typia.protobuf.message<MapSimpleProtobufOptional>(),
});
