import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_validateEncode_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateEncode(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      encode: (input) =>
        typia.protobuf.validateEncode<MapSimpleProtobufNullable>(input),
      decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
      message: typia.protobuf.message<MapSimpleProtobufNullable>(),
    });
