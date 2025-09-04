import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createValidateEncode_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateEncode(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      encode: typia.protobuf.createValidateEncode<MapSimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
      message: typia.protobuf.message<MapSimpleProtobufNullable>(),
    });
